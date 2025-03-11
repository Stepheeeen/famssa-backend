import { Component } from "@dolphjs/dolph/decorators";
import { VisionMissionController } from "./visionMission.controller";
import { VisionMissionService } from "./visionMission.service";

@Component({ controllers: [VisionMissionController], services: [VisionMissionService] })
export class VisionMissionComponent {}
