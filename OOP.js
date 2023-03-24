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




// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog.
// Then add a bark() method to the Dog object so that beagle can both eat() and bark().
// The bark() method should print Woof! to the console.
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {console.log('Woof!');}
// Only change code above this line

let beagle4 = new Dog();



// Here's an example of Bird overriding the eat() method inherited from Animal:
function Animal() { }
Animal.prototype.eat = function() {
    return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.eat = function() {
    return "peck peck peck";
};



// Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.
function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function() {return 'Alas, this is a flightless bird.'}
// Only change code above this line
let penguin = new Penguin();
console.log(penguin.fly());



// Create a mixin named glideMixin that defines a method named glide.
// Then use the glideMixin to give both bird and boat the ability to glide.
let bird = {
    name: "Donald",
    numLegs: 2
};
let boat = {
    name: "Warrior",
    type: "race-boat"
};
// Only change code below this line
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("Gliding!");
    };
};
glideMixin(bird);
glideMixin(boat);



//
