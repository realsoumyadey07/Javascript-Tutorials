// Javascript object methods
const myObj = {};
const myObj2 = {
     name: "Soumya dey",
     age: 22,
     nationality: "Indian",
     get getNationality() {
          return this.nationality;
     }
}
Object.defineProperty(myObj2, "setNationality", {
     set: function (value) {
          this.nationality = value;
     }
})
// assing properties of the object to a new object
Object.assign(myObj, myObj2);
// creates an object from an existing object
const myObj3 = Object.create(myObj2);
myObj3.name = "Ishan Dey";
// assessing object key-values
for(let[key, val] of Object.entries(myObj2)){
     console.log(`Key is: ${key}, Value is: ${val}`);
}
myObj2.setNationality = "Italian";
const nationality = myObj2.getNationality;
console.log(nationality);