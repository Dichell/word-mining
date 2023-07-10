import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import userModel from "../models/user.model";
import { User } from "../types";

export const findAndUpdateUser = async (
    query: FilterQuery<User>,
    update: UpdateQuery<User>,
    options: QueryOptions
  ) => {
    return await userModel.findOneAndUpdate(query, update, options);
  };