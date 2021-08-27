interface Subject {
    add(observer: Observer):void;
    remove(observer: Observer): void;
    notify(): void;
}

abstract class Observer {
    readonly subject: Subject;
    abstract update(value: string):void
}

class WeatherStation implements Subject {
    private readonly observers: Observer[];
    private temperature: string;

    constructor() {
        this.observers = [];
        this.temperature = "";
    }

    add(observer: Observer){
        this.observers.push(observer);
    }

    remove(observer: Observer){
        this.observers.filter(ob => ob === observer)
    }

    notify() {
        for(const observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    setTemperature(temperature: string) {
        this.temperature = temperature;
        this.notify();
    }

    getTemperature() {
        return this.temperature;
    }
}

class Phone implements Observer {
    readonly subject: Subject;
    private temperature: string = "0 C";

    constructor(subject: Subject) {
        this.subject = subject;

        subject.add(this)
    }

    update(value: string){
        console.log(`Temperature updated on my phone: ${value}`);
        this.temperature = value;
    }
}

class MyScreen implements Observer {
    readonly subject: Subject;
    private temperature: string = "0 C";

    constructor(subject: Subject) {
        this.subject = subject;

        subject.add(this)
    }

    update(value: string){
        console.log(`Temperature updated on my screen: ${value}`);
        this.temperature = value;
    }
}

function run() {
    const weatherStation = new  WeatherStation();
    const phone = new Phone(weatherStation);
    const screen = new MyScreen(weatherStation);

    weatherStation.setTemperature("20 C");
}

run();

// Temperature updated on my phone: 20 C
// Temperature updated on my screen: 20 C

// rxjs
