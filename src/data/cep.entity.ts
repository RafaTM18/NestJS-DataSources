import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Cep {
    @Field()
    cep: string;

    @Field()
    logradouro: string;

    @Field()
    bairro: string;

    @Field()
    localidade: string;

    @Field()
    uf: string;

    @Field()
    complemento: string;

    @Field()
    ddd: string;
}