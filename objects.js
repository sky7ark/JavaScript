const player = {
  name: "Salith",
  age: 25,
  address: "canada",
  "fav food": ["pizza, pasta"],
};

player.name = "jamy";
const changeadd = "address";
player[changeadd] = "america";

console.log(player["address"]);
