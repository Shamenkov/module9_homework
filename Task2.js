const jsonString = `
 {
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const data = JSON.parse(jsonString);
//console.log(data)
const list = data.list
//console.log(list)

let obj1 = list[0];
let obj2 = list[1];
obj1.age = Number(obj1.age);
obj2.age = Number(obj2.age);

let resultObj = {
  list: [obj1, obj2]
};
console.log(resultObj)