const HAMBURGER = {
    small: {
        name: 'small',
        price: 5,
        calories: 20
    },
    large: {
        name: 'large',
        price: 10,
        calories: 40
    },
    toppings: {
        cheese: {
            name: 'cheese',
            price: 1,
            calories: 20
        },
        salad: {
            name: 'salad',
            price: 2,
            calories: 5
        },
        potato: {
            name: 'potato',
            price: 1.5,
            calories: 10
        }
    },
    supplements: {
        seasoning: {
            name: 'seasoning',
            price: 1.5,
            calories: 0
        },
        mayonnaise: {
            name: 'mayonnaise',
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
        if(hamSize === 'small'){
            this.size = HAMBURGER.small.name;
            this.price += HAMBURGER.small.price;
            this.calories += HAMBURGER.small.calories;
        }else if(hamSize === 'large'){
            this.size = HAMBURGER.large.name;
            this.price += HAMBURGER.large.price;
            this.calories += HAMBURGER.large.calories;
        }else{
            this.price = 0;
            this.calories = 0;
        }
    }
    addToppings(topping){
        if(Array.isArray(topping)){
            for(let i = 0; i < topping.length; i++){
                for(let key in HAMBURGER.toppings){
                    if(topping[i].name === HAMBURGER.toppings[key].name){
                        this.price += HAMBURGER.toppings[key].price;
                        this.calories += HAMBURGER.toppings[key].calories;
                    }
                }
            }
        }else{
            for(let key in HAMBURGER.toppings){
                if(topping.name === HAMBURGER.toppings[key].name){
                    this.price += HAMBURGER.toppings[key].price;
                    this.calories += HAMBURGER.toppings[key].calories;
                }
            }
        }
    }
    addSupplements(supplement){
        if(Array.isArray(supplement)) {
            for (let i = 0; i < supplement.length; i++) {
                for (let key in HAMBURGER.supplements) {
                    if (supplement[i].name === HAMBURGER.supplements[key].name) {
                        this.price += HAMBURGER.supplements[key].price;
                        this.calories += HAMBURGER.supplements[key].calories;
                    }
                }
            }
        }else{
            for(let key in HAMBURGER.supplements){
                if(supplement.name === HAMBURGER.supplements[key].name){
                    this.price += HAMBURGER.supplements[key].price;
                    this.calories += HAMBURGER.supplements[key].calories;
                }
            }
        }
    }
}
const burger = new Hamburger();
burger.hamburgerSize('large');
console.log(burger.size);
console.log(burger.price);
console.log(burger.calories);
burger.addToppings([HAMBURGER.toppings.cheese, HAMBURGER.toppings.potato]);
console.log(burger.price);
console.log(burger.calories);
burger.addSupplements(HAMBURGER.supplements.mayonnaise);
console.log(burger.price);
console.log(burger.calories);