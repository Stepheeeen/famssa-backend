import { DolphControllerHandler } from "@dolphjs/dolph/classes";
import {
  Dolph,
  SuccessResponse,
  DRequest,
  DResponse,
} from "@dolphjs/dolph/common";
import { Get, Post, Delete, Route } from "@dolphjs/dolph/decorators";
import { NewsForumService } from "./newsforum.service";

@Route("news-forum")
export class NewsForumController extends DolphControllerHandler<Dolph> {
  private NewsForumService: NewsForumService;

  constructor() {
    super();
    this.NewsForumService = new NewsForumService();
  }

  @Get("all")
  async getAllNews(_: DRequest, res: DResponse) {
    const news = await this.NewsForumService.getAllNews();
    SuccessResponse({ res, body: news });
  }

  @Post("save")
  async saveNews(req: DRequest, res: DResponse) {
    const saved = await this.NewsForumService.saveAllNews(req.body);
    SuccessResponse({ res, body: saved });
  }

  @Delete("delete/:id")
  async deleteNews(req: DRequest, res: DResponse) {
    const { id } = req.params;
    await this.NewsForumService.deleteNewsById(id);
    SuccessResponse({ res, body: { message: "Deleted successfully" } });
  }
}