import { Request, Response } from "express";
import { CityService } from "../services/CityService";
import { NotFoundException } from "../exceptions/NotFoundException";
import { InvalidParamException } from "../exceptions/InvalidParamException";

export class CityController {

    private service: CityService

    constructor() {
        this.service = new CityService()
    }

    public async getCityByName(req: Request, res: Response) {
        const { name } = req.query;

        if (!name || typeof name !== 'string') return res.status(402).json({"error": "Nome de cidade inválida"})

        try  {
            const city = await this.service.getCityByName(name)

            return res.status(200).json(city)
        } catch (error) {
            if (error instanceof NotFoundException) {
                return res.status(404).json({"error": error.message || "Cidade não encontrada"})
            }

            if (error instanceof InvalidParamException) {
                return res.status(402).json({"error": error.message || "Parâmetro inválido"})
            }

            return res.status(500).json({"error": error || "Erro desconhecido ao buscar cidade"})
        }
    }
}