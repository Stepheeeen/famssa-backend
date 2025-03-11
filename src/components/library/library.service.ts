import { DolphServiceHandler } from "@dolphjs/dolph/classes";
import { BadRequestException, Dolph } from "@dolphjs/dolph/common";
import { InjectMongo } from "@dolphjs/dolph/decorators";
import { Model } from "mongoose";
import { LibraryModel, ILibrary } from "./library.model";

@InjectMongo("libraryModel", LibraryModel)
export class LibraryService extends DolphServiceHandler<Dolph> {
  libraryModel!: Model<ILibrary>;

  constructor() {
    super("libraryservice");
  }

 async uploadPDF(data: Partial<ILibrary>) {
  const { title, courseCode, fileUrl, description, isPremium, price } = data;

  if (!title || !courseCode || !fileUrl || !description) {
    throw new BadRequestException("Missing required fields");
  }

  if (isPremium && !price) {
    throw new BadRequestException("Price is required for premium PDFs");
  }

  const newPdf = new this.libraryModel(data);
  return await newPdf.save();
}


  async getAllPDFs() {
    return await this.libraryModel.find();
  }
}
