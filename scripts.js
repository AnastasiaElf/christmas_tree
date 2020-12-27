const navigation = document.getElementById("navigation");
const content = document.getElementById("content");
const classicItems = document.getElementById("classic-tree-items");
const fruitItems = document.getElementById("fruit-tree-items");
const worldItems = document.getElementById("world-tree-items");
const tree = document.getElementById("tree");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("classic")) {
  navigation.classList.add("hidden");
  content.classList.remove("hidden");
  classicItems.classList.remove("hidden");
  tree.classList.add("classic");
} else if (urlParams.has("fruit")) {
  navigation.classList.add("hidden");
  content.classList.remove("hidden");
  fruitItems.classList.remove("hidden");
  tree.classList.add("fruit");
} else if (urlParams.has("world")) {
  navigation.classList.add("hidden");
  content.classList.remove("hidden");
  worldItems.classList.remove("hidden");
  tree.classList.add("world");
}
