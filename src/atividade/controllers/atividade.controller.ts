import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { AtividadeService } from "../services/atividade.service";
import { Atividade } from "../entities/atividade.entity";


@Controller("/atividades")
export class AtividadeController{
    exercicioService: any;

    constructor(
        private readonly atividadeService: AtividadeService
    ){}


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll():Promise<Atividade[]>{
        return this.atividadeService.findAll();
    }
    

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(
        @Param('id', ParseIntPipe) 
        id: number
    ):Promise<Atividade>{
        return this.atividadeService.findById(id);
    }

    @Get('/exercicio/:exercicio')
     @HttpCode(HttpStatus.OK)
     findAllByExercicio(@Param('exercicio') exercicio: string):Promise<Atividade[]>{
        return this.exercicioService.findAllByExercicio(exercicio);
     }

     @Get('/local/:local')
     @HttpCode(HttpStatus.OK)
     findAllByLocal(@Param('local') local: string):Promise<Atividade[]>{
        return this.exercicioService.findAllByLocal(local);
     }


     @Post()
     @HttpCode(HttpStatus.CREATED)
     create(@Body() atividade: Atividade): Promise<Atividade>{
        return this.atividadeService.create(atividade);
    }

     @Put()
     @HttpCode(HttpStatus.OK)
     update(@Body() atividade: Atividade): Promise<Atividade>{
        return this.atividadeService.update(atividade);
     }


     @Delete('/:id')
     @HttpCode(HttpStatus.OK)
     delete(@Param('id', ParseIntPipe) id: number){
        return this.atividadeService.delete(id)
     }

}