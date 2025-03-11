// cbePdf.service.ts
import { DolphServiceHandler } from "@dolphjs/dolph/classes";
import { BadRequestException, Dolph } from "@dolphjs/dolph/common";
import { InjectMongo } from "@dolphjs/dolph/decorators";
import { Model, Types } from "mongoose";
import { CbePdfModel, ICbePdf } from "./cbe.model"
// question.service.ts
import * as XLSX from "xlsx";

interface ParsedQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

@InjectMongo("cbePdfModel", CbePdfModel)
export class CbePdfService extends DolphServiceHandler<Dolph> {
  cbePdfModel!: Model<ICbePdf>;

  constructor() {
    super("cbePdfService");
  }

  async uploadQuestions(data: {
    title: string;
    courseCode: string;
    difficulty:string;
    description: string;
    questions: ParsedQuestion[];
    uploadedBy: Types.ObjectId;
  }) {
    // const questions = await this.parseExcelToQuestions()
    const pdf = new this.cbePdfModel(data);
    return await pdf.save();
  }

  async fetchAllUploadedQuestions(){
    const questions = await this.cbePdfModel.find();
    return questions;
  }
  async fetchCBEQuestions(id: String){
    const CbeQuestions = await this.cbePdfModel.findById(id);
    return CbeQuestions;
  }

  async parseExcelToQuestions (buffer: Buffer): Promise<ParsedQuestion[]> {
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const jsonData: any[] = XLSX.utils.sheet_to_json(sheet);

  const questions: ParsedQuestion[] = jsonData.map((row: any) => ({
    question: row.Question,
    options: [row.OptionA, row.OptionB, row.OptionC, row.OptionD],
    correctAnswer: row.Answer
  }));

  return questions;
};
}
