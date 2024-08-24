const innerContainer = document.querySelector("#innerContainer");
const changeBoxesButton = document.querySelector("#changeBoxes");

changeBoxesButton.addEventListener("click", () => {getBoxAmount(); changeBoxLayout()});
changeBoxesButton.addEventListener("mouseenter", () => {changeColor(changeBoxesButton, randomColor())});
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
        box.setAttribute("style", `width: ${100 / BoxAmountHorizontal}%; border-radius: ${90 / BoxAmountHorizontal}px`);
        innerContainer.appendChild(box);

        box.addEventListener("mouseenter", () => {
            changeColor(box, randomColor()); changeBorder(box); changeOpacity(box, "10", "true"); // Pass the specific box to change its color
        });
    }

}
function randomColor() {
    return `hsl(${randomNumber(360, true)}, ${randomNumber(100, true)}%, ${randomNumber(100, true)}%`
}
function changeColor(element, color) {
    element.style.backgroundColor = color;
}

function changeBorder(element) {
    element.style.borderRadius = "0px";
}
function randomNumber(multiplier, rounded) {
    if (rounded) {
    return Math.floor(Math.random()*multiplier);
    } else {
        return Math.random()*multiplier;
    }
}

function changeOpacity(element, amount, negativ) {
    // Get the current opacity value (default to 1 if not set)
    let currentOpacity = parseFloat(window.getComputedStyle(element).opacity);
    
    // Calculate the new opacity based on the amount and the negativ flag
    if (negativ) {
        currentOpacity -= (amount / 100);
    } else {
        currentOpacity += (amount / 100);
    }
    
    // Ensures the new opacity is within the valid range (0 to 1)
    currentOpacity = Math.max(0, Math.min(1, currentOpacity));
    
    // Sets the new opacity value
    element.style.opacity = currentOpacity;
}


changeBoxLayout();