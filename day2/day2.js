const menu = document.querySelector(".menu-icon");
const divs = document.querySelectorAll("div")
const regexForLines = /line[123]{1}/
const lines = [...divs].filter( div => regexForLines.exec(div.className))


const animateMenu = () =>{
    lines.forEach((line) =>{
        line.classList.remove("no-animation")
        line.classList.toggle(`active-${line.classList[0]}`)
    })
}

menu.addEventListener("click", animateMenu)