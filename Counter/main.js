let number = document.getElementsByClassName("number")[0];
function positiveFunction() {
    number.textContent++;
}
function negativeFunction() {
    if (parseInt(number.textContent) > 0)
        number.textContent--;
}