/* 
  This function checks if number entered by user is Armstrong
  This is done by looping through the length of number entered using the length value of the number entered; 
  calculate the cubed value of each digit;
  Then sums the total number of all the cubed values.

  Conditional statesments are used to validate
  1. if there is any number entered by the user;
  2. if the length of the number entered is less than 3 or greater than 3 
  (Note 3 is the length of the number entered and is also used as the power number with the Math.pow method)
  3. if the number entered is Armstrong, it tells the user
  4. if not Armstrong, also tells the user
*/

// Setting and gettign UI DOM Elements;

let numberInput = document.getElementById("numberInput");
let checkBtn = document.getElementById("checkBtn");
let disabledBtn = document.getElementById("checkBtn");
let displayInfo = document.getElementById("displayInfo");
displayInfo.hidden = true;
// Armstrong checker function
const armstrongNumber = () => {

  let number = Number(numberInput.value);
  let strNum, power, total;

  strNum = number.toString(); // converts the inputed number to string
  power = strNum.length;
  total = 0;

  for(let i = 0; i < strNum.length; i++ ){
  total += Math.pow(parseInt(strNum[i]), power);  // uses the parseInt() method to convert each iterated string item to number
  }
  

  // condition statements to check various desired program output
  if (numberInput.value.length == 0) {
    checkBtn.disabled = true;
    displayInfo.hidden = false;
    displayInfo.innerHTML = "Please enter a 3-dight Number !";
  } 
  else if (numberInput.value.length < 3 | numberInput.value.length > 3) {
    checkBtn.disabled = true;
    displayInfo.hidden = false;
    displayInfo.innerHTML = "Number entered is not a 3-digits number";
  }else if (total === number & number.toString().length == 3) {
    displayInfo.hidden = false;
    displayInfo.innerHTML = "is an Armstrong Number !";
  }  else {
    displayInfo.hidden = false;
    displayInfo.innerHTML = "is Not an Armstrong Number !";
  }
}

// function disables button based on DOM interaction
const disableButton = () => {
  if (numberInput.value.length == 0) {
    checkBtn.disabled = true;
    displayInfo.innerHTML = "Please enter a 3-dight Number !";
  } else if (numberInput.value.length < 3 | numberInput.value.length > 3) {
    checkBtn.disabled = true;
    displayInfo.innerHTML = "Number entered is not a 3-digits number";
  } else {
    checkBtn.disabled = false;
  }
}    

// listes for a click event on the check number button and fires the armstrongNumber function
checkBtn.addEventListener("click", armstrongNumber);

// listes for a change event on the input box and fires the disableButton function
numberInput.addEventListener("change", disableButton);