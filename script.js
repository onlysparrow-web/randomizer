var ran = document.getElementById("random");
var image = document.getElementById("image");
image.setAttribute("style", "width: 150px;position: relative;");
function randomizer(data) {
  var primary = document.createElement("span");
  primary.innerText = data;
  console.log("creating1");
  return primary;
}
var firstelement = randomizer("R");
var secondelement = randomizer("O");
var thirdelement = randomizer("P");
var fourthelement = randomizer("E");
var fifthelement = randomizer("S");
var arr = [];

firstelement.value = Math.floor(Math.random() * 10);
secondelement.value = Math.floor(Math.random() * 10);
thirdelement.value = Math.floor(Math.random() * 10);
fourthelement.value = Math.floor(Math.random() * 10);
fifthelement.value = Math.floor(Math.random() * 10);

console.log(firstelement.value);
console.log(secondelement.value);
var selector = document.querySelectorAll("value");
console.log(selector);

for (i = 0; i <= 9; i++) {
  if (i == firstelement.value) {
    arr.push(firstelement.innerText);
  }
  if (i == secondelement.value) {
    arr.push(secondelement.innerText);
  }

  if (i == thirdelement.value) {
    arr.push(thirdelement.innerText);
  }

  if (i == fourthelement.value) {
    arr.push(fourthelement.innerText);
  }

  if (i == fifthelement.value) {
    arr.push(fifthelement.innerText);
  }
}
console.log(arr);

var zero = arr[0];
var s0 = document.createElement("span");
s0.setAttribute("class", "spans");
s0.append(zero);
var one = arr[1];
var s1 = document.createElement("span");
s1.setAttribute("class", "spans");
s1.append(one);
var two = arr[2];
var s2 = document.createElement("span");
s2.setAttribute("class", "spans");
s2.append(two);
var three = arr[3];
var s3 = document.createElement("span");
s3.setAttribute("class", "spans");
s3.append(three);
var four = arr[4];
var s4 = document.createElement("span");
s4.setAttribute("class", "spans");
s4.append(four);

ran.append(s0);
ran.append(s1);
ran.append(s2);
ran.append(s3);
ran.append(s4);
s0.setAttribute("style", "position: absolute;top: 73px;left: 34px;");
s1.setAttribute("style", " position: absolute;top: 73px;left: 126px;");
s2.setAttribute("style", "     position: absolute;top: 37px;left: 51px;");
s3.setAttribute("style", "     position: absolute;top: 113px;left: 78px;");
s4.setAttribute("style", " position: absolute;top: 35px;left: 98px;");

var shufflebtn = document.createElement("button");
shufflebtn.innerText = "shuffle";
ran.append(shufflebtn);
var allspans = document.querySelectorAll(".spans");
console.log(allspans);

shufflebtn.addEventListener("click", shuffling);
// allspans.forEach(dot);
// var removing;
// function dot (dots){
//   removing=dots;
//   removing.remove();
// }

function shuffling() {
  allspans.forEach(dot);
  function dot(dots) {
    console.log(dots);
    dots.remove();
    console.log("removing");
  }
  console.log(allspans);

  function randomizer(data) {
    var primary = document.createElement("p");
    primary.innerText = data;
    console.log("creating2");
    return primary;
  }
  var firstelement = randomizer("R");
  var secondelement = randomizer("O");
  var thirdelement = randomizer("P");
  var fourthelement = randomizer("E");
  var fifthelement = randomizer("S");
  var arr = [];

  firstelement.value = Math.floor(Math.random() * 10);
  secondelement.value = Math.floor(Math.random() * 10);
  thirdelement.value = Math.floor(Math.random() * 10);
  fourthelement.value = Math.floor(Math.random() * 10);
  fifthelement.value = Math.floor(Math.random() * 10);

  console.log(firstelement.value);
  console.log(secondelement.value);
  var selector = document.querySelectorAll("value");
  console.log(selector);

  for (i = 0; i <= 9; i++) {
    if (i == firstelement.value) {
      arr.push(firstelement.innerText);
    }
    if (i == secondelement.value) {
      arr.push(secondelement.innerText);
    }

    if (i == thirdelement.value) {
      arr.push(thirdelement.innerText);
    }

    if (i == fourthelement.value) {
      arr.push(fourthelement.innerText);
    }

    if (i == fifthelement.value) {
      arr.push(fifthelement.innerText);
    }
  }
  console.log(arr);

  var zero = arr[0];
  var s0 = document.createElement("span");
  s0.setAttribute("class", "spans");
  s0.append(zero);
  var one = arr[1];
  var s1 = document.createElement("span");
  s1.setAttribute("class", "spans");
  s1.append(one);
  var two = arr[2];
  var s2 = document.createElement("span");
  s2.setAttribute("class", "spans");
  s2.append(two);
  var three = arr[3];
  var s3 = document.createElement("span");
  s3.setAttribute("class", "spans");
  s3.append(three);
  var four = arr[4];
  var s4 = document.createElement("span");
  s4.setAttribute("class", "spans");
  s4.append(four);

  ran.append(s0);
  ran.append(s1);
  ran.append(s2);
  ran.append(s3);
  ran.append(s4);
  s0.setAttribute("style", "position: absolute;top: 73px;left: 34px;");
  s1.setAttribute("style", "position: absolute;top: 73px;left: 126px;");
  s2.setAttribute("style", "position: absolute;top: 37px;left: 51px;");
  s3.setAttribute("style", "position: absolute;top: 113px;left: 78px;");
  s4.setAttribute("style", " position: absolute;top: 35px;left: 98px;");
}

// var ran = document.getElementById("random");
// function randomizer(data, numbers) {
//   var primary = document.createElement("p");
//   primary.innerText = data;
//   primary.setAttribute("value", numbers);
//   primary.setAttribute("class", "values");

//   return primary;
// }
// var firstelement = randomizer(1, Math.floor(Math.random() * 10));
// var secondelement = randomizer(2, Math.floor(Math.random() * 10));
// var thirdelement = randomizer(3, Math.floor(Math.random() * 10));
// var fourthelement = randomizer(4, Math.floor(Math.random() * 10));
// var fifthelement = randomizer(5, Math.floor(Math.random() * 10));

// ran.append(firstelement);
// ran.append(secondelement);
// ran.append(thirdelement);
// ran.append(fourthelement);
// ran.append(fifthelement);
// console.log(firstelement.value);
