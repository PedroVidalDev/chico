import { Router } from "express";
import { CityController } from "../controllers/CityController";

const cityController = new CityController()

const router = Router()

// router.get("/estados/:uf/cidades", (req, res) => cityController.getCityByName(req, res))
router.get("/cities", (req, res) => cityController.getCityByName(req, res))

export { router as cityRouter }