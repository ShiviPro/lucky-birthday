let dob = document.querySelector("#dob__input");
let luckyNo = document.querySelector("#lucky-num__input");
let checkBtn = document.querySelector("#check-btn");

checkBtn.addEventListener("click", (event) => {
  let dobVal = dob.value;
  let luckyNoVal = parseInt(luckyNo.value);
  let numbers = "0123456789";
  let digitSum = 0;
  for (let charIndex = 0; charIndex < dobVal.length; charIndex++) {
    let char = dobVal.charAt(charIndex);

    if (numbers.indexOf(char) > -1) {
      let digit = parseInt(char);
      digitSum += digit;
    }
  }
  if (digitSum % luckyNoVal === 0) {
    alert('Your Birthday is "LUCKY" ');
  }
});
