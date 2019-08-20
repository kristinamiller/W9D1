function inherits (Child, Parent) {
  function Surrogate(){}
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
}

// class Animal {
//   constructor(color){
//     this.color = color;
//   }

//   poop() {
//     return `I am pooping`;
//   }
// }


function Animal(color) {
  this.color = color;
}

Animal.prototype.poop = function() {
  return `I am pooping`;
};

function Donkey(color, name) {
  Animal.call(this, color); 
  this.name = name;
}







