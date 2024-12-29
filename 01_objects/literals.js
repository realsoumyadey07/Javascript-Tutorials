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
//Adding properties to the object
person.type = "Person";
person.firstName = "Soumya";
person.lastName = "Dey";
person.isAdult = true;
//deleting properties from the object
delete person.type;
const x = person;
x.firstName = "Soumyadip";

//Nested objects
const nasted = {
     name: "Ram",
     address: "Ayodhya",
     age: 5000,
     astras: {
          "astra01": "Ramban",
          "astra02": "Bhramastra",
          "astra03": "Gururastra",
          chatacter: function () {
               return `Ram is the greatest person of all time`;
          }
     }
}
nasted.brother = function () {
     return `Ram's brother is lakshmana`;
}
//Converting objects into array
//Using object.values()
const myArr = Object.values(nasted);
//Using object.keys()
const myArr2 = Object.keys(nasted);
//Using object.entries()
const myArr3 = Object.entries(nasted);

//JavaScript objects can be converted to a string with JSON method JSON.stringify()
const myStr = JSON.stringify(nasted);

console.log(myArr2);