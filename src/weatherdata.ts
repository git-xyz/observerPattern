import { Subject, Observer } from "./ISubject";

export class WeatherData implements Subject {
    private weather:string[] = [];
    private observers: Observer[] = []

    addObserver(o:Observer):any {
        this.observers.push(o)
    }
    removeObserver() {

    }
    notifyObservers() {
        for (let i = 0; i < this.observers.length; i++) {
            const element = this.observers[i];
            element.update()
        }
    }

    private measurementsChanged() {
        this.notifyObservers();
    }
    setWeather(str:string) {
        this.weather.push(str);
        this.measurementsChanged()
    }
    getWeather(){
        return this.weather
    }
}