import { Schema, model } from 'mongoose';

export interface ICity {
  name: string;
  state: string;
  country: string;
  birthday: Date;
  population: number;
}

const citySchema = new Schema<ICity>({
  name: { type: String, required: true, unique: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  birthday: { type: Date, required: true },
  population: { type: Number, required: true },
  
});

export const CityModel = model<ICity>('City', citySchema);