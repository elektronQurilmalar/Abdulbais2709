function reset() {
  var counter = 0;
  document.getElementById("input").innerHTML = 0;
}
function plusMinus() {
  var counter = parseInt(document.getElementById("input").innerHTML, 10);
  var val = (document.getElementById("input").innerHTML = counter * -1);
}
function plus() {
  var counter = parseInt(document.getElementById("input").innerHTML, 10),
    obj = document.getElementById("input"),
    val_1;
  val_1 = counter;
  obj.innerHTML = 0;
  counter = parseInt(document.getElementById("input").innerHTML, 10);
  val_1 += counter;
  obj.innerHTML = val_1;
}
function zero() {
  var counter = parseInt(document.getElementById("input").innerHTML, 10),
    obj = document.getElementById("input"),
    val;
  val = obj.innerHTML = counter * 10;
}
function one() {
  var counter = parseInt(document.getElementById("input").innerHTML, 10),
    obj = document.getElementById("input"),
    val;
  if (counter >= 0) {
    val = obj.innerHTML = counter * 10 + 1;
  } else {
    val = obj.innerHTML = counter * 10 - 1;
  }
}
function two() {
  var counter = parseInt(document.getElementById("input").innerHTML, 10),
    obj = document.getElementById("input"),
    val;
  if (counter >= 0) {
    val = obj.innerHTML = counter * 10 + 2;
  } else {
    val = obj.innerHTML = counter * 10 - 2;
  }
}
function three() {
  var counter = parseInt(document.getElementById("input").innerHTML, 10),
    obj = document.getElementById("input"),
    val;
  if (counter >= 0) {
    val = obj.innerHTML = counter * 10 + 3;
  } else {
    val = obj.innerHTML = counter * 10 - 3;
  }
}
function four() {
  var counter = parseInt(document.getElementById("input").innerHTML, 10),
    obj = document.getElementById("input"),
    val;
  if (counter >= 0) {
    val = obj.innerHTML = counter * 10 + 4;
  } else {
    val = obj.innerHTML = counter * 10 - 4;
  }
}
function five() {
  var counter = parseInt(document.getElementById("input").innerHTML, 10),
    obj = document.getElementById("input"),
    val;
  if (counter >= 0) {
    val = obj.innerHTML = counter * 10 + 5;
  } else {
    val = obj.innerHTML = counter * 10 - 5;
  }
}
function six() {
  var counter = parseInt(document.getElementById("input").innerHTML, 10),
    obj = document.getElementById("input"),
    val;
  if (counter >= 0) {
    val = obj.innerHTML = counter * 10 + 6;
  } else {
    val = obj.innerHTML = counter * 10 - 6;
  }
}
function seven() {
  var counter = parseInt(document.getElementById("input").innerHTML, 10),
    obj = document.getElementById("input"),
    val;
  if (counter >= 0) {
    val = obj.innerHTML = counter * 10 + 7;
  } else {
    val = obj.innerHTML = counter * 10 - 7;
  }
}
function eight() {
  var counter = parseInt(document.getElementById("input").innerHTML, 10),
    obj = document.getElementById("input"),
    val;
  if (counter >= 0) {
    val = obj.innerHTML = counter * 10 + 8;
  } else {
    val = obj.innerHTML = counter * 10 - 8;
  }
}
function nine() {
  var counter = parseInt(document.getElementById("input").innerHTML, 10),
    obj = document.getElementById("input"),
    val;
  if (counter >= 0) {
    val = obj.innerHTML = counter * 10 + 9;
  } else {
    val = obj.innerHTML = counter * 10 - 9;
  }
}
