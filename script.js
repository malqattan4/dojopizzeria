var pizzainside = {
    crustType:    ["stuffed", "thin", "thick", "deep-dish", "hand-tossed"],
    sauceType:  ["bbq sauce", "ranch sauce", "traditional", "pesto", "marinara"],
    cheese:   ["mozorella", "swiss cheese", "parmessan", "cheddar", "feta"],
    toppings: ["vegatables", "cherry tomatoes", "peperroni", "mushroom", "sausage", "olives","onion"]
};
    
function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep-dish", "traditional", "mozorella", ["peperroni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand-tossed", "marinara", ["mozorella", "feta"], ["mushroom", "olives", "onion"]);
console.log(p2);

var p3 = pizzaOven("thick", ["marinara", "pesto"], "mozorella", "cherry tomatoes");
console.log(p3);

var p4 = pizzaOven("thin", "traditional", ["mozorella", "parmessan"], "vegatables");
console.log(p4);