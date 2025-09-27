import { MongooseClient } from "../config/db/MongooseClient";
import { City } from "../entities/City";
import { CityModel } from "../models/CityModel";

export class CityRepository {
    constructor() {
        MongooseClient.getClient();
    }

    public async getCityByName(name: string): Promise<City | null> {
        const cityData = await CityModel.findOne({ name }).exec();

        return cityData ? City.toDomain(cityData) : null;
    }
}