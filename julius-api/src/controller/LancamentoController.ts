import { getManager } from "typeorm";
import { Lancamento } from "../entity/Lancamento";

export class LancamentoController{
    async salvar(lancamento: Lancamento){
        const lancamentoSalvo = getManager().save(lancamento);
        return lancamentoSalvo;
    }
}