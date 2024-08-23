const innerContainer = document.querySelector("#innerContainer");
const changeBoxesButton = document.querySelector("#changeBoxes");

changeBoxesButton.addEventListener("click", () => {getBoxAmount(); changeBoxLayout()});
changeBoxesButton.addEventListener("mouseenter", () => {changeColor(changeBoxesButton, "brown")});
changeBoxesButton.addEventListener("mouseleave", () => {changeColor(changeBoxesButton, "white")});
innerContainer.addEventListener("mouseleave", () => changeBoxLayout())
let BoxAmountHorizontal = 4;
let BoxAmountVertical = 4;

function getBoxAmount() {
    let BoxAmount = prompt("What box layout do you want? Nothing over 100", "5 6");
    const BoxAmountArray = BoxAmount.split(" ");
    if ("number" === typeof Number(BoxAmountArray[0]) && Number(BoxAmountArray[0]) <= 100) {
    BoxAmountHorizontal = Number(BoxAmountArray[0]);
    } else {
        alert("Invalid input amount. Please try again.");
        return getBoxAmount()
    }


    if ("number" !== typeof Number(BoxAmountArray[2]) || isNaN(Number(BoxAmountArray[2]))) {
        if ("number" !== typeof Number(BoxAmountArray[1]) || isNaN(Number(BoxAmountArray[1]))) {
            BoxAmountVertical = Number(BoxAmountArray[0]); 
        } else  if (Number(BoxAmountArray[1]) <= 100){
            BoxAmountVertical = Number(BoxAmountArray[1]);
        } else {
            alert("Invalid input amount. Please try again.")
            return getBoxAmount()
        }
    } else  if (Number(BoxAmountArray[2]) <= 100){
        BoxAmountVertical = Number(BoxAmountArray[2]);
    } else {
        alert("Invalid input amount. Please try again.")
        return getBoxAmount()
    }

}

function resetBoxLayout() {
    while (innerContainer.firstChild) {
        innerContainer.removeChild(innerContainer.firstChild);
      }
}

function changeBoxLayout() {
    resetBoxLayout()
    let BoxAmountOverall = BoxAmountHorizontal * BoxAmountVertical;
    for (let i = 0; i < BoxAmountOverall; i++) {
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        box.setAttribute("style", `width: ${100 / BoxAmountHorizontal}%; border-radius: ${120 / BoxAmountHorizontal}px`);
        innerContainer.appendChild(box);

        box.addEventListener("mouseenter", () => {
            changeColor(box, "brown"); changeBorder(box) // Pass the specific box to change its color
        });
    }

}

//; border-width: ${50 / BoxAmountOverall}px;

function changeColor(element, color) {
    element.style.backgroundColor = color; // Change this to any color you like
}

function changeBorder(element) {
    element.style.borderRadius = "0px";
}

changeBoxLayout();