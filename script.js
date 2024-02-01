function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to set make and model
  Car.call(this, make, model);

  this.topSpeed = topSpeed;
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor property of SportsCar to be SportsCar itself
SportsCar.prototype.constructor = SportsCar;

// Add a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
