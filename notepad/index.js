const notes = [];
let title = document.getElementById("title");
let note = document.getElementById("note");
let date = document.getElementById("date");
let notify = document.getElementById("outputDisplay");
let input = [title, note, date];

function addNote() {
  if (
    title.value === "" ||
    note.value === "" ||
    new Date(date.value) <= new Date()
  ) {
    input.forEach(function (i) {
      if (
        i.value === "" ||
        (i === date && new Date(date.value) <= new Date())
      ) {
        i.classList.add("is-invalid");
      }
    });
    return;
  } else {
    input.forEach(function (i) {
      i.classList.remove("is-invalid");
    });

    const noteId = "note-" + Date.now();
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

    document
      .getElementById("noteList")
      .insertAdjacentHTML("beforeend", notelist);

    notes.push({ id: noteId, expirationTime: new Date(date.value) });
  }
  clearNote()
}
function clearNote() {
  title.value = "";
  note.value = "";
  date.value = "";
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
  var sound = new Howl({
    src: ["alarm.mp3"],
    volume: 0.2,
    onplay: function () {
      setTimeout(function () {
        sound.stop();
      }, 2500);
    },
  });

  notes.forEach((note) => {
    if (note.expirationTime <= currentDate) {
      sound.play();
      swal({
        title: "TIME'S UP!",
        text: "DO WHAT YOU HAVE TO DO!",
        icon: "warning",
        buttons: true,
      }).then((willDelete) => {
        if (willDelete) {
          sound.stop();
          deleteNote(note.id);
        }
      });

      document.getElementById(note.id).style.backgroundColor = "lightcoral";
    }
  });
}

// Set an interval to check notes every second
setInterval(checkNotes, 1000);
