let contentDiv = document.querySelector("#content");

let form = document.createElement("div");
form.classList.add("form");
form.innerHTML = `
<svg class="close-btn" id="close-btn">
    <use xlink:href="#close">
</svg>
<div class="dob">
    <label class="dob__heading" for="dob">Select your date of birth</label>
    <br />
    <input class="dob__input" id="dob__input" type="date" name="dob" />
</div>

<div class="lucky-num">
    <label class="lucky-num__heading" for="lucky-num"
    >Enter your lucky number</label
    >
    <br />
    <input
        class="lucky-num__input"
        id="lucky-num__input"
        type="number"
        name="lucky-num"
    />
</div>

<button class="check-btn" id="check-btn">Check</button>
`;

let formLink = document.querySelector("#form-link");

let heroText = document.querySelector("#hero-txt");

formLink.addEventListener("click", (event) => {
  event.preventDefault();
  heroText.style.display = "none";
  contentDiv.appendChild(form);
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
  let closeBtn = document.querySelector("#close-btn");

  closeBtn.addEventListener("click", (event) => {
    heroText.style.display = "block";
    form.remove();
  });
});
