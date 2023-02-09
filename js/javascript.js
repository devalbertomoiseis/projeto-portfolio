const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type == "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

/* cards */
// Aula 17 - Navegação por tabs

//------------------------------------------------------------------------------
const navTabs = document.querySelectorAll(".js-nav-tabs li a");
const tabPane = document.querySelectorAll(".js-tab-pane");

navTabs.forEach((nav, index) => {
  nav.addEventListener("click", (event) => {
    event.preventDefault();

    navTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tabPane.forEach((tab) => {
      tab.classList.remove("active");
    });

    nav.classList.add("active");
    tabPane[index].classList.add("active");
  });
});

function typewriterEffect(element, delay = 0) {
  let split_element = element.innerHTML.split("");
  element.innerHTML = "";
  setTimeout(() => {
    split_element.forEach((value, index) => {
      setTimeout(() => {
        element.innerHTML += value;
      }, 65 * index);
    });
  }, delay);
}

typewriterEffect(document.querySelector("h1"));
typewriterEffect(document.querySelector("h1"), 900);
