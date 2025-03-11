import { Component } from "@dolphjs/dolph/decorators";
import { CbePdfController } from "./cbe.controller";
import { CbePdfService } from "./cbe.service";

@Component({ controllers: [CbePdfController], services: [CbePdfService] })
export class CbeComponent {}
