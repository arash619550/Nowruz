const input = document.querySelector("input:first-child");
const customAlertTrue = document.querySelector(".custom-alert-true");
const customAlertfalse = document.querySelector(".custom-alert-false");
function check() {
    if (input.value == "1234") {
        customAlertTrue.style.display = "block";
        customAlertfalse.style.display = "none";
    }
    else {
        customAlertfalse.style.display = "block";
        customAlertTrue.style.display = "none";
    }
}