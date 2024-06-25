let bars = document.querySelector(".bars");
let showLink = document.querySelector(".show-link");

bars.addEventListener("click", () => {
    showLink.classList.toggle("active");
});