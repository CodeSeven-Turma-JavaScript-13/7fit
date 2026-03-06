import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";




@Entity({name: "tb_atividades"})

export class Atividade{
    //CRIAÇÃO DO ID
    @PrimaryGeneratedColumn() //PRIMARY KEY ID AUTO INCREMENT
    id: number;

    //CRIAÇÃO DO EXERCICIO
    @Transform(({value}: TransformFnParams)=> value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    exercicio:string;

    // CRIAÇÃO LOCAL
    @Transform(({value}: TransformFnParams)=> value?.trim())
    @IsNotEmpty()
    @Column({length: 280, nullable: false})
    local:string;

    //CRIAÇÃO DA DATA DO EVENTO
    @Transform(({value}: TransformFnParams)=> value?.trim())
    @IsNotEmpty()
    @Column({ type: 'date', nullable: false }) // 'datetime' ou 'timestamp'
    dataEvento: Date;

    //CRIAÇÃO DO DIA DA CRIAÇÃO DO EVENTO
    //@UpdateDateColumn()
    //dataCriacao: Date;
    //NOME DO CRIADOR
    @Transform(({value}: TransformFnParams)=> value?.trim())
    @IsNotEmpty()
    @Column({length: 280, nullable: false})
    nomeCriador: string;

    //Horario do Evento
    @Column({ type: 'time' })
    horaEvento: string;


    //Quantidade de Participantes
    @IsNotEmpty()
    @Column()
    participantesQuant: number;

}