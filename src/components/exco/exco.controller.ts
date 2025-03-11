import { DolphControllerHandler } from "@dolphjs/dolph/classes";
import {
  Dolph,
  SuccessResponse,
  DRequest,
  DResponse,
  NotFoundException,
} from "@dolphjs/dolph/common";
import { Body, Delete, Get, Param, Patch, Post, Route } from "@dolphjs/dolph/decorators";
import { ExcoService } from "./exco.service";

@Route("exco")
export class ExcoController extends DolphControllerHandler<Dolph> {
  private ExcoService: ExcoService;

  constructor() {
    super();
    this.ExcoService = new ExcoService();
  }

  @Post("")
  async createExco(req: DRequest, res: DResponse) {
    const newExco = await this.ExcoService.createExco(req.body);
    SuccessResponse({ res, body: newExco });
  }

  @Get("")
  async getAllExcos(_: DRequest, res: DResponse) {
    const all = await this.ExcoService.getAllExcos();
    SuccessResponse({ res, body: all });
  }

  @Patch(":id")
  async updateExco(req: DRequest, res: DResponse) {
    const updated = await this.ExcoService.updateExco(req.params.id, req.body);
    if (!updated) throw new NotFoundException("Exco not found");
    SuccessResponse({ res, body: updated });
  }

  @Delete(":id")
  async deleteExco(req: DRequest, res: DResponse) {
    const deleted = await this.ExcoService.deleteExco(req.params.id);
    if (!deleted) throw new NotFoundException("Exco not found");
    SuccessResponse({ res, body: { message: "Deleted successfully" } });
  }
}