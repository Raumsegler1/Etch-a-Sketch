const innerContainer = document.querySelector("#innerContainer");
const changeBoxesButton = document.querySelector("#changeBoxes");

changeBoxesButton.addEventListener("click", () => {getBoxAmount(); changeBoxLayout()});

let BoxAmountHorizontal = 4;
let BoxAmountVertical = 4;

function getBoxAmount() {
    const BoxAmount = prompt("What box layout do you want? Nothing over 100", "5 6");
    const BoxAmountArray = BoxAmount.split(" ");
    if ("number" === typeof Number(BoxAmountArray[0]) && Number(BoxAmountArray[0]) <= 100) {
    BoxAmountHorizontal = Number(BoxAmountArray[0]);
    } else {
        BoxAmount = prompt ("Try again", 5)
    }


    if ("number" !== typeof Number(BoxAmountArray[1])) {
        if ("number" !== typeof Number(BoxAmountArray[2])) {
            BoxAmountVertical = Number(BoxAmountArray[0]); 
        } else  if (Number(BoxAmountArray[2]) <= 100){
            BoxAmountVertical = Number(BoxAmountArray[2]);
        } else {
            BoxAmount = prompt ("Try again", 5)
        }
    } else  if (Number(BoxAmountArray[1]) <= 100){
        BoxAmountVertical = Number(BoxAmountArray[1]);
    } else {
        BoxAmount = prompt ("Try again", 5)
    }

}

function changeBoxLayout() {
    while (innerContainer.firstChild) {
      innerContainer.removeChild(innerContainer.firstChild);
    }
    let BoxAmountOverall = BoxAmountHorizontal * BoxAmountVertical;
    for (let i = 0; i < BoxAmountOverall; i++) {
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        box.setAttribute("style", `width: ${100 / BoxAmountHorizontal}%; border-width: ${10 / BoxAmountHorizontal}px`);
        innerContainer.appendChild(box);
    }

}

changeBoxLayout();