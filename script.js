class PizzaBase {
    constructor(size, dough, toppings) {
        this._size = size;
        this._dough = dough;
        this._toppings = toppings;
    }

    get size() {
        return this._size;
    }
    get dough() {
        return this._dough;
    }
    get toppings() {
        return this._toppings;
    }

    generatePizza() {
        console.log(`${this.size} pizza with ${this.dough} dough. Cheese, sauce, and ${this.toppings} toppings.`)
    }
}

class MeatToppings extends PizzaBase {
    constructor(size, dough, meatToppings) {
        super(size, dough, toppings);
        this._meatToppings = meatToppings;
    }
}

class VeggieToppings extends PizzaBase {
    constructor(size, dough, veggieToppings) {
        super(size, dough);
        this._veggieToppings = veggieToppings;
    }
}

class MixToppings extends PizzaBase {
    constructor(size, dough, toppings) {
        super(size, dough, toppings);
        //this._mixToppings = mixToppings;
    }
}



//const meatPizza = new MeatToppings(sizeText, doughText, );
//const veggiePizza = new VeggieToppings(sizeText, doughText, );
const mixPizza = new MixToppings("small", "regular", "steak, onions, peppers");


mixPizza.generatePizza();

/*
let submit = document.getElementById("submit")
submit.addEventListener("mouseover", alert)


function dropdownMenu () {
	dropdownMenu.classList.toggle("open")
	const isOpen = dropdownMenu.classList.contains("open")
	toggleBtnIcon.classList = isOpen
		? "fa-solid fa-xmark"
		: "fa-solid fa-bars"
}

function openClose (button) {
    button.onclick = function () {
        dropdownMenu(click)
    }
}
*/