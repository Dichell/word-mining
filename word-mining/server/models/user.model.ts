import { Schema, model } from 'mongoose';
import { User } from "../types";

interface IUser extends User, Document { }

// Create Schema
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    nativeLang: { type: String, required: true},
    dateCreated: { type: Date, required: true },
    lastLogin: { type: Date, required: true },
    provider: { type: String, required: true },
    photo: { type: String },
    verified: { type: Boolean }
})

export default model<IUser>("users", UserSchema);
