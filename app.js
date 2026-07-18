const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

$("#year").textContent = new Date().getFullYear();

const burger = $("#navBurger");
const navLinks = $("#navLinks");

burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  burger.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
});

$$("#navLinks a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  })
);

// faq accordion
$$(".faq__item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      $$(".faq__item").forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
