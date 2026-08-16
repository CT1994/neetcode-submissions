class Coffee {
    /**
     * @returns {number}
     */
    getCost() {
        throw new Error("Method getCost() must be implemented.");
    }
}

class SimpleCoffee extends Coffee {
    /**
     * @returns {number}
     */
    getCost() {
        return 1.1;
    }
}

class CoffeeDecorator extends Coffee {
    /**
     * @param {Coffee} coffee
     */
    constructor(coffee) {
        super();
        this.decoratedCoffee = coffee;
    }

    /**
     * @returns {number}
     */
    getCost() {
        return this.decoratedCoffee.getCost();
    }
}

class MilkDecorator extends CoffeeDecorator {
    getCost() {
        return 0.5 + this.decoratedCoffee.getCost();
    }
}

class SugarDecorator extends CoffeeDecorator {
    getCost() {
        return 0.2 + this.decoratedCoffee.getCost();
    }
}

class CreamDecorator extends CoffeeDecorator {
    getCost() {
        return 0.7 + this.decoratedCoffee.getCost();
    }
}
