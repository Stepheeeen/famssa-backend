import { DolphControllerHandler } from "@dolphjs/dolph/classes";
import {
  Dolph,
  SuccessResponse,
  DRequest,
  DResponse
} from "@dolphjs/dolph/common";
import { Get, Post, Route } from "@dolphjs/dolph/decorators";
import { AdminService } from "./admin.service";

@Route('admin')
export class AdminController extends DolphControllerHandler<Dolph> {
  private AdminService: AdminService;
  constructor() {
    super();
    this.AdminService = new AdminService();
  }

  @Post("login")
  async login(req: DRequest, res: DResponse){
    SuccessResponse({res, body: await this.AdminService.login(req.body.email, req.body.password)});
  }
}
