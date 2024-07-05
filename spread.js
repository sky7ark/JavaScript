function sum(a, b, ...params) {
  let sum = 0;
  console.log(params);
  params.forEach((num) => {
    sum = sum + num;
  });
  console.log(sum);
}

sum(1, 3, 34, 5, 4, 5, 6, 22, 34, 55, 4);

// object spreading

const myinfo = {
  name: "Salith",
  age: 27,
};
const myBetterHalf = {
  naam: "Mahima",
  boyosh: 20,
};

const together = {
  ...myinfo,
  ...myBetterHalf,
};

console.log(together);
