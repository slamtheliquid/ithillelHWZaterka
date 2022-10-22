import {ForecastType} from "./forecast";
import {CityType} from "./city";

export type WeatherType = {
    id: number,
    cod: number,
    message: number,
    cnt: number,
    list: ForecastType[]
    city: CityType,
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
}