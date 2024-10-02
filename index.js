let PayBtn = document.querySelector("#PayBtn");

let radioBtn = document.querySelector("#radioBtn");

let pevBalance = document.querySelector("#pevBalance");

let amountDesposit = document.querySelector("#amountDesposit");

let currentBalance = document.querySelector("#currentBalance");

let userName = document.querySelector("#userName");
let accountNumber = document.querySelector("#accountNumber");
let telephone = document.querySelector("#telephone");

let display = document.querySelector(".form");
let container = document.querySelector(".container");
let btn = document.createElement("button");
let final = PayBtn.addEventListener("click", displaying);

function displaying() {
  calculation();
  display.style.margin = "auto";
  display.style.display = "flex";
  display.style.width = "90%";
  display.style.flexDirection = "column";
  display.style.alignItems = "center";
  display.style.justifyContent = "center";
  display.style.boxShadow = " 0 0 6px black";
  display.style.padding = " 0.12rem";
  display.style.backgroundColor = "white";
  display.style.color = "#250250";
  display.style.fontSize = "22px";

  container.style.display = "none";
  btn.style.margin = "5px";
  btn.style.backgroundColor = "#122b37cd";
  btn.style.color = "#250250";
  btn.innerHTML = "Back";
  btn.style.display = "flex";
  btn.style.flexDirection = "column";
  btn.style.justifyContent = "center";
  btn.style.alignItems = "center";

  display.append(btn);

  let AccName = document.querySelector("#accName").value;
  let accNum = document.querySelector("#accNum").value;
  let phNumber = document.querySelector("#phNumber").value;

  accNum = String(accNum);
  phNumber = String(phNumber);

  userName.textContent = `Account Name: ${AccName}`;

  /*accountNumber.textContent = `Account number: ${accNum}`;
  telephone.textContent = `Account number: ${phNumber}`;*/
}

function calculation() {
  if (radioBtn.checked) {
    let amount = document.querySelector("#amount").value;

    amount = Number(amount);

    let balance = 2;
    balance += amount;
    console.log(balance);

    currentBalance.textContent = "Your current balance : " + balance + ".00";
  }
}
