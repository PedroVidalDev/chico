import { City } from "../entities/City";
import { NotFoundException } from "../exceptions/NotFoundException";
import { CityRepository } from "../repositories/CityRepository";

export class CityService {

    private repository: CityRepository

    constructor() {
        this.repository = new CityRepository()
    }

    public async getCityByName(name: string): Promise<City> {
        const city: City | null = await this.repository.getCityByName(name);

        if (!city) throw new NotFoundException("Cidade não encontrada")

        return city;
    }
}