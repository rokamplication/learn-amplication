import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OwnFirstResolverBase } from "./base/ownFirst.resolver.base";
import { OwnFirst } from "./base/OwnFirst";
import { OwnFirstService } from "./ownFirst.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OwnFirst)
export class OwnFirstResolver extends OwnFirstResolverBase {
  constructor(
    protected readonly service: OwnFirstService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
