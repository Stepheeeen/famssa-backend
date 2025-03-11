import { DolphServiceHandler } from "@dolphjs/dolph/classes";
import { InjectMongo } from "@dolphjs/dolph/decorators";
import { Model } from "mongoose";
import { IAboutSection, AboutSectionModel } from "./about.model";
import { Dolph } from "@dolphjs/dolph/common";

@InjectMongo("aboutSectionModel", AboutSectionModel)
export class AboutService extends DolphServiceHandler<Dolph> {
  aboutSectionModel!: Model<IAboutSection>;

  constructor() {
    super("aboutservice");
  }

  async updateAboutSection(data: Partial<IAboutSection>) {
    const existing = await this.aboutSectionModel.findOne();
    if (existing) {
      existing.logoUrl = data.logoUrl || existing.logoUrl;
      existing.aboutText = data.aboutText || existing.aboutText;
      return await existing.save();
    }

    return await this.aboutSectionModel.create(data);
  }

  async getAboutSection() {
    return await this.aboutSectionModel.findOne();
  }
}