const css1 = document.createElement("img");
const html1 = document.createElement("img");
const js1 = document.createElement("img");
const css2 = document.createElement("img");
const html2 = document.createElement("img");
const js2 = document.createElement("img");

css1.src = "./images/css.png";
css2.src = "./images/css.png";
html1.src = "./images/html.png";
html2.src = "./images/html.png";
js1.src = "./images/js.png";
js2.src = "./images/js.png";
css1.value = "0";
css2.value = "0";
js1.value = "0";
js2.value = "0";
html1.value = "0";
html2.value = "0";

const card1 = document.createElement("img");
card1.src = "./images/card.jpg";
const card2 = document.createElement("img");
card2.src = "./images/card.jpg";
const card3 = document.createElement("img");
card3.src = "./images/card.jpg";
const card4 = document.createElement("img");
card4.src = "./images/card.jpg";
const card5 = document.createElement("img");
card5.src = "./images/card.jpg";
const card6 = document.createElement("img");
card6.src = "./images/card.jpg";

const div1 = document.getElementById("1");
const div2 = document.getElementById("2");
const div3 = document.getElementById("3");
const div4 = document.getElementById("4");
const div5 = document.getElementById("5");
const div6 = document.getElementById("6");

div1.appendChild(card1);
div2.appendChild(card2);
div3.appendChild(card3);
div4.appendChild(card4);
div5.appendChild(card5);
div6.appendChild(card6);

const start = document.getElementById("start");
start.addEventListener("click", () => { 
  const arr = [css1, css2, html1, html2, js2, js1];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    arr[i].value = Math.floor(Math.random() * 6) + 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i].value == arr[j].value) {
        count++;
      }
      if (count == 2) {
        arr[i].value = Math.floor(Math.random() * 6) + 1;
        j = -1;
        count = 0;
      }
    }
  }
});
