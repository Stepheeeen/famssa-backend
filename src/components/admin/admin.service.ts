import { DolphServiceHandler } from "@dolphjs/dolph/classes";
import { BadRequestException, Dolph, IPayload, NotFoundException } from "@dolphjs/dolph/common";
import { InjectMongo} from "@dolphjs/dolph/decorators";
import { Model, Types } from "mongoose";
import { AdminModel, IAdmin } from "./admin.model";
import { generateJWTwithHMAC } from "@dolphjs/dolph/utilities";


@InjectMongo("adminModel", AdminModel)
export class AdminService extends DolphServiceHandler<Dolph> {
  adminModel!: Model<IAdmin>;

  constructor() {
    super("adminservice");
  }

  async login(email: string , password: string){
    let admin: IAdmin = await this.adminModel.findOne({email, password});
    if(!admin) throw new BadRequestException("Invalid credentials.")

    admin.token = await this.generateToken(admin._id);

    admin = await admin.save();

    return {
      token: admin.token,
      admin: {...admin.toObject(), password: null},
    }
  }

  async generateToken(id: Types.ObjectId){
    const payload: IPayload  = {
      exp: 10000000000,
      iat: new Date().getMilliseconds(),
      sub: id,
    }

    const token = await generateJWTwithHMAC({payload, secret: "VerySecretSecret"});
    return token;
  }
}
    
