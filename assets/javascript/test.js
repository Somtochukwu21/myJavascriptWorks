function Person(name, age, speciality = "Not Specified") {
  this.name = name;
  this.age = age;
  this.speciality = speciality;
}

Person.prototype.sayName = function () {
  return this.name;
};

function Athlete(name, age, speciality) {
  Person.call(this, name, age, speciality);
  this.speciality = speciality;
}

Athlete.prototype = Object.create(Person.prototype);
Athlete.prototype.getSport = function () {
  return "I play " + this.speciality;
};

let jim = new Athlete("jim", 54, "basketball");
console.log(jim.sayName());
console.log(jim.getSport());
