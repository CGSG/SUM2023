const fs1 = require("fs");
const fs = require("fs").promises;

fs.readFile("a.txt", (data, err) => {
  console.log(data);
});

function f(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a + b == 0);
    }, 100);
  });
}

const val = f(30, 47);
setTimeout((v) => {
  debugger;
}, 1000);

val
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {});
// Promise

Promise.all([
  fs.readFile("a", "utf8"),
  fs.readFile("b", "utf8"),
  fs.readFile("c", "utf8"),
])
  .then((res) => {
    res.forEach((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });
