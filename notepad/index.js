const notes = [];

function addNote() {
    let title = document.getElementById("title");
    let note = document.getElementById("note");
    let date = document.getElementById("date");
    let input = [title, note, date];

    // Check if all inputs have values
    if (title.value === "" || note.value === "") {
        input.forEach(function (i) {
            if (i.value === "") {
                i.classList.add("is-invalid");
            }
        });
        return;
    } else {
        // Remove 'is-invalid' class if the inputs are valid
        input.forEach(function (i) {
            i.classList.remove("is-invalid");
        });

        const noteId = "note-" + Date.now();

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

        notes.push({ id: noteId, expirationTime: new Date(date.value) });

        title.value = "";
        note.value = "";
        date.value = "";
    }
}

function deleteNote(noteId) {
    let note = document.getElementById(noteId);
    if (note) {
        note.remove();

        const index = notes.findIndex((n) => n.id === noteId);
        if (index !== -1) {
            notes.splice(index, 1);
        }
    }
}

function checkNotes() {
    const currentDate = new Date();

    notes.forEach((note) => {
        if (note.expirationTime <= currentDate) {
            swal("TIME'S UP!", "DO WHAT YOU HAVE TO DO!", "warning");
            deleteNote(note.id); // Remove the note if the time is up
        }
    });
}

// Set an interval to check notes every second
setInterval(checkNotes, 1000);