import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atividade } from './atividade/entities/atividade.entity';
import { AtividadeModule } from './atividade/atividade.module';

@Module({
   //Criação da conexão com o banco de dados
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '0800',
    database: 'db_7fit',
    entities: [Atividade],
    //Synchronize é para sincronizar as funções, em produção deixamos a opção em false
    synchronize: true,
  }),
  AtividadeModule
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
