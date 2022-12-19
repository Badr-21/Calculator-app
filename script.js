const body = document.querySelector("body");
const header = document.querySelector(".header");
const container = document.querySelector(".container")
const themeChanger = document.querySelector("[type='range']");

themeChanger.addEventListener("change", (e) => {
    if(e.target.value === "1") {
        body.classList.add("theme-one");
        header.classList.add("theme-one");
        container.classList.add("theme-one");
        body.classList.remove("theme-two");
        header.classList.remove("theme-two");
        container.classList.remove("theme-two");
        body.classList.remove("theme-three");
        header.classList.remove("theme-three");
        container.classList.remove("theme-three");
    }
    if(e.target.value === "2") {
        body.classList.remove("theme-one");
        header.classList.remove("theme-one");
        container.classList.remove("theme-one");
        body.classList.add("theme-two");
        header.classList.add("theme-two");
        container.classList.add("theme-two");
        body.classList.remove("theme-three");
        header.classList.remove("theme-three");
        container.classList.remove("theme-three");
    }if(e.target.value === "3") {
        body.classList.remove("theme-one");
        header.classList.remove("theme-one");
        container.classList.remove("theme-one");
        body.classList.remove("theme-two");
        header.classList.remove("theme-two");
        container.classList.remove("theme-two");
        body.classList.add("theme-three");
        header.classList.add("theme-three");
        container.classList.add("theme-three");
    }
});


const screenResult = document.querySelector(".screen");
const buttons = document.querySelectorAll(".buttons .button");
console.log(buttons)


Array.from(buttons).forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerText === "RESET") {
            screenResult.innerText = ""
        }else {
            screenResult.innerText += e.target.innerText;
        }
    })
})


