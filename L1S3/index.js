// const button = document.getElementById("btn");
// let counter = 0;

// button.onclick((button.innerHTML = counter));
// const area = (a, b) => {
//   return a * b;
// };

// console.log(area(3, 4));

// let arr = [1, 2, 3, 4];
// let arr2 = [1, "2", 3, "4"];
// let arr2 = [...arr];
// let arr3 = [4, 5, 6, 7];
// let arr4 = [...arr, ...arr3];
// console.log(arr4);

// arr2.push(5);
// console.log(arr2);
// console.log(arr);

// let arr3 = arr.map((item) => {
//   return item ** 2;
// });
// console.log(arr2);

// let arr4 = arr2.filter((item) => {
//   return typeof item == "   ";
// });
// console.log(arr4);

// let student = [
//   {
//     name: "Thien",
//     age: 15,
//   },
//   {
//     name: "Khoi",
//     age: 15,
//   },
//   {
//     name: "Long",
//     age: 15,
//   },
//   {
//     name: "Hung",
//     age: 15,
//   },
// ];

// let number = Number(prompt("Please enter age:"));
// let result = student.filter((item) => {
//   return (item.age = number);
// });

// result.forEach((item) => {
//   console.log(item.name);
// });
let content = document.getElementById("content");
const url = "https://66363761415f4e1a5e26a7da.mockapi.io/student";

getData();

async function getData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    renderData(data);
  }
}

function renderData(data) {
  data.forEach((element) => {
    content.innerHTML += `
        <h1>name: ${element.Name}</h1>
        <img src="${element.Image}" alt="">
        <h3>age: ${element.Age}</h3>
        <h4>id: ${element.id}</h4>`;
  });
}
