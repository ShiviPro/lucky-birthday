let contentDiv = document.querySelector("#content");

let form = document.createElement("div");
form.classList.add("form");
form.innerHTML = `
<svg class="close-btn" id="close-btn">
    <use xlink:href="#close">
</svg>

<div>
    <p class="privacy-notice"><span class="underline">Privacy Notice:</span> We do not store any of your data. The data requested here is just used for the sake of input.</p>
</div>

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

<div id="res"></div>

<footer class="footer">
    <section class="footer__main-content">
      <ul class="footer__list">
        <li>
          <a class="footer__link" href="https://github.com/ShiviPro"
            target="_blank" rel="noopener noreferrer"><img alt="github-logo" src="./assets/images/github.png"
          /></a>
        </li>
        <li>
          <a class="footer__link" href="https://www.linkedin.com/in/shivam-tewari-9286b1171/"
          target="_blank" rel="noopener noreferrer"><img alt="linkedin-logo" src="./assets/images/linkedin.png"
          /></a>
        </li>
        <li>
          <a class="footer__link" href="https://twitter.com/ShiviPro"
          target="_blank" rel="noopener noreferrer"><img alt="twitter-logo" src="./assets/images/twitter.png"
          /></a>
        </li>
        <li>
          <a class="footer__link" href="https://shivamtewari.netlify.app/"
          target="_blank" rel="noopener noreferrer"><img alt="portfolio-logo" src="./assets/images/briefcase.png"
          /></a>
        </li>
      </ul>
      <p class="footer__copyright-info">©2021 | Shivam Tewari</p>
    </section>
  </footer>
`;

let formLink = document.querySelector("#form-link");

let heroText = document.querySelector("#hero-txt");

let partyPopperLeft = document.createElement("div");
partyPopperLeft.innerHTML = `
  <svg class="party-popper-left">
      <use xlink:href="#party-popper" />
  </svg>`;

let partyPopperRight = document.createElement("div");
partyPopperRight.innerHTML = `
  <svg class="party-popper-right">
      <use xlink:href="#party-popper" />
  </svg>`;

let congratDiv = document.createElement("div");
congratDiv.classList.add("congrats");
congratDiv.innerHTML = `
  <h1 class="congrats-text">Congratulations ! Your Birthday is Lucky.</h1>
  `;

let unluckyDiv = document.createElement("div");
unluckyDiv.classList.add("unlucky");
unluckyDiv.innerHTML = `
  <h1 class="unlucky-text">We're sorry to say that it's unlucky :(</h1>
    `;

formLink.addEventListener("click", (event) => {
  event.preventDefault();
  heroText.style.display = "none";
  contentDiv.appendChild(form);
  var resDiv = document.querySelector("#res");
  partyPopperLeft.remove();
  partyPopperRight.remove();
  congratDiv.remove();
  unluckyDiv.remove();

  let dob = document.querySelector("#dob__input");
  let luckyNo = document.querySelector("#lucky-num__input");
  let checkBtn = document.querySelector("#check-btn");

  dob.value = "";
  luckyNo.value = "";

  checkBtn.addEventListener("click", (event) => {
    partyPopperLeft.remove();
    partyPopperRight.remove();
    congratDiv.remove();
    unluckyDiv.remove();
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
      document.body.appendChild(partyPopperLeft);
      document.body.appendChild(partyPopperRight);
      if (document.querySelectorAll(".congrats").length === 0)
        resDiv.appendChild(congratDiv);
    } else {
      if (document.querySelectorAll(".unlucky").length === 0)
        resDiv.appendChild(unluckyDiv);
    }
  });
  let closeBtn = document.querySelector("#close-btn");

  closeBtn.addEventListener("click", (event) => {
    heroText.style.display = "block";
    form.remove();
    partyPopperLeft.remove();
    partyPopperRight.remove();
  });
});
