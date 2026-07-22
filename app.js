


function sayHello(name) {
    console.log("Hello, " + name + "!");
}

sayHello("Alice");
sayHello("Bob");
sayHello("Charlie");



function printBanner(text){
console.log("================================");
console.log(text);
console.log("================================");
}


printBanner("'We can make this banner say anything!");


const phrase = 'sayanything';
printBanner(phrase);



function add(num1, num2) {
    return num1 + num2;
}

add(1, 5);

var sum = add(1, 5);
console.log(sum);



function planetHasWater(planet) {
    if (planet === "Earth" || planet === "Mars") {
        return true;
    } else {
        return false;
    }
}

console.log(planetHasWater("Earth"));
console.log(planetHasWater("Mars"));
console.log(planetHasWater("Venus"));
console.log(planetHasWater("Jupiter"));
