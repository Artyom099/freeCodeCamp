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


//
