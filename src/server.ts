import express from "express";
import { allowedNodeEnvironmentFlags } from "node:process";

const app = express();

/**
 * HTTP METHODS
 * 
 * GET - BUSCA
 * POST - CRIAÇÃO
 * PUT - ALTERAÇÃO
 * DELETE - DELETAR
 * PATCH - ALTERAR UMA INFORMAÇÃO ESPECÍFICA
 * 
 */

app.listen(3333, () => { console.log("server is running at 3333 ...") });

app.get('/', (request, response) => {
    // return response.send("HELLO WORLD");
    return response.json({message: "Hello World"});
});

app.post('/', (resquest, response) => {
    return response.json({message:"Usuário salvo com sucesso!"});
});