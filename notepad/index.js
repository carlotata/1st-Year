function Note() {
    let title = document.getElementById("title");
    let note = document.getElementById("note");
    let date = document.getElementById("date");
    let input = [title, note]; // Inputs to validate

    // Check if both the title and note have values
    if (title.value === "" || note.value === "") {
        // Add 'is-invalid' class to the empty input fields
        input.forEach(function (i) {
            if (i.value === "") {
                i.classList.add("is-invalid");
            }
        });
    } else {
        // Remove 'is-invalid' class if the inputs are valid
        input.forEach(function (i) {
            i.classList.remove("is-invalid");
        });

        // Create the note card and append it to the note list
        let notelist = `
            <div class="card mb-1">
                <div class="card-body">
                    <h2 class="card-title">${title.value}</h2>
                    <hr><br>
                    <h6 class="card-subtitle mb-1 text-start">${note.value}</h6>
                    <br><hr>
                    <p class="card-text">${date.value}</p>
                    <button type="button" class="btn btn-danger" onclick="deleteNote(this)">DELETE</button>
                </div>
            </div>
        `;
        document.getElementById("noteList").innerHTML += notelist;

        // Clear the input fields
        document.getElementById("title").value = "";
        document.getElementById("note").value = "";
        document.getElementById("date").value = "";
    }
}

// Function to delete a note
function deleteNote(button) {
    button.closest(".card").remove();
}
