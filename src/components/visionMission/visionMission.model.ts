import { Schema, Document, model, Types } from "mongoose";

export interface IVisionMission extends Document {
  _id: Types.ObjectId;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const VisionMissionSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const VisionMissionModel = model<IVisionMission>(
  "visionMission",
  VisionMissionSchema
);