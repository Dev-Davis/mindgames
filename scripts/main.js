console.log("mindgames");

let array1 = ["Marquita", "Sean", "Peanut", "Jenacis", "Mikel"];

console.log(array1.join());
console.log(array1.push("A cat"));

const goButton = document.getElementById("go-button");
const slowButton = document.getElementById("slow-button");
const stopButton = document.getElementById("stop-button");
const addMoney = document.getElementById("getMoney");

const playerDough = 1000;

addMoney.addEventListener("click", function () {
  console.log("get money button was clicked");
});

array1.forEach((name) => {
  console.log(name);
});
