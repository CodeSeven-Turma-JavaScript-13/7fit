import { TypeOrmModule } from "@nestjs/typeorm";
import { Atividade } from "./entities/atividade.entity";
import { Module } from "@nestjs/common";
import { AtividadeService } from "./services/atividade.service";
import { AtividadeController } from "./controllers/atividade.controller";




@Module({
    imports:[TypeOrmModule.forFeature([Atividade])],
    controllers:[AtividadeController],
    providers: [AtividadeService],
    exports: []
})

export class AtividadeModule{}