const subject = "chemistry";
const book = "CHemistry";

if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("right");
} else {
  console.log("wrong");
}

const a = "    water";
const b = " water  ";

if (a.trim() === b.trim()) {
  console.log("water");
} else {
  console.log("nonwater");
}

const sentence = "i am learning JavaScript";

const reversed = sentence.split("").reverse().join("");
console.log(reversed);
