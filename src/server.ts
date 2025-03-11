import { DolphFactory } from "@dolphjs/dolph";
import { AdminComponent } from "./components/admin/admin.component";
import { LibraryComponent } from "./components/library/library.component";
import { CbeComponent } from "./components/cbe/cbe.component";
import { VisionMissionComponent } from "./components/visionMission/visionMission.component";
import { AboutComponent } from "./components/about/about.component";
import { NewsforumComponent } from "./components/newsforum/newsforum.component";
import { ExcoComponent } from "./components/exco/exco.component";


const dolph = new DolphFactory([AdminComponent,LibraryComponent,CbeComponent, VisionMissionComponent, AboutComponent, NewsforumComponent, ExcoComponent]);
dolph.start();
