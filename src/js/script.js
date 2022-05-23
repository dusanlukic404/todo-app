"use strict";

// Main JS code for Application
import imgCross from "../images/icon-cross.svg";
import imgSun from "../images/icon-sun.svg";
import imgMoon from "../images/icon-moon.svg";
import imgDesktopDark from "../images/bg-desktop-dark.jpg";
import imgDesktopLight from "../images/bg-desktop-light.jpg";
import imgMobileDark from "../images/bg-mobile-dark.jpg";
import imgMobileLight from "../images/bg-mobile-light.jpg";

const todoInput = document.querySelector(".todo-input");
const todoContainer = document.querySelector(".todo-list");
const filterContainer = document.querySelectorAll(".filter");
const clearAllBtn = document.querySelector(".btn-clear");
const addTodoBtn = document.querySelector(".input-check");
const itemNumber = document.querySelector(".items-counter");
const itemSpan = document.querySelector(".items-number");
let itemCounter = 0;

function addItem() {
  itemCounter++;
  itemNumber.textContent = itemCounter;
  itemSpan.textContent = itemCounter === 1 ? "item" : "items";
}

function removeItem() {
  itemCounter--;
  itemNumber.textContent = itemCounter;
  itemSpan.textContent = itemCounter === 1 ? "item" : "items";
}

function addTodo() {
  let todo = `<li class="todo-item" draggable="true">
              <input
                type="checkbox"
                class="todo-check"
                name=""
                id=""
                aria-label="Select todo"
              />
              <p class="todo">${todoInput.value}</p>
              <img
                src=${imgCross}
                alt="Delete todo"
                class="btn-delete-todo"
              />
            </li>`;
  todoContainer.insertAdjacentHTML("afterbegin", todo);
  addItem();
  document
    .querySelectorAll(".btn-all")
    .forEach((btn) => btn.classList.add("btn-filter--active"));
}

function removeTodo(event) {
  if (!event.target.classList.contains("btn-delete-todo")) return;
  const todo = event.target.closest(".todo-item");

  todo.classList.add("todo-item--deleted");
  todo.addEventListener("transitionend", function () {
    todo.remove();
  });

  if (
    !event.target.previousElementSibling.classList.contains("todo-completed")
  ) {
    removeItem();
  } else {
    itemNumber.textContent = itemCounter;
    itemSpan.textContent = itemCounter === 1 ? "item" : "items";
  }

  if (itemCounter == 0) {
    document
      .querySelectorAll(".btn-all")
      .forEach((btn) => btn.classList.remove("btn-filter--active"));
  }
}

function completedTodo(event) {
  if (
    event.target.classList.contains("todo-check") &&
    !event.target.nextElementSibling.classList.contains("todo-completed")
  ) {
    event.target.nextElementSibling.classList.add("todo-completed");
    removeItem();
  } else if (
    event.target.classList.contains("todo-check") &&
    event.target.nextElementSibling.classList.contains("todo-completed")
  ) {
    event.target.nextElementSibling.classList.remove("todo-completed");
    addItem();
  }
}

todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && todoInput.value !== "") {
    addTodo();
    todoInput.value = "";
  } else return;
});

addTodoBtn.addEventListener("click", function () {
  if (todoInput.value !== "") {
    addTodo();
    todoInput.value = "";
  } else return;
});

window.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

window.addEventListener("load", function () {
  todoInput.value = "";
});

clearAllBtn.addEventListener("click", function () {
  todoContainer.innerHTML = "";
  itemCounter = 0;
  itemNumber.textContent = 0;
  const filterBtns = document.querySelectorAll(".btn-filter");
  filterBtns.forEach((btn) => btn.classList.remove("btn-filter--active"));
});

todoContainer.addEventListener("click", function (e) {
  removeTodo(e);
  completedTodo(e);

  if (e.target.classList.contains("todo-check")) {
    e.target.classList.toggle("todo-check--active");
  }
});

filterContainer.forEach(function (filters) {
  filters.addEventListener("click", function (e) {
    if (!e.target.classList.contains("btn-filter")) return;
    const filterBtns = document.querySelectorAll(".btn-filter");
    filterBtns.forEach((btn) => btn.classList.remove("btn-filter--active"));

    const selectedBtn = e.target;
    selectedBtn.classList.add("btn-filter--active");

    if (todoContainer.children.length === 0) {
      selectedBtn.classList.remove("btn-filter--active");
    }

    // Filtering Todos
    const todos = todoContainer.children; // HTML Collection

    for (const todo of todos) {
      switch (selectedBtn.dataset.filter) {
        case "all":
          todo.style.display = "flex";
          break;
        case "active":
          if (!todo.children[1].classList.contains("todo-completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "completed":
          if (todo.children[1].classList.contains("todo-completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    }
  });
});

// Dark/light mode toggling
const themeBtn = document.querySelector("#theme-btn");
const themeImg = document.querySelector(".theme-img");
const headerImg = document.querySelector("#header-img");
let theme = localStorage.getItem("theme");

const setDarkTheme = function () {
  document.querySelector("body").dataset.theme = "dark";
  localStorage.setItem("theme", "dark");
  themeImg.src = `${imgSun}`;

  if (window.matchMedia("max-width(930px)").matches) {
    headerImg.style.backgroundImage = `url(${imgMobileDark})`;
  } else {
    headerImg.style.backgroundImage = `url(${imgDesktopDark})`;
  }
};

const setLightTheme = function () {
  document.querySelector("body").dataset.theme = "light";
  localStorage.setItem("theme", "light");
  themeImg.src = `${imgMoon}`;

  if (window.matchMedia("max-width(930px)").matches) {
    headerImg.style.backgroundImage = `url(${imgMobileLight})`;
  } else {
    headerImg.style.backgroundImage = `url(${imgDesktopLight})`;
  }
};

if (theme === "dark") {
  setDarkTheme();
} else {
  setLightTheme();
}

themeBtn.addEventListener("click", function () {
  theme = localStorage.getItem("theme");
  if (theme === "light") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
});

function checkTheme() {
  if (
    theme === "dark" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    setDarkTheme();
  } else if (
    theme === "light" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    setLightTheme();
  } else if (
    theme === "dark" &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

window.addEventListener("load", checkTheme());

// Making todos draggable

// Saving todos at local storage
