import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CepResolver } from './data/resolver';
import { CepAPI } from './data/CepAPI';

const dataSources = () => ({
  cepAPI: new CepAPI(),
})

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      dataSources: dataSources,
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema/schema.gql'),
      sortSchema: true
    })
  ],
  controllers: [AppController],
  providers: [AppService, CepAPI, CepResolver],
})
export class AppModule {}
