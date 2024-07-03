let price = 1100;
const isLeader = false;

// if (isLeader === true) {
//   if (price > 1000) {
//     price = price / 2;
//     console.log(price);
//   } else {
//     console.log((price = 0));
//   }
// } else {
//   price = price + 1000;
//   console.log(price);
// }
//----------------------------------------//
// ternary operator
price =
  isLeader === true
    ? price > 1000
      ? console.log(price / 2)
      : console.log(0)
    : console.log(price + 100);
