// Write your demo code here, section by section.
// The HTML file has matching ids/classes for each topic:
//
// 1. Selecting Elements   -> #main-title, .submit-btn, .task
console.log(document.getElementById("main-title"));
console.log(document.querySelector(".submit-btn"));
console.log(document.querySelectorAll(".task"));

// 2. Modifying Content    -> .label, #msg, #card
const label = document.querySelector(".label");
label.textContent = "Hello";
// console.log(document.getElementById("msg").textContent="Plain text only");
const msg = document.getElementById("msg");
msg.textContent = "Plain text only";
// console.log(document.getElementById("card").innerHTML = '<h4>Card Title</h4><p>This is card detail.</p>')
const card = document.getElementById("card");
card.innerHTML = "<h4>Card Title</h4><p>This is card detail</p>";

// 3. classList            -> #themeBtn, .card
const btn = document.querySelector("#themeBtn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

card.classList.add("active");
card.classList.remove("active");
card.classList.toggle("active");

// 4. Create & Remove      -> #addTaskBtn, #resetTasksBtn, #tasks
const addTaskBtn = document.querySelector("#addTaskBtn");
const resetTasksBtn = document.querySelector("#resetTasksBtn");
const tasksList = document.querySelector("#tasks");

addTaskBtn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.textContent = "New Task";
  newLi.classList.add("task-item");
  tasksList.appendChild(newLi);
});

resetTasksBtn.addEventListener("click", () => {
  tasksList.innerHTML = "";
});

// 5. Events               -> #click-me, #list, #signupForm, #email, .error
const clickMe = document.querySelector("#click-me");
let count = 0;
const eventDiv = document.querySelector("#event-div");
// clickMe.addEventListener("click", () => {
//   alert("Button clicked");
// });

clickMe.addEventListener("click", () => {
  count++;
  clickMe.textContent = `clicked ${count}`;
});

clickMe.addEventListener("click", (e) => {
  eventDiv.innerHTML = `<img width="200px" height="200px" src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">`;
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
});

const list = document.querySelector("#list");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});

const signupForm = document.querySelector("#signupForm");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailInput.value.trim() === "") {
    errorMessage.textContent = "";
  } else {
    console.log("Submitting email:", emailInput.value);
    alert(`Submitting email: ${emailInput.value}`);
  }
});

// 6. Pokémon Card Fetcher -> #fetchBtn, #resetBtn, #gallery
