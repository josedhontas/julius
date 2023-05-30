import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity()
export class Lancamento{
    constructor(valor: number, descricao: string, data: Date, usuario: Usuario){
        this.valor = valor;
        this.descrição = descricao;
        this.data = data;
        this.usuario = usuario;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'float'})
    valor: number;

    @Column()
    descrição: string;

    @Column()
    data: Date;

    @ManyToOne(()=> Usuario)
    usuario: Usuario;
}