// Array to keep track of notes with their expiration times
const notes = [];

// Function to add a new note
function addNote() {
    let title = document.getElementById("title");
    let note = document.getElementById("note");
    let date = document.getElementById("date");
    let input = [title, note, date]; // Inputs to validate

    // Check if all inputs have values
    if (title.value === "" || note.value === "" || date.value === "") {
        // Add 'is-invalid' class to empty input fields
        input.forEach(function (i) {
            if (i.value === "") {
                i.classList.add("is-invalid");
            }
        });
        return; // Exit function if validation fails
    } else {
        // Remove 'is-invalid' class if the inputs are valid
        input.forEach(function (i) {
            i.classList.remove("is-invalid");
        });

        // Create a unique ID for each note
        const noteId = "note-" + Date.now(); // Unique ID based on current timestamp

        // Create the note card and append it to the note list
        let notelist = `
            <div id="${noteId}" class="card mb-1">
                <div class="card-body">
                    <h2 class="card-title">${title.value}</h2>
                    <hr><br>
                    <h6 class="card-subtitle mb-1 text-start">${note.value}</h6>
                    <br><hr>
                    <p class="card-text">${date.value}</p>
                    <button type="button" class="btn btn-danger" onclick="deleteNote('${noteId}')">DELETE</button>
                </div>
            </div>
        `;

        // Append the new note to the existing list
        document
            .getElementById("noteList")
            .insertAdjacentHTML("beforeend", notelist);

        // Add note to the notes array with its expiration time
        notes.push({ id: noteId, expirationTime: new Date(date.value) });

        // Clear the input fields
        title.value = "";
        note.value = "";
        date.value = "";
    }
}

// Function to delete a note
function deleteNote(noteId) {
    let note = document.getElementById(noteId);
    if (note) {
        note.remove();
        // Remove note from the notes array
        const index = notes.findIndex((n) => n.id === noteId);
        if (index !== -1) {
            notes.splice(index, 1);
        }
    }
}

// Function to periodically check if any note's time is up
function checkNotes() {
    const currentDate = new Date(); // Get the current date and time

    notes.forEach((note) => {
        if (note.expirationTime <= currentDate) {
            alert("TIME'S UP!");
            deleteNote(note.id); // Remove the note if the time is up
        }
    });
}

// Set an interval to check notes every second
setInterval(checkNotes, 1000);
