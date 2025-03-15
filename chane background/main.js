function changeColor() {
    const input = document.querySelector("input[type='text']");
    const inputValue = input.value;
    document.body.style.backgroundColor = inputValue;
}