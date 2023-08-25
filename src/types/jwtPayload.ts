import { Types } from "mongoose";
import { UserRoles } from "./user";

export interface JwtPayload {
  userId: Types.ObjectId;
  emailAdd: string;
  role: UserRoles;
}
