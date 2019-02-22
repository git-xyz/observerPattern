import { WeatherData } from "./weatherdata";
import { ShowWeather } from "./showWeather";

let wd = new WeatherData();
let show = new ShowWeather(wd);
setTimeout(()=> {
    wd.setWeather('xxxxxx')

}, 2000)