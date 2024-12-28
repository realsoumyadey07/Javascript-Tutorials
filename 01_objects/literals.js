//simple object creation using literal
const car = {
     type: "Fiat",
     model: "500",
     color: "White",
     typeAndModel: function () {
          return "Type is: "+ this.type + " and model is: " + this.model;
     }
};

const person = {};
person.type = "Person";
person.firstName = "Soumya";
person.lastName = "Dey";
person.isAdult = true;

const x = person;

x.firstName = "Soumyadip";

console.log(person);
console.log(person["firstName"]);
console.log(car.typeAndModel());
