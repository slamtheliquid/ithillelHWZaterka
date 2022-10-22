import {WeatherInnerType} from "./weather";
import {TemperatureType} from "./temperature";

export type ForecastType = {
    dt: number,
    main: TemperatureType,
    weather: WeatherInnerType[],
    clouds: {all: number},
    wind: {speed: number, deg: number, gust: number},
    visibility: number,
    pop: number,
    rain: {threeH: number},
    sys: {pod: string},
    dt_txt: string
}