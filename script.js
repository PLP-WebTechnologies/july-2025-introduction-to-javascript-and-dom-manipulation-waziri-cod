// =======: Mastering JavaScript Basics ===================

// Variable declarations
let userName = "Waziri";    // String
let userAge = 21;           // Number
let isStudent = true;       // Boolean

// Conditional example
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is not an adult.");
}


// Function 1: Change greeting text
function changeGreeting() {
  let greetingElement = document.getElementById("greeting");
  greetingElement.textContent = "Hello, " + userName + "! You are " + userAge + " years old."; 
}

// Function 2: Calculate total price of items
function calculateTotal(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total;
}

// =======: JavaScript Loops — Repetition ===================

// Loop Example 1: For loop (counting numbers)
for (let i = 1; i <= 3; i++) {
  console.log("For Loop Count: " + i);
}

// Loop Example 2: While loop (countdown)
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}


// ================== DOM Manipulation ==================
// 1. Change text when button clicked
document.getElementById("changeTextBtn").addEventListener("click", changeGreeting);

// 2. Display calculation result dynamically
document.getElementById("calculateBtn").addEventListener("click", function() {
  let items = [10, 20, 30];  // Example array
  let total = calculateTotal(items);
  document.getElementById("result").textContent = "Total Price: $" + total;
});

// 3. Generate list of numbers
document.getElementById("listBtn").addEventListener("click", function() {
  let numberList = document.getElementById("numberList");
  numberList.innerHTML = ""; // Clear previous list

  for (let i = 1; i <= 5; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = "Number: " + i;
    numberList.appendChild(listItem);
  }
});

//  Update greeting based on condition
if (isStudent) {
  document.getElementById("greeting").textContent += " (You are a student!)";
}
