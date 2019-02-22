import { Observer, DisplayElement } from "./ISubject";

import { WeatherData } from "./weatherdata"

export class ShowWeather implements Observer, DisplayElement{
    private wd:WeatherData
    constructor(weatherData: WeatherData ){
        this.wd = weatherData;
        this.wd.addObserver(this);
    }
    update(){
        this.display()
    }
    display(){
        console.log("show weather", this.wd.getWeather());
        console.log('no')
    }
}