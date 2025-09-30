import { MongooseClient } from "../config/db/MongooseClient";
import { City } from "../entities/City";
import { CityModel } from "../models/CityModel";

export class CityRepository {
    constructor() {
        MongooseClient.getClient();
    }

    public async getCitiesByQuery(query: Record<string, any>): Promise<City[] | null> {
        const cityData = await CityModel.find(query).exec();

        return cityData ? cityData.map(city => City.toDomain(city)) : null;
    }

    public async getCities(): Promise<City[] | null> {
        const cityData = await CityModel.find().exec();

        return cityData ? cityData.map(city => City.toDomain(city)) : null;
    }
}