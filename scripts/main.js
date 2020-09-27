console.log("mindgames");

let array1 = ["Marquita", "Sean", "Peanut", "Jenacis", "Mikel"];

const goButton = document.getElementById("go-button");
const slowButton = document.getElementById("slow-button");
const stopButton = document.getElementById("stop-button");

goButton.addEventListener("click", function () {
  console.log("go button clicked");
});

slowButton.addEventListener("click", function () {
  console.log("slow button clicked");
});
stopButton.addEventListener("click", function () {
  console.log("stop button clicked");
});

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}
