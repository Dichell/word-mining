import { Request, Response, NextFunction } from "express";
import { getGoogleOauthToken, getGoogleUser } from "../../services/session.service";
import { findAndUpdateUser } from "../../services/user.service";
import { config } from "../../config";
import jwt from 'jsonwebtoken';

export const googleOauthHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Get the code from the query
      const code = req.query.code as string;
      const pathUrl = (req.query.state as string) || '/';
  
      if (!code) {
        return next(new Error('Authorization code not provided!'));
      }
  
      // Use the code to get the id and access tokens
      const { id_token, access_token } = await getGoogleOauthToken({ code });
  
      // Use the token to get the User
      const { name, verified_email, email, picture } = await getGoogleUser({id_token, access_token});
  
      // Check if user is verified
      if (!verified_email) {
        return next(new Error('Google account not verified'));
      }
  
      // Update user if user already exist or create new user
      const user = await findAndUpdateUser(
        { email },
        {
          name,
          photo: picture,
          email,
          provider: 'Google',
          verified: true,
        },
        { upsert: true, runValidators: false, new: true, lean: true }
      );
  
      if (!user)
        return res.redirect(`${config.FRONT_URL}/oauth/error`);
  
      // Create access and refresh token
      const token = jwt.sign(user, `${config.SECRET}`, { expiresIn: '1h' });
  
      // Send cookie
      res.cookie('access-token', token);
      res.cookie('logged_in', true, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000), // current time + 1h
      });
  
      res.redirect(`${config.FRONT_URL}${pathUrl}`);
    } catch (err: any) {
      console.log('Failed to authorize Google User', err);
      return res.redirect(`${config.FRONT_URL}/oauth/error`);
    }
  };
  
  