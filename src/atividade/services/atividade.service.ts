import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Atividade } from "../entities/atividade.entity";
import { DeleteResult, ILike, Repository } from "typeorm";


@Injectable()

export class AtividadeService{
    atividadeService: any;

    constructor(
        @InjectRepository(Atividade)
        private atividadeRepository: Repository<Atividade>
    ){}

    async findAll(): Promise<Atividade[]>{

    return this.atividadeRepository.find();
    }

    // PROCURAR POR ID
    async findById(id: number): Promise<Atividade>{
        const atividade = await this.atividadeRepository.findOne({
            where: {
                id
            },
        })
        if(!atividade)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)

        return atividade;
    }

    //PROCURAR POR EXERCICIO
    async findAllByExercicio(exercicio: string): Promise<Atividade[]> {
    const atividade = await this.atividadeRepository.find({
        where: {
            exercicio: ILike(`%${exercicio}%`)
        }
    });

    if (!atividade.length) {
        throw new NotFoundException('Esporte não encontrado');
    }

    return atividade;
}

    //PROCURAR POR LOCAL
    async findAllByLocal(local: string): Promise<Atividade[]> {
    const lugar = await this.atividadeRepository.find({
        where: {
            local: ILike(`%${local}%`)
        }
    });

    if (!lugar.length) {
        throw new NotFoundException('Local não encontrado');
    }

    return lugar;
}
    //CRIAR ATIVIDADE
    async create(atividade: Atividade): Promise<Atividade>{

        return await this.atividadeRepository.save(atividade);

    }

    //ATUALIZAR ATIVIDADE
    async update(atividade: Atividade): Promise<Atividade>{
        if(!atividade.id || atividade.id <= 0)
            throw new HttpException("O Id da Atividade é inválido!!", HttpStatus.BAD_REQUEST);

        //Checa se a Atividade existe
        await this.findById(atividade.id);

        //UPDATE tb_postagens SET  titulo? , texto = ?. data= CURRENT_TIMESTAMP() WHERE id = ?;
        return await this.atividadeRepository.save(atividade);
    }

    //DELETAR 
    async delete(id: number): Promise<DeleteResult>{
        await this.findById(id);
         //DELETE tb_atividades FROM id = ?
        return this.atividadeRepository.delete(id);
    }
}