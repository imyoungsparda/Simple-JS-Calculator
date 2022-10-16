let btnList = document.querySelectorAll(".btn");
let txtArea = document.querySelector("input");
let str = "";

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") str = eval(str);
  else if (e.key === "Backspace") {
    str = "";
  } else {
    str += e.key;
  }
  txtArea.value = str;
});

btnList.forEach(function (i) {
  i.addEventListener("click", function () {
    if (i.innerText === "=") {
      str = eval(str);
    } else if (i.innerText === "AC") {
      str = "";
    } else if (i.innerHTML === "%") {
      str /= 100;
    } else {
      str += i.value;
    }
    txtArea.value = str;
  });
});
