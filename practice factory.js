let pizzaToppings = {
    veggies: ["mushrooms", "green peppers", "onions", "olives", "spinach", "jalapenos", "tomatoes", "basil", "garlic", "artichoke", "banana peppers"],
    meat: ["pepperoni", "sausage", "ground beef", "bacon", "bbq chicken", "steak", "mexican mince"]
};

function rngTopping(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let submit = document.getElementById("submit")
let sizeOption = document.getElementById("size");
let doughOption = document.getElementById("dough");
let toppingsOption = document.getElementById("toppings");
let meatOption = document.getElementById("meatOrNo");

function theChoices() {
    let sizeText = sizeOption.options[sizeOption.selectedIndex].text;
    let doughText = doughOption.options[doughOption.selectedIndex].text;
    let toppingsText = toppingsOption.options[toppingsOption.selectedIndex].text;
    let meatText = meatOption.options[meatOption.selectedIndex].text;

    if (toppingsText == "si") {
        let threeToppings = [];
        let veggiesOnly = [];

        if (meatText == "oui") {
            threeToppings.push(rngTopping(pizzaToppings.meat));
            do {
                threeToppings.push(rngTopping(pizzaToppings.veggies))
            } while (threeToppings.length < 3);
            console.log(`${sizeText} pizza with ${doughText} dough. Cheese, sauce and the toppings are ${threeToppings.join(", ")}.`);
        }
        if (meatText == "no") {
            for (let i = 0; i < 3; i++) {
                veggiesOnly.push(rngTopping(pizzaToppings.veggies));
            }
            console.log(`${sizeText} pizza with ${doughText} dough. Cheese, sauce and the toppings are ${veggiesOnly.join(", ")}.`);
        }
    }
    else {
        console.log(`${sizeText} pizza with ${doughText} dough and no toppings, just cheese and sauce.`);
    }

}

submit.onclick = theChoices;


// Changing the Homer background picture.
let veggiePic = document.getElementsByClassName("homerVeggie");
let mainPic = document.getElementById("homerPicBox");

