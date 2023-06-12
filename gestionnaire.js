const crypto = require('crypto');

/* Classe mère */
class Vehicle {
    #id = crypto.randomUUID();
    #counter = 0;

    constructor(brand, model, power, rentPrice, autonomy, insurancePrice, wheel = 2) {
        this.brand = String(brand).trim();
        this.model = String(model).trim();
        this.power = Number(power);
        this.rentPrice = Number(rentPrice);
        this.autonomy = Number(autonomy);
        this.insurancePrice = Number(insurancePrice);
        this.wheel = Number(wheel);
    };

    getID() {
        return `N° ${this.#id}`;
    };

    getCounter() {
        return `${this.#counter} h`;
    }

    addHours(h) {
        return (this.#counter + h) + "h";
    };

    getPower() {
        if (typeof this.power === "number") {
            return this.power + "kWh";
        };
    };

    getRentPrice() {
        if (typeof this.rentPrice === "number") {
            return (this.rentPrice).toFixed(2) + "€/h";
        };
    };

    getAutonomy() {
        if (typeof this.autonomy === "number") {
            return this.autonomy + "km";
        };
    };

    getInsurancePrice() {
        if (typeof this.insurancePrice === "number") {
            return (this.insurancePrice).toFixed(2) + "€";
        };
    };
};


/* Classe fille Trotinette */
class Scooter extends Vehicle {
    constructor(brand, model, power, rentPrice, autonomy, insurancePrice, wheel) {
        super(brand, model, power, rentPrice, autonomy, insurancePrice, wheel);
    }
}

/* Classe fille Voiture */
class Car extends Vehicle {
    constructor(
        brand, 
        model, 
        power, 
        rentPrice, 
        autonomy, 
        insurancePrice,
        wheel,
        seats,
        type,
        fuel
    ) {
        super(brand, model, power, rentPrice, autonomy, insurancePrice, wheel);
        this.seats = Number(seats);
        this.type = String(type).trim();
        this.fuel = String(fuel).trim();
    }
}

const car = new Car("Audi", "Rs 6", 200, 100, 700, 1500, 4, 5, "sport", "diesel");
console.log(car);
console.log(car.getAutonomy());
console.log(car.getInsurancePrice());
console.log(car.getPower());
console.log(car.getRentPrice());
console.log(car.getCounter());
console.log(car.addHours(7));
console.log("--------------");
console.log(car.getID());

/* Classe fille Moto */
class Moto extends Vehicle {
    constructor(
        brand,
        model,
        power,
        rentPrice,
        autonomy,
        insurancePrice,
        type,
        fuel,
        capacity
    ) {
        super(brand, model, power, rentPrice, autonomy, insurancePrice, wheel);
        this.type = String(type).trim();
        this.fuel = String(fuel).trim();
        this.capacity = Number(capacity);
    }
}