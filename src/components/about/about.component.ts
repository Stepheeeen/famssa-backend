import { Component } from "@dolphjs/dolph/decorators";
import { AboutController } from "./about.controller";
import { AboutService } from "./about.service";

@Component({ controllers: [AboutController], services: [AboutService] })
export class AboutComponent {}
