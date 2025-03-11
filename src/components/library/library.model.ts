import { Schema, Document, model, Types } from "mongoose";

export interface ILibrary extends Document {
  _id: Types.ObjectId;
  title: string;
  courseCode: string;
  description: string;
  isPremium: boolean;
  fileUrl: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const LibrarySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    courseCode: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isPremium: {
      type: Boolean,
      required: true,
      default: false,
    },
    price:{
      type: Number,
      required: false,
      default: true
    },
    fileUrl: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const LibraryModel = model<ILibrary>("library", LibrarySchema);