import { DolphControllerHandler } from "@dolphjs/dolph/classes";
import {
  Dolph,
  SuccessResponse,
  DRequest,
  DResponse,
} from "@dolphjs/dolph/common";
import { Get, Post, Route } from "@dolphjs/dolph/decorators";
import { LibraryService } from "./library.service";

@Route("library")
export class LibraryController extends DolphControllerHandler<Dolph> {
  private LibraryService: LibraryService;

  constructor() {
    super();
    this.LibraryService = new LibraryService();
  }

  @Post("upload")
  async uploadPDF(req: DRequest, res: DResponse) {
    const data = req.body;
    const pdf = await this.LibraryService.uploadPDF(data);
    SuccessResponse({ res, body: pdf });
  }

  @Get("all")
  async getAllPDFs(_: DRequest, res: DResponse) {
    const allPDFs = await this.LibraryService.getAllPDFs();
    SuccessResponse({ res, body: allPDFs });
  }
}