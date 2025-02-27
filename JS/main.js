// add button
const input = document.getElementById("input");
const button = document.querySelector("button");
const listContainer = document.createElement("ul");
document.body.appendChild(listContainer);

// add list to browser


button.addEventListener("click", () => {
  if( input.value.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = input.value;
    listContainer.appendChild(listItem);
    input.value = "";
  }
});


