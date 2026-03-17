const body = document.body

const display = document.createElement("div")
display.className = "display";

const screen = document.createElement("h1")
screen.innerText = "0";

display.appendChild(screen)
body.appendChild(display)

const buttons = document.createElement("div")
buttons.className = "buttons";

// left button
const leftButton = document.createElement("div")
leftButton.className = "left-button";

const leftItems = [
  "Deg | Rad",
  "x!",
  "Inv",
  "sin",
  "ln",
  "π",
  "cos",
  "log",
  "e",
  "tan",
  "√",
  "Ans",
  "EXP",
  "x^y",
];

for (let i = 0; i < leftItems.length; i++) {
  const btn = document.createElement("button")


  if (i === 0) {
    btn.className = "item";
  } else {
    btn.className = "item1";
  }

  btn.innerText = leftItems[i]
  leftButton.appendChild(btn);
}

// right button

const rightButton = document.createElement("div");
rightButton.className = "right-button";

const rightItems = [
  "(",
  " )",
  "%",
  "AC",
  "7",
  "8",
  "9",
  "÷",
  "4",
  "5",
  "6",
  "x",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
]

for (let i = 0; i < rightItems.length; i++) {
  const btn = document.createElement("button");
  btn.className = "item2";
  btn.innerText = rightItems[i];

  rightButton.appendChild(btn);
}

buttons.append(leftButton, rightButton);
body.appendChild(buttons);
