import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
let dogs = [
  {
    id: 1,
    name: "Whiskey",
    age: 1,
    str1: "Amet quia repellat asperiores repellat!",
    img: whiskey,
  },
  {
    id: 2,
    name: "hazel",
    age: 2,
    str1: "Amet quia repellat asperiores repellat!",
    img: hazel,
  },
  {
    id: 3,
    name: "tubby",
    age: 3,
    str1: "Amet quia repellat asperiores repellat!",
    img: tubby,
  },
];

export function getDogs() {
  return dogs;
}

export function getDog(name) {
  return dogs.find((dog) => dog.name === name);
}
