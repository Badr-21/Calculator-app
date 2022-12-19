const toggle = document.querySelector("[type='checkbox']");
const prices = Array.from(document.querySelectorAll(".price > span"));

toggle.addEventListener("click", () => {
    if(toggle.checked) {
        prices.forEach(price => {
            price.innerText = parseInt(price.innerText) * 10 + 9.99;
        });
    }else {
        prices.forEach(price => {
            price.innerText = parseInt(price.innerText) / 10 + .09
        });
    }
});
