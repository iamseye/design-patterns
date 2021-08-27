
abstract class Beverage {
   abstract cost(): number;
}

abstract class BeverageDecorator extends Beverage {
    protected constructor (readonly beverage: Beverage) {
        super();
    }
}

// decorator 1
class Caramel extends BeverageDecorator {
    constructor(readonly beverage: Beverage) {
        super(beverage)
    }

    cost() {
        return this.beverage.cost() + 3;
    }
}

// decorator 2
class SoyMilk extends BeverageDecorator {
    constructor(readonly beverage: Beverage) {
        super(beverage)
    }

    public cost() {
        return this.beverage.cost() + 5;
    }
}

class Espresso extends Beverage {
    public cost() {
        return 2;
    }
}

const espressoCaramel = new Caramel(new Espresso())
const totalPrice = new SoyMilk(espressoCaramel).cost();


// SoyMilk.cost -> Caramel.cost -> Espresso.cost


console.log("Espresso + caramel + soy milk =");
console.log(totalPrice);

