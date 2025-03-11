import { Component } from "@dolphjs/dolph/decorators";
import { ExcoController } from "./exco.controller";
import { ExcoService } from "./exco.service";

@Component({ controllers: [ExcoController], services: [ExcoService] })
export class ExcoComponent {}
