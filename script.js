/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
const t4thEmp = {id:4,name:"susan",age:"20",profession:"intern"};

const newArr = [
  { id: 5, name: "jennie", age: "17", profession: "developer" },
  { id: 6, name: "jeson", age: "23", profession: "tester" },
  { id: 7, name: "ken", age: "22", profession: "support" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((e) => e.profession === "developer" && console.log(e.name));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((e)=>{
    if (e.profession==="developer") {
      console.log(e.name)
    }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push(t4thEmp)
  console.log(arr)
  document.getElementById("fth").disabled = true; //implementing cause byclicking it , it will create another same data in the array
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((e)=>e.profession !=="admin")
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  arr = [...arr, ...newArr]
  console.log(arr)
  document.getElementById("conc").disabled = true;//implementing cause byclicking it , it will create another same data in the array
}

