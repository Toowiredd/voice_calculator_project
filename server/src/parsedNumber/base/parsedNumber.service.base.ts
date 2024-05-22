/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ParsedNumber as PrismaParsedNumber } from "@prisma/client";

export class ParsedNumberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ParsedNumberCountArgs, "select">
  ): Promise<number> {
    return this.prisma.parsedNumber.count(args);
  }

  async parsedNumbers<T extends Prisma.ParsedNumberFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParsedNumberFindManyArgs>
  ): Promise<PrismaParsedNumber[]> {
    return this.prisma.parsedNumber.findMany<Prisma.ParsedNumberFindManyArgs>(
      args
    );
  }
  async parsedNumber<T extends Prisma.ParsedNumberFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParsedNumberFindUniqueArgs>
  ): Promise<PrismaParsedNumber | null> {
    return this.prisma.parsedNumber.findUnique(args);
  }
  async createParsedNumber<T extends Prisma.ParsedNumberCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParsedNumberCreateArgs>
  ): Promise<PrismaParsedNumber> {
    return this.prisma.parsedNumber.create<T>(args);
  }
  async updateParsedNumber<T extends Prisma.ParsedNumberUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParsedNumberUpdateArgs>
  ): Promise<PrismaParsedNumber> {
    return this.prisma.parsedNumber.update<T>(args);
  }
  async deleteParsedNumber<T extends Prisma.ParsedNumberDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParsedNumberDeleteArgs>
  ): Promise<PrismaParsedNumber> {
    return this.prisma.parsedNumber.delete(args);
  }
}
