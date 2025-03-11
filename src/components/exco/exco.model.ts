import { Schema, Document, model, Types } from "mongoose";

export interface IExco extends Document {
  _id: Types.ObjectId;
  name: string;
  department?: string;
  position: string;
  state?: string;
  lga?: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const ExcoSchema = new Schema<IExco>(
  {
    name: { type: String, required: true },
    department: { type: String },
    position: { type: String, required: true },
    state: { type: String },
    lga: { type: String },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const ExcoModel = model<IExco>("exco", ExcoSchema);
