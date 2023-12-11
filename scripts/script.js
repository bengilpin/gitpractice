const input = document.getElementById("notes");

input.addEventListener("keydown", function (event) {
    console.log("key pressed:", event.key);
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    const noteValue = input.value;
    updateNotes(noteValue);
    input.value = "";
  }
});

function updateNotes(notes) {
  const myNotesContainer = document.querySelector(".container__notes");
  const noteContainer = document.createElement("div");
  noteContainer.classList.add("container__notes__test");
  myNotesContainer.appendChild(noteContainer);
  const textBody = document.createElement("p");
  textBody.innerText = notes;
  noteContainer.appendChild(textBody);
}
