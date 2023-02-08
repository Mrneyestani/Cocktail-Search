import { displaySearchBar } from "./splash";

// Attache un évenement lors du clique sur le splash !
document
  .querySelector(".splash-container")
  .addEventListener("click", displaySearchBar);
