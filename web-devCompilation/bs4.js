function Note(){
    let title1 = document.getElementById('title').value
    let note1 = document.getElementById('note').value
    let date1 = document.getElementById('date').value

    let notelist = `<div class="card mb-1"'><div class="card-body"><h4 class="card-title">${title1}</h4><hr><br><h6 class="card-subtitle mb-1">${note1}</h6><br><hr><p class="card-text">${date1}</p><button type="button" class="btn btn-danger" onclick="deleteNote(this)">DELETE</button></div></div>`;
    document.getElementById('noteList').innerHTML += notelist;
    
    document.getElementById('title').value = '';
    document.getElementById('note').value = '';
    document.getElementById('date').value = '';
}

function deleteNote(button){
    button.closest('.card').remove();
}

