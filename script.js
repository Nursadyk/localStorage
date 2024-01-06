const createBtn = document.querySelector(".create");
const container = document.querySelector(".container");
const menuContainer = document.querySelector(".menu-container__inner");
const admin = document.querySelector(".admin");
const menu = document.querySelector(".menu");
const imgInput = document.getElementById("imgInput");
const foodInput = document.querySelector(".foodInput");
const priceInput = document.querySelector(".priceInput");

// let s = false;

admin.onclick = () => {
  admin.style.color = "green";
  menu.style.color = "";
  container.style.display = "block";
  // menuContainer.style.transform = "translateX(-200%)";
  menuContainer.style.display = "none";
};
menu.onclick = () => {
  admin.style.color = "";
  menu.style.color = "green";
  container.style.display = "none";
  // menuContainer.style.transform = "translateX(0)";
  menuContainer.style.display = "grid";
};
createBtn.onclick = () => {
  if (imgInput.value == "" || foodInput.value == "" || priceInput.value == "") {
    alert("заполните все строки");
    return;
  } else {
    alert("добавлено");
  }
  const obj = {
    imgValue: imgInput.value,
    foodValue: foodInput.value,
    priceValue: priceInput.value,
  };
  let arr = JSON.parse(localStorage.getItem("obj")) || [];
  arr.push(obj);
  localStorage.setItem("obj", JSON.stringify(arr));
  createMenu();
  imgInput.value = "";
  foodInput.value = "";
  priceInput.value = "";
};
function createMenu() {
  const exam = JSON.parse(localStorage.getItem("obj"));
  console.log(exam);
  menuContainer.innerHTML = "";
  exam.forEach((el) => {
    const createEl = document.createElement("div");
    createEl.innerHTML = `<div class="inner-div"> <img src="${el.imgValue}"></div> <p> ${el.foodValue}</p> <br> <p>${el.priceValue}</p> <button>to order</button>`;
    menuContainer.append(createEl);
  });
}
createMenu();
