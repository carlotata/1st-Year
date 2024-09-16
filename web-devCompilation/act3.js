function message() {
    var name = document.getElementById("name").value;
    document.getElementById('names').hidden = true;
    var message = document.getElementById("message");

    if (name) {
        message.innerHTML = `<p>Welcome Mr/Mrs <a style='color: green;'>${name}</a></p>`;
    } else {
       alert("INPUT A NAME!")
    }
}
