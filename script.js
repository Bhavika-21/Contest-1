/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map(job);
  function job(item) {
    if (item.profession == "developer") {
      console.log(item.name);
    }
  }
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession == "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  let employee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(employee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  let index = -1;
  arr.forEach((employee, indexes) => {
    if (employee.profession === "admin") {
      index = indexes;
    }
  });
  // second step remove that element
  arr.splice(index, 1);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here

  let arrTwo = [
    { id: 5, name: "mike", age: "17", profession: "ux-designer" },
    { id: 6, name: "lauren", age: "22", profession: "data-scientist" },
    { id: 7, name: "david", age: "24", profession: "product-manager" },
  ];
  let afterJoined = arr.concat(arrTwo);
  console.log(afterJoined);
}
