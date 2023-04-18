let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let equalsSum = document.getElementById('sum-el');


let plusAdd = document.getElementById('addPlus');
plusAdd.addEventListener('click' , () => {
    let sum = num1 + num2;
    equalsSum.textContent = equalsSum.textContent + sum
});


let subtract = document.getElementById('subtract');
subtract.addEventListener('click' , () => {
    let sum = num1 - num2;
    equalsSum.textContent = equalsSum.textContent + sum
});


let divide = document.getElementById('divide');
divide.addEventListener('click' , () => {
    let sum = num1 / num2;
    equalsSum.textContent = equalsSum.textContent + sum;
});

let multiply = document.getElementById('multiply');
multiply.addEventListener('click' , () => {
    let sum = num1 * num2;
    equalsSum.textContent = equalsSum.textContent + sum;
});



