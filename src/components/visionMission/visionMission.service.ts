import { DolphServiceHandler } from "@dolphjs/dolph/classes";
import { InjectMongo } from "@dolphjs/dolph/decorators";
import { Dolph, BadRequestException } from "@dolphjs/dolph/common";
import { Model } from "mongoose";
import { VisionMissionModel, IVisionMission } from "./visionMission.model";

@InjectMongo("visionMissionModel", VisionMissionModel)
export class VisionMissionService extends DolphServiceHandler<Dolph> {
  visionMissionModel!: Model<IVisionMission>;

  constructor() {
    super("visionMissionService");
  }

  async getAllSections() {
    return await this.visionMissionModel.find();
  }

  async updateAllSections(sections: Partial<IVisionMission>[]) {
    if (!sections || !Array.isArray(sections)) {
      throw new BadRequestException("Invalid sections format");
    }

    await this.visionMissionModel.deleteMany({}); // clear old data

    return await this.visionMissionModel.insertMany(sections);
  }
}