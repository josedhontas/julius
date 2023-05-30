import { Router } from "express";
import { UsuarioController } from "../controller/UsuarioController";
import { Usuario } from "../entity/Usuario";

export const routerUsuario = Router();

const usuarioCtrl = new UsuarioController();

routerUsuario.post('/', async (req, res) => {
    const { nome, email } = req.body;
    const usuario = new Usuario(nome, email);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);
});

routerUsuario.get('/',async (req,res) => {
    const usuario = await usuarioCtrl.recuperarTodos();
    res.json(usuario);
    
})
