let btns = document.querySelectorAll(".button");
let arr = Array.from(btns);
let inp = document.getElementsByClassName("screen")[0];
let string = "";

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = String(eval(string));
            inp.value = string;
        } else if (e.target.innerHTML === "Ac") {
            string = "";
            inp.value = string;
        } else if (e.target.innerHTML === "Del") {
            string = string.substring(0, string.length - 1);
            inp.value = string;
        } else if (e.target.innerHTML === "π") {
            string += "3.1415926535897932384626433832795";
            inp.value = string;
        } else if (e.target.innerHTML === "x²") {
            string += `*${string}`;
            inp.value = string;
        } else {
            string += e.target.innerHTML
            inp.value = string
        }
    })
});
