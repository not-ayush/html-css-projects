const p1 = document.querySelector("#password");
const p2 = document.querySelector("#confirm-pass");

function checkSame() {
    if (p1.value == p2.value) {
        p1.setAttribute("class", "valid");
        p2.setAttribute("class", "valid");
    } else {
        p1.setAttribute("class", "invalid");
        p2.setAttribute("class", "invalid");
    }
}

p1.addEventListener("input", (e) => {
    if (p2.value != "") {
        checkSame();
    }
})
p2.addEventListener("input", checkSame);
