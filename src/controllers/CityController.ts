import { Request, Response } from "express";
import { CityService } from "../services/CityService";

export class CityController {

    private service: CityService

    constructor() {
        this.service = new CityService()
    }

    public getCityByName(req: Request, res: Response) {
        const { name } = req.query;

        if (!name || typeof name !== 'string') return res.status(402).send("Nome de cidade inválida")

        const city = this.service.getCityByName(name)

        return res.status(200).json(city)
    }
}