// cbePdf.model.ts
import { Schema, Document, model, Types } from "mongoose";

export interface ICbePdf extends Document {
  _id: Types.ObjectId;
  title: string;
  description: string;
  difficulty:string;
  courseCode:string;
  fileUrl: string;
  uploadedBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const CbePdfSchema = new Schema(
  {
    title: { type: String, required: true },
    courseCode: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, required: true },
    questions: [{
        question: String,
        correctAnswer: String,
        options: [String],
    }],
    uploadedBy: { type: Schema.Types.ObjectId, ref: "admins", required: false },
  },
  { timestamps: true }
);

export const CbePdfModel = model<ICbePdf>("cbepdfs", CbePdfSchema);