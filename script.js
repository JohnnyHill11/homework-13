'use strict';

Hamburger.SIZE_SMALL = {
  name: 'small',
  price: 50,
  calorie: 20
};

Hamburger.SIZE_MEDIUM = {
  name: 'medium',
  price: 75,
  calorie: 30
};

Hamburger.SIZE_LARGE = {
  name: 'large',
  price: 100,
  calorie: 40
};

Hamburger.TOPPING_CHEESE = {
  name: 'cheese',
  price: 10,
  calorie: 20
};

Hamburger.TOPPING_SALAD = {
  name: 'salad',
  price: 20,
  calorie: 5
};

Hamburger.TOPPING_POTATO = {
  name: 'potato',
  price: 15,
  calorie: 10
};

Hamburger.TOPPING_SPICE = {
  name:'spice',
  price: 15,
  calorie: 0
};

Hamburger.TOPPING_MAYO = {
  name: 'mayo',
  price: 20,
  calorie: 5
};

function Hamburger(size) {
  this.size = size;
  this.topping = [];
}

Hamburger.prototype.addTopping = function(topping) {
  let toppingPresent = 0;
  this.topping.forEach((item) => {
    if (item === topping) {
      toppingPresent++;
    }
  });
  if (!toppingPresent) {
    this.topping.push(topping);
  } 
  return topping;
};

Hamburger.prototype.getPrice = function() {
  let sizePrice = this.size.price;
  let toppingPrice = 0;
  this.topping.forEach((item) => {
    toppingPrice += item.price;
  });
  return sizePrice + toppingPrice ;
};

Hamburger.prototype.getCallories = function() {
  let sizePrice = this.size.calorie;
  let toppingPrice = 0;
  this.topping.forEach((item) => {
    toppingPrice += item.calorie;
  });
  return sizePrice + toppingPrice;
};

const hamburger = new Hamburger(Hamburger.SIZE_MEDIUM);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);

console.log('Price with sauce:', hamburger.getPrice());
console.log('Callories with sauce:', hamburger.getCallories());