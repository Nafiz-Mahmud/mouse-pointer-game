const all = document.querySelector(".all");
const one = document.querySelector(".one");
const buttons = document.querySelector(".buttons");
const pop = document.querySelector(".pop");
const box = document.querySelector(".box");

const easy = document.querySelector(".easy");
const normal = document.querySelector(".normal");
const hard = document.querySelector(".hard");

setTimeout(() => {
  pop.innerHTML = "";
}, 3500);

setTimeout(() => {
  document.body.style.opacity = "100%";
}, 2500);

easy.addEventListener("click", () => {
  all.classList.remove("hard");
  all.classList.remove("normal");
  all.classList.add("easy");

  all.classList.remove("hard");
  all.classList.remove("normal");
  all.classList.add("active");
  console.log("easy");

  box.addEventListener("mouseleave", () => {
    one.classList.add("act");
  });
});

normal.addEventListener("click", () => {
  all.classList.remove("easy");
  all.classList.remove("hard");
  all.classList.add("normal");
  console.log("normal");
  box.addEventListener("mouseleave", () => {
    one.classList.add("act");
  });
});

hard.addEventListener("click", () => {
  all.classList.remove("easy");
  all.classList.remove("normal");
  all.classList.add("hard");
  console.log("hard");
  box.addEventListener("mouseleave", () => {
    one.classList.add("act");
  });
});
