const input = document.getElementById("input");
const button = document.querySelector("button");
const listContainer = document.getElementById("add-list"); // Select the div where we want to add items

button.addEventListener("click", () => {
  if (input.value.trim() !== "") { // Prevent empty input
    const listItem = document.createElement("p"); // Create a paragraph element for the item
    listItem.textContent = input.value; // Set the text to the input value
    listItem.classList.add("p-2", "bg-white", "rounded", "shadow-md", "m-2"); // Add Tailwind styling
    listContainer.appendChild(listItem); // Append item inside the div
    input.value = ""; // Clear input field
  }
});



