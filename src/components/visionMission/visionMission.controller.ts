import { DolphControllerHandler } from "@dolphjs/dolph/classes";
import {
  Dolph,
  SuccessResponse,
  DRequest,
  DResponse,
} from "@dolphjs/dolph/common";
import { Get, Post, Route } from "@dolphjs/dolph/decorators";
import { VisionMissionService } from "./visionMission.service";

@Route("vision-mission")
export class VisionMissionController extends DolphControllerHandler<Dolph> {
  private VisionMissionService: VisionMissionService;

  constructor() {
    super();
    this.VisionMissionService = new VisionMissionService();
  }

  @Get("all")
  async getAllSections(_: DRequest, res: DResponse) {
    const sections = await this.VisionMissionService.getAllSections();
    SuccessResponse({ res, body: sections });
  }

  @Post("update")
  async updateSections(req: DRequest, res: DResponse) {
    const sections = req.body;
    const updated = await this.VisionMissionService.updateAllSections(sections);
    SuccessResponse({ res, body: updated });
  }
}