import { Schema, Document, model } from "mongoose";

export interface IAboutSection extends Document {
  logoUrl: string;
  aboutText: string;
  updatedAt: Date;
}

const AboutSectionSchema = new Schema(
  {
    logoUrl: { type: String, required: true },
    aboutText: { type: String, required: true },
  },
  { timestamps: true }
);

export const AboutSectionModel = model<IAboutSection>(
  "aboutSection",
  AboutSectionSchema
);