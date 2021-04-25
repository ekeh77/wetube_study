import express from "express";
import routes from "../reoutes";


const globalRouter = express.Router();

import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

globalRouter.get(routes.home, home)
globalRouter.get(routes.search, search)
globalRouter.get(routes.join, join)
globalRouter.get(routes.login, login)
globalRouter.get(routes.logout, logout)

export default globalRouter;