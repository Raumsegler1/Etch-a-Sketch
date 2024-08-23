const innerContainer = document.querySelector("#innerContainer");
const changeBoxesButton = document.querySelector("#changeBoxes");

changeBoxesButton.addEventListener("click", () => {changeBoxLayout()});

let BoxAmountHorizontal;
let BoxAmountVertical;
function getBoxAmount() {
    const BoxAmount = prompt("What box layout do you want?", "5 6");
    const BoxAmountArray = BoxAmount.split(" ");
    BoxAmountHorizontal = Number(BoxAmountArray[0]);
    if ("number" !== typeof BoxAmountArray[2]) {
        BoxAmountVertical = Number(BoxAmountArray[0]);
    } else {
        BoxAmountVertical = Number(BoxAmountArray[2]);
    }

}

function changeBoxLayout() {
    innerContainer.replaceChild();
    getBoxAmount()
    let BoxAmountOverall = BoxAmountHorizontal * BoxAmountVertical;
    
}