const id = 1;
const fullid = id.toString().padStart(6, 0);
const fullid2 = id.toString().padEnd(6, 0);
//console.log(fullid);
//console.log(fullid2);

const orderID = 1;
console.log(orderID);
const firstOrder = orderID.toString().padStart(4, 0);
console.log(firstOrder);

const secondOrder = parseInt(firstOrder.substring(firstOrder.length - 1)) + 1;
const secondOrderID = secondOrder.toString().padStart(4, 0);
console.log(secondOrderID);
