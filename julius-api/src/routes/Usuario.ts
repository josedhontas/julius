import { Router } from "express";
import { UsuarioController } from "../controller/UsuarioController";
import { Usuario } from "../entity/Usuario";

export const routerUsuario = Router();

const usuarioCtrl = new UsuarioController();

routerUsuario.get('/', (req, res) => res.send("Servico de usuarios"))

routerUsuario.post('/', async (req, res) => {
    const { nome, email } = req.body;
    const usuario = new Usuario(nome, email);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);
    // Resto do código...
});
