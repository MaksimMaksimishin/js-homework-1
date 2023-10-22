/// arrow keys to change color //// D/Z
const box = document.querySelector(".box");

let colorHistory = ["white"];
let pointer = 0;


document.querySelectorAll(".colorButton").forEach((item) => {
    item.addEventListener("click", (e) => {
        box.style.backgroundColor = e.target.getAttribute("id");
        pointer++;
        colorHistory[pointer] = e.target.getAttribute("id");
    })
});
document.querySelector("#undo").addEventListener("click", () => {
    if (pointer > 0) {
        pointer--;
        box.style.backgroundColor = colorHistory[pointer];
    }

})
document.querySelector("#redo").addEventListener("click", () => {
    if (pointer < colorHistory.length - 1) {
        pointer++;
        box.style.backgroundColor = colorHistory[pointer];
    }

})
/// arrow keys to change color ///// D/Z


// btn.onclick = function() {
//     clickHandler(userName);
// }



// function clickHandler(name) {
//     console.log('click hendler', name);
// console.log('click hendler');
///
