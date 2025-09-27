import { Router } from "express";
import { cityRouter } from "./city";

const router = Router()

router.use(cityRouter)

export { router as indexRouter }