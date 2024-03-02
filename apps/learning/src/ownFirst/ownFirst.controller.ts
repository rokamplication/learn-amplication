import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OwnFirstService } from "./ownFirst.service";
import { OwnFirstControllerBase } from "./base/ownFirst.controller.base";

@swagger.ApiTags("ownFirsts")
@common.Controller("ownFirsts")
export class OwnFirstController extends OwnFirstControllerBase {
  constructor(
    protected readonly service: OwnFirstService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
