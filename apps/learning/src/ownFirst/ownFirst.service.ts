import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OwnFirstServiceBase } from "./base/ownFirst.service.base";

@Injectable()
export class OwnFirstService extends OwnFirstServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
