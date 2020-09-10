const toggleBtn = document.querySelector(".toggle")
const nav = document.querySelector(".nav_bar")
const footer = document.querySelector("footer")





function handleToggle() {
    nav.classList.toggle("nav_active")
    footer.classList.toggle("footer_active")

}

function init() {
    toggleBtn.addEventListener("click", handleToggle)
}

init()