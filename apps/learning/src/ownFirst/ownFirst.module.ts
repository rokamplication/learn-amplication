import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OwnFirstModuleBase } from "./base/ownFirst.module.base";
import { OwnFirstService } from "./ownFirst.service";
import { OwnFirstController } from "./ownFirst.controller";
import { OwnFirstResolver } from "./ownFirst.resolver";

@Module({
  imports: [OwnFirstModuleBase, forwardRef(() => AuthModule)],
  controllers: [OwnFirstController],
  providers: [OwnFirstService, OwnFirstResolver],
  exports: [OwnFirstService],
})
export class OwnFirstModule {}
