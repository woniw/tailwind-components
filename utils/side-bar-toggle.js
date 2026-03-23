let toggleButton = document.getElementById("toggle-button");
const sideBar = document.getElementById("side-bar");

toggleButton.addEventListener("click", () => {
    sideBar.classList.toggle("-translate-x-full")
})