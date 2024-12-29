//creating object using constructor function
function Person(firstName, lastName, email, age, isAdult){
     this.firstName = firstName;
     this.lastName = lastName;
     this.email = email;
     this.age = age;
     this.isAdult = isAdult;
     this.fullName = function() {
          return `Full name is: ${this.firstName} ${this.lastName}`;
     }
}

const person = new Person("Soumya", "Dey", "soumyadipdey802@gmail.com", 22, true);
person.height = "5'6";
//to add a property in existing contructor function
Person.prototype.nationality = "Indian";
Person.prototype.changeNationality = function(nationality){
     this.nationality = nationality;
}
const person2 = new Person("Som", "Mondal", "som389@gmail.com", 33, true);
person2.changeNationality("Italian");


//Some built-in objects
new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object


console.log(person.nationality);