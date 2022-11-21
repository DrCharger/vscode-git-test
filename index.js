document.getElementById;
document.getElementsByName;

// 1. float
// 2.iframe
// 3. not use of arrow functions

let arr = [1, 10, 2, 3, 4, 5, 10, 7];

const obj = {
  a: 1,
  b: 10,
  c: {
    c1: "m",
    c2: "e",
    c3: "f",
    c4: "md",
    c5: "mf",
  },
  getDate() {
    console.log(this.a + this.c.c2);
  },
};

const newObj = () => obj.getDate();

newObj();

class User {
  constructor(name) {
    this.name = name;
  }
}

let arrss = [0, 1, 2, 3, 4, 5];

console.log(arrss.filter((el) => el % 2));

throw