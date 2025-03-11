import { Schema, Document, model, Types } from "mongoose";

export interface IAdmin extends Document {
  _id: Types.ObjectId;
  email: string;
  password: string;
  username: string;
  token: string;
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        token:{
            type: String,
            required: false
        }
    }, {
        timestamps: true
    }
);

export const AdminModel = model<IAdmin>("admins", AdminSchema);
