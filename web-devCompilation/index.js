document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('flip-button').addEventListener('click', function() {
        document.querySelector('.flip-container').classList.toggle('flipped');
    });
});

function flip(){
    var button = document.getElementById('flip-button');
    if (button.innerText === 'BOOTSTRAP') {
        button.innerText = 'HTML/CSS/JS';
    } else {
        button.innerText = 'BOOTSTRAP';
    }
}
