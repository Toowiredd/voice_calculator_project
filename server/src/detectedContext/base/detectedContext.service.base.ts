/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  DetectedContext as PrismaDetectedContext,
} from "@prisma/client";

export class DetectedContextServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DetectedContextCountArgs, "select">
  ): Promise<number> {
    return this.prisma.detectedContext.count(args);
  }

  async detectedContexts<T extends Prisma.DetectedContextFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DetectedContextFindManyArgs>
  ): Promise<PrismaDetectedContext[]> {
    return this.prisma.detectedContext.findMany<Prisma.DetectedContextFindManyArgs>(
      args
    );
  }
  async detectedContext<T extends Prisma.DetectedContextFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DetectedContextFindUniqueArgs>
  ): Promise<PrismaDetectedContext | null> {
    return this.prisma.detectedContext.findUnique(args);
  }
  async createDetectedContext<T extends Prisma.DetectedContextCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DetectedContextCreateArgs>
  ): Promise<PrismaDetectedContext> {
    return this.prisma.detectedContext.create<T>(args);
  }
  async updateDetectedContext<T extends Prisma.DetectedContextUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DetectedContextUpdateArgs>
  ): Promise<PrismaDetectedContext> {
    return this.prisma.detectedContext.update<T>(args);
  }
  async deleteDetectedContext<T extends Prisma.DetectedContextDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DetectedContextDeleteArgs>
  ): Promise<PrismaDetectedContext> {
    return this.prisma.detectedContext.delete(args);
  }
}