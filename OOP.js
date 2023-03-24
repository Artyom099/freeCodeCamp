// adding properties to the prototype
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {console.log('nom, nom, nom')},
    describe: function() {console.log(`My name is ${this.name}`)}
};


// show this relationship with the isPrototypeOf method:
Dog.prototype.isPrototypeOf(beagle);



//
function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);  // yields true
// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);



// Edit the code in the spirit of DRY by moving the eat method to the Animal supertype
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
    // eat: function() {
    //   console.log("nom nom nom");
    // }
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
    // eat: function() {
    //   console.log("nom nom nom");
    // }
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {console.log('nom nom nom')}
};



//
