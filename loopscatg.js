//we use for of loop for array
const names = ["aa", "bb", "cc", "dd", ""];
for (let name of names) {
  console.log(name);
}

// we use for in loop for objects

const info = {
  name: "Salith",
  age: 27,
  address: "Canada",
};

for (let key in info) {
  console.log(info[key]);
}
