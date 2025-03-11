import { DolphServiceHandler } from "@dolphjs/dolph/classes";
import { BadRequestException, Dolph } from "@dolphjs/dolph/common";
import { InjectMongo } from "@dolphjs/dolph/decorators";
import { Model } from "mongoose";
import { ExcoModel, IExco } from "./exco.model";

@InjectMongo("excoModel", ExcoModel)
export class ExcoService extends DolphServiceHandler<Dolph> {
  excoModel!: Model<IExco>;

  constructor() {
    super("excoservice");
  }

  async createExco(data: Partial<IExco>) {
    const { name, position, image } = data;

    if (!name || !position || !image) {
      throw new BadRequestException("Name, Position, and Image are required");
    }

    const exco = new this.excoModel(data);
    return await exco.save();
  }

  async getAllExcos() {
    return await this.excoModel.find().sort({ createdAt: -1 });
  }

  async updateExco(id: string, data: Partial<IExco>) {
    return await this.excoModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteExco(id: string) {
    return await this.excoModel.findByIdAndDelete(id);
  }
}