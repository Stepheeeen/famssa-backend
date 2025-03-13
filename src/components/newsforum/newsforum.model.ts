import { Schema, Document, model, Types } from "mongoose";

export interface INewsForum extends Document {
  _id: Types.ObjectId;
  title: string;
  summary: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

const NewsForumSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, required: false },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    link: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export const NewsForumModel = model<INewsForum>("newsForum", NewsForumSchema);
