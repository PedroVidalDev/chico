import { City } from "../entities/City";
import { NotFoundException } from "../exceptions/NotFoundException";
import { CityRepository } from "../repositories/CityRepository";

export class CityService {

    private repository: CityRepository

    constructor() {
        this.repository = new CityRepository()
    }

    public async getCitiesByQuery(query: Record<string, any>): Promise<City[]> {
        const cities: City[] | null = await this.repository.getCitiesByQuery(query);

        if (!cities || cities.length === 0) throw new NotFoundException("Cidades não encontradas")

        return cities;
    }

    public async getCities(): Promise<City[]> {
        const cities: City[] | null = await this.repository.getCities();
        if (!cities || cities.length === 0) throw new NotFoundException("Cidades não encontradas")

        return cities;
    }
}