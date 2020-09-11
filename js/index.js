const toggleBtn = document.querySelector(".toggle")
const nav = document.querySelector(".nav_bar")
const footer = document.querySelector("footer")
const sections = document.querySelectorAll(".section_wrapper section")
const anchor = document.querySelectorAll(".timeline_bar a")


function hoverhandler() {
    sections.forEach(section => {
        section.addEventListener("mouseenter", function() {
            const id = this.getAttribute("id")
            const navActive = document.querySelector(`a[href="#${id}"]`)
            anchor.forEach(link => link.classList.remove("active"))
            navActive.classList.add("active")
        })
    })
}



function handleToggle() {
    nav.classList.toggle("nav_active")
    footer.classList.toggle("footer_active")

}

function init() {
    toggleBtn.addEventListener("click", handleToggle)
    hoverhandler()
}

init()