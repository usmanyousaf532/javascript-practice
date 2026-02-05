document.querySelector("#grandparent").addEventListener("click", (e) => {
  console.log("GrandParent Clicked !");
  e.stopPropagation();
});

document.querySelector("#parent").addEventListener("click", (e) => {
  console.log("parent Clicked !");
  e.stopPropagation();
});

document.querySelector("#child").addEventListener("click", (e) => {
  console.log("child Clicked !");
  e.stopPropagation();
});
