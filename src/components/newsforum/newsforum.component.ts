import { Component } from "@dolphjs/dolph/decorators";
import { NewsForumController} from "./newsforum.controller";
import { NewsForumService } from "./newsforum.service";

@Component({ controllers: [NewsForumController], services: [NewsForumService] })
export class NewsforumComponent {}
