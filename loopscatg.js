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

//for each for arrays

const namess = ["aa", "bb", "cc", "dd", ""];
namess.forEach((value) => console.log(value));

//using map creating object
const naam = ["aa", "bb", "cc", "dd", ""];
const namelist = naam.map((value) => {
  return {
    name: value.substring(0, 1),
    age: 25,
  };
});

console.log(namelist);
