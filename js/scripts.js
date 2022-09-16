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
card1.classList.add("domy1");
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
const arr = [css1, css2, html1, html2, js2, js1];
const arr1 = [];
const start = document.getElementById("start");
start.addEventListener("click", () => {
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

  div1.addEventListener("click", () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value == div1.id) {
        div1.removeChild(div1.firstChild);
        arr1.push(arr[i]);
        div1.appendChild(arr[i]);
        break;
      }
    }
  });
  div2.addEventListener("click", () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value == div2.id) {
        div2.removeChild(div2.firstChild);
        arr1.push(arr[i]);
        div2.appendChild(arr[i]);
        break;
      }
    }
  });
  div3.addEventListener("click", () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value == div3.id) {
        div3.removeChild(div3.firstChild);
        arr1.push(arr[i]);
        div3.appendChild(arr[i]);
        break;
      }
    }
  });
  div4.addEventListener("click", () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value == div4.id) {
        div4.removeChild(div4.firstChild);
        arr1.push(arr[i]);
        div4.appendChild(arr[i]);
        break;
      }
    }
  });
  div5.addEventListener("click", () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value == div5.id) {
        div5.removeChild(div5.firstChild);
        arr1.push(arr[i]);
        div5.appendChild(arr[i]);
        break;
      }
    }
  });
  div6.addEventListener("click", () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value == div6.id) {
        div6.removeChild(div6.firstChild);
        arr1.push(arr[i]);
        div6.appendChild(arr[i]);
        break;
      }
    }
  });
});
const counter = document.getElementById("game-screen");
counter.addEventListener("click", () => {
  console.log("**");
  if (arr1.length == 2) {
    if (arr1[0].src == arr1[1].src) {
    } else {
      console.log("hi");
      arr1.pop;
      arr1.pop;

      div1.removeChild(div1.firstChild);
      div2.removeChild(div2.firstChild);
      div3.removeChild(div3.firstChild);
      div4.removeChild(div4.firstChild);
      div5.removeChild(div5.firstChild);
      div6.removeChild(div6.firstChild);
    }
  }

  if (arr1.length == 4) {
    if (arr1[2].src == arr1[3].src) {
    } else {
      arr1.pop;
      arr1.pop;
      arr1.pop;
      arr1.pop;
      div1.removeChild(div1.firstChild);
      div2.removeChild(div2.firstChild);
      div3.removeChild(div3.firstChild);
      div4.removeChild(div4.firstChild);
      div5.removeChild(div5.firstChild);
      div6.removeChild(div6.firstChild);
    }
  }
  if (arr1.length == 6) {
    if (arr1[4].src == arr1[5].src) {
    } else {
      arr1.pop;
      arr1.pop;
      arr1.pop;
      arr1.pop;
      arr1.pop;
      arr1.pop;
      div1.removeChild(div1.firstChild);
      div2.removeChild(div2.firstChild);
      div3.removeChild(div3.firstChild);
      div4.removeChild(div4.firstChild);
      div5.removeChild(div5.firstChild);
      div6.removeChild(div6.firstChild);
    }
  }
});
const restart = document.getElementById("rest");
restart.addEventListener("click", () => {
  for(let i=0;i<arr1.length;i++){
    arr1.pop
  }
  div1.appendChild(card1);
  div2.appendChild(card2);
  div3.appendChild(card3);
  div4.appendChild(card4);
  div5.appendChild(card5);
  div6.appendChild(card6);
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
