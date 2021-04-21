import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

export { routes };
/**
 * TIPOS DE PARÂMETROS
 * 
 * Routes Params (Parâmetros de rotas) => Ex.: http://localhost:3333/settings/1
 * Query Params (Filtros e buscas) => Ex.: http://localhost:3333/settings/1?search=algumacoisa
 * Body Params (Parâmetros no corpo da requisição) => Ex.: 
 * {
 *      "data": "2021-04-01 00:00:01"
 * }
 */

const routes = Router();
const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);




