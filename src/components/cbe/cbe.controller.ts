// cbePdf.controller.ts
import { DolphControllerHandler } from "@dolphjs/dolph/classes";
import { Dolph, SuccessResponse, DRequest, DResponse } from "@dolphjs/dolph/common";
import { Get, Param, Post, Route } from "@dolphjs/dolph/decorators";
import { CbePdfService } from "./cbe.service";
import { Types } from "mongoose";

@Route("cbepdf")
export class CbePdfController extends DolphControllerHandler<Dolph> {
  private cbePdfService: CbePdfService;

  constructor() {
    super();
    this.cbePdfService = new CbePdfService();
  }

  @Post("upload")
  async uploadQuestions(req: DRequest, res: DResponse) {
    const { title, description, uploadedBy, courseCode, difficulty, questions } = req.body;
    const uploaded = await this.cbePdfService.uploadQuestions({ title, description, uploadedBy, courseCode, difficulty, questions });
    console.log(questions)
    SuccessResponse({ res, body: uploaded });
  }

  @Get("questions")
  async fetchQuestions(req: DRequest, res: DResponse) {
    const result = await this.cbePdfService.fetchAllUploadedQuestions();
    SuccessResponse({ res, body: result });
  }

  // @Get("simulation")
  // async fetchCBEQuestions(req: DRequest, res: DResponse) {
  //   const result = await this.cbePdfService.fetchAllUploadedQuestions();
  //   SuccessResponse({ res, body: result });

@Get('questions/:id')
async getCBEQuestions(req: DRequest, res: DResponse) {
  // Convert string ID to MongoDB ObjectId
  const result = await this.cbePdfService.fetchCBEQuestions(req.params.id);
  SuccessResponse({ res, body: result });
}
}