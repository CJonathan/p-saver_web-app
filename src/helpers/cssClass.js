export const removeClass = (e) => {
  let container = document.querySelector(".regions");
  let elems = container.querySelectorAll(".active");
  [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
  e.target.classList.add('active');
}