import { Component } from "@dolphjs/dolph/decorators";
import { LibraryController } from "./library.controller";
import { LibraryService } from "./library.service";

@Component({ controllers: [LibraryController], services: [LibraryService] })
export class LibraryComponent {}
