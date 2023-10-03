const generate = document.querySelector(".generate");
generate.onclick = function() {
  requestPalette();
  const rgb1 = color1num.innerHTML;
  color1.style.backgroundColor = `rgb(${rgb1})`;
  big_color1.style.backgroundColor = `rgb(${rgb1})`;
  const rgb2 = color2num.innerHTML;
  color2.style.backgroundColor = `rgb(${rgb2})`;
  big_color2.style.backgroundColor = `rgb(${rgb2})`;
  const rgb3 = color3num.innerHTML;
  color3.style.backgroundColor = `rgb(${rgb3})`;
  big_color3.style.backgroundColor = `rgb(${rgb3})`;
  const rgb4 = color4num.innerHTML;
  color4.style.backgroundColor = `rgb(${rgb4})`;
  big_color4.style.backgroundColor = `rgb(${rgb4})`;
  const rgb5 = color5num.innerHTML;
  color5.style.backgroundColor = `rgb(${rgb5})`;
  big_color5.style.backgroundColor = `rgb(${rgb5})`;
}

const color1num = document.querySelector(".color1num");
const color2num = document.querySelector(".color2num");
const color3num = document.querySelector(".color3num");
const color4num = document.querySelector(".color4num");
const color5num = document.querySelector(".color5num");

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");

const big_color1 = document.querySelector(".big_color1");
const big_color2 = document.querySelector(".big_color2");
const big_color3 = document.querySelector(".big_color3");
const big_color4 = document.querySelector(".big_color4");
const big_color5 = document.querySelector(".big_color5");

var url = "http://colormind.io/api/";
var data = {
  model: "default"
};

var http = new XMLHttpRequest();

function requestPalette() {
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var palette = JSON.parse(http.responseText).result;
      console.log(http.responseText);
      color1num.innerHTML = `${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]}`;
      color2num.innerHTML = `${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]}`;
      color3num.innerHTML = `${palette[2][0]}, ${palette[2][1]}, ${palette[2][2]}`;
      color4num.innerHTML = `${palette[3][0]}, ${palette[3][1]}, ${palette[3][2]}`;
      color5num.innerHTML = `${palette[4][0]}, ${palette[4][1]}, ${palette[4][2]}`;
    }
  };

  http.open("POST", url, true);
  http.send(JSON.stringify(data));
}

// make an initial request
requestPalette();