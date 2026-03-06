import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   //Criação da conexão com o banco de dados
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_7fit',
    entities: [],
    //Synchronize é para sincronizar as funções, em produção deixamos a opção em false
    synchronize: true,
  }),


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
