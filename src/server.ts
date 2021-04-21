import express from "express";
import "./database"; // import file index.ts on database folder
import { routes } from "./routes";

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

// HABILITA O USO DO SJON
app.use(express.json());
app.use(routes);

app.listen(3333, () => { console.log("server is running at 3333 ...") });

