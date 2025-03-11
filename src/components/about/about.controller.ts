import { DolphControllerHandler } from "@dolphjs/dolph/classes";
import {
  Dolph,
  DRequest,
  DResponse,
  SuccessResponse,
} from "@dolphjs/dolph/common";
import { Post, Get, Route } from "@dolphjs/dolph/decorators";
import { AboutService } from "./about.service";

@Route("about")
export class AboutController extends DolphControllerHandler<Dolph> {
  private AboutService: AboutService;

  constructor() {
    super();
    this.AboutService = new AboutService();
  }

  @Post("update")
  async updateAbout(req: DRequest, res: DResponse) {
    const data = req.body;
    const updated = await this.AboutService.updateAboutSection(data);
    SuccessResponse({ res, body: updated });
  }

  @Get("get")
  async getAbout(req: DRequest, res: DResponse) {
    const about = await this.AboutService.getAboutSection();
    SuccessResponse({ res, body: about });
  }
}