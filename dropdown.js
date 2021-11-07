/*
  Requires the clicked item to have a class of 'dropdown-menu'
  Requires the menu to have a class of 'menu-container' and 'hidden'
  Requires the 'hidden' helper class with display of none


*/

const dropdowns = document.querySelectorAll(".dropdown-menu");

dropdowns.forEach((el) => {
  el.addEventListener("click", (e) => {
    toggleDropdown(e.target);
  });
});

function toggleDropdown(el) {
  const menu = el.querySelector(".menu-container");
  menu.classList.toggle("hidden");
}
