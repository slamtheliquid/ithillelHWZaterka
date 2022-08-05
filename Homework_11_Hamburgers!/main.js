const HAMBURGER = {
    size: {
        small: {
            name: 'small',
            price: 5,
            calories: 20
        },
        large: {
            name: 'large',
            price: 10,
            calories: 40
        }
    },
    toppings: {
        cheese: {
            price: 1,
            calories: 20
        },
        salad: {
            price: 2,
            calories: 5
        },
        potato: {
            price: 1.5,
            calories: 10
        }
    },
    supplements: {
        seasoning: {
            price: 1.5,
            calories: 0
        },
        mayonnaise: {
            price: 2,
            calories: 5
        }
    }
}

class Hamburger {
    constructor() {
        this.size = '';
        this.price = 0;
        this.calories = 0;
    }
    hamburgerSize(hamSize){
        this.size = hamSize.name;
        this.price += hamSize.price;
        this.calories += hamSize.calories;
    }
    addToppings(topping){
        if(Array.isArray(topping)){
            for(let i = 0; i < topping.length; i++){
                this.price += topping[i].price;
                this.calories += topping[i].calories;
            }
        }else{
            this.price += topping.price;
            this.calories += topping.calories;
        }
    }
    addSupplements(supplement){
        if(Array.isArray(supplement)) {
            for (let i = 0; i < supplement.length; i++) {
                this.price += supplement[i].price;
                this.calories += supplement[i].calories;
            }
        }else{
            this.price += supplement.price;
            this.calories += supplement.calories;
        }
    }
}
const burger = new Hamburger();
burger.hamburgerSize(HAMBURGER.size.large);
console.log(burger.size);
console.log(burger.price);
console.log(burger.calories);
burger.addToppings([HAMBURGER.toppings.cheese, HAMBURGER.toppings.potato]);
console.log(burger.price);
console.log(burger.calories);
burger.addSupplements(HAMBURGER.supplements.mayonnaise);
console.log(burger.price);
console.log(burger.calories);