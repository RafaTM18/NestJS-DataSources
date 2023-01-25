import { Injectable } from "@nestjs/common/decorators";
import { Args, Context, Query, Resolver } from "@nestjs/graphql";
import { Cep } from "./cep.entity";

@Resolver('CEPs')
@Injectable()
export class CepResolver {
    constructor() {}

    @Query(returs => Cep)
    async getCEP(
        @Context('dataSources') { cepAPI },
        @Args('cep') cep: string
    ): Promise<any> {
        return await cepAPI.getCEP(cep);
    }
}