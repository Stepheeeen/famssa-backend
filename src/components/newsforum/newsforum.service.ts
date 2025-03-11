import { DolphServiceHandler } from "@dolphjs/dolph/classes";
import { InjectMongo } from "@dolphjs/dolph/decorators";
import { Dolph, BadRequestException } from "@dolphjs/dolph/common";
import { Model } from "mongoose";
import { NewsForumModel, INewsForum } from "./newsforum.model";

@InjectMongo("newsForumModel", NewsForumModel)
export class NewsForumService extends DolphServiceHandler<Dolph> {
  newsForumModel!: Model<INewsForum>;

  constructor() {
    super("newsForumService");
  }

  async getAllNews() {
    return await this.newsForumModel.find().sort({ createdAt: -1 });
  }

  async saveAllNews(newsItems: Partial<INewsForum>[]) {
    if (!Array.isArray(newsItems)) {
      throw new BadRequestException("Invalid format");
    }

    await this.newsForumModel.deleteMany({}); // Clear all previous news

    return await this.newsForumModel.insertMany(newsItems);
  }

  async deleteNewsById(id: string) {
    return await this.newsForumModel.findByIdAndDelete(id);
  }
}