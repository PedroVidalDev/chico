import { InvalidParamException } from "../exceptions/InvalidParamException";
import { ICity } from "../models/CityModel";

export class City {
    private name!: string;
    private state!: string;
    private country!: string;
    private birthday!: Date;
    private population!: number;

    constructor(name: string, state: string, country: string, birthday: Date, population: number) {
        this.setName(name);
        this.setState(state);
        this.setCountry(country);
        this.setBirthday(birthday);
        this.setPopulation(population);
    }

    public static toDomain(raw: ICity): City {
        return new City(
            raw.name,
            raw.state,
            raw.country,
            raw.birthday,
            raw.population
        );
    }

    public static toPersistence(city: City): ICity {
        return {
            name: city.getName(),
            state: city.getState(),
            country: city.getCountry(),
            birthday: city.getBirthday(),
            population: city.getPopulation(),
        };
    }

    public getName(): string {
        return this.name;
    }

    public getState(): string {
        return this.state;
    }

    public getCountry(): string {
        return this.country;
    }

    public getBirthday(): Date {
        return this.birthday;
    }

    public getPopulation(): number {
        return this.population;
    }

    public setName(name: string) {
        if (!name || name === "") throw new InvalidParamException("Nome invalido");

        this.name = (name);
    }

    public setState(state: string) {
        if (!state || state === "") throw new InvalidParamException("Estado invalido");

        this.state = (state);
    }

    public setCountry(country: string) {
        if (!country || country === "") throw new InvalidParamException("País invalido");

        this.country = (country);
    }

    public setBirthday(birthday: Date) {
        if (!birthday) throw new InvalidParamException("Data invalida");

        this.birthday = (birthday);
    }

    public setPopulation(population: number) {
        if (!population || population < 0) throw new InvalidParamException("Populacao invalida");

        this.population = (population)
    }

}