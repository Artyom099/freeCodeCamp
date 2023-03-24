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



//Use Object.create to make two instances of Animal named duck and beagle.
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
    console.log("nom nom nom");
    }
};
// Only change code below this line
let duck1 = Object.create(Animal.prototype); // Change this line
let beagle1 = Object.create(Animal.prototype); // Change this line



// Modify the code so that instances of Dog inherit from Animal
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
    console.log("nom nom nom");
  }
};
function Dog() { }
// Only change code below this line
let beagle2 = new Dog();
Dog.prototype = Object.create(Animal.prototype);



// function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Only change code below this line
let duck3 = new Bird();
Bird.prototype.constructor = Bird;  // дописал это
let beagle3 = new Dog();            // и это
Dog.prototype.constructor = Dog;



//
