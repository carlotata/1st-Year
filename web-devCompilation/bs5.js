var userName = "";

function Start() {
    document.getElementById('button').hidden = true;
    document.getElementById('welcomeMessage').innerHTML = '<h3>INTERACTIVE S-QUIZ</h3>'
    askName();
}
function ansWrong(){
    document.getElementById('questions').innerHTML = '<button style="margin-top: 1rem;" class="btn btn-danger" onclick="question1()">TRY AGAIN</button>';
}

function askName() {
    document.getElementById('questions').innerHTML = '<h5>ENTER STUDENT NAME: </h5><input class="form-control" style="text-align: center;" id="answer"><button style="margin-top: 1rem;" class="btn btn-success" onclick="proceedToQuestion1()">PROCEED</button>';
}

function proceedToQuestion1() {
    var nameInput = document.getElementById('answer').value;
    var input = document.getElementById('answer');

    if (nameInput === "" || nameInput === null) {
        input.classList.add("is-invalid");
        document.getElementById('checker').innerHTML = '<br><p style="color: red;">Name is required!</p>';
    } 
    else {
        userName = nameInput;
        question1();
    }
}

function question1() {
    document.getElementById('checker').innerHTML = '';
    document.getElementById('questions').innerHTML = '<h5>WHAT IS 1+1?</h5><input class="form-control" style="text-align: center;" id="answer1"><button style="margin-top: 1rem;" class="btn btn-success" onclick="check1()">CHECK ANSWER</button>';
}

function check1() {
    var answer1 = document.getElementById("answer1").value;
    var input = document.querySelectorAll(".form-control");

    if (answer1 === "" || answer1 === null) {
        input.forEach(function (i) {
            i.classList.add("is-invalid");
        });
        document.getElementById('checker').innerHTML = '<br><p style="color: red;">Answer is required!</p>';
    } 
    else {
        input.forEach(function (i) {
            i.classList.remove("is-invalid");
        });
        if (answer1 == 2) {
            question2();
        } 
        else {
            input.forEach(function (i) {
                i.classList.add("is-invalid");
            });
            document.getElementById('checker').innerHTML = '<br><p style="color: red;">WRONG ANSWER!</p>';
            ansWrong();
        }
    }
}

function question2() {
    document.getElementById('checker').innerHTML = '';
    document.getElementById('questions').innerHTML = '<h5>WHAT IS 2+2?</h5><input class="form-control" style="text-align: center;" id="answer2"><button style="margin-top: 1rem;" class="btn btn-success" onclick="check2()">CHECK ANSWER</button>';
}

function check2() {
    var answer2 = document.getElementById('answer2').value;
    var input = document.querySelectorAll(".form-control");

    if (answer2 === "" || answer2 === null) {
        input.forEach(function (i) {
            i.classList.add("is-invalid");
        });
        document.getElementById('checker').innerHTML = '<br><p style="color: red;">Answer is required!</p>';
    } 
    else {
        input.forEach(function (i) {
            i.classList.remove("is-invalid");
        });
        if (answer2 == 4) {
            question3();
        } 
        else {
            input.forEach(function (i) {
                i.classList.add("is-invalid");
            });
            document.getElementById('checker').innerHTML = '<br><p style="color: red;">WRONG ANSWER!</p>';
            ansWrong();
        }
    }
}

function question3() {
    document.getElementById('checker').innerHTML = '';
    document.getElementById('questions').innerHTML = '<h5>WHAT IS 3+3?</h5><input class="form-control" style="text-align: center;" id="answer3"><button style="margin-top: 1rem;" class="btn btn-success" onclick="check3()">CHECK ANSWER</button>';
}

function check3() {
    var answer3 = document.getElementById('answer3').value;
    var input = document.querySelectorAll(".form-control");

    if (answer3 === "" || answer3 === null) {
        input.forEach(function (i) {
            i.classList.add("is-invalid");
        });
        document.getElementById('checker').innerHTML = '<br><p style="color: red;">Answer is required!</p>';
    } 
    else {
        input.forEach(function (i) {
            i.classList.remove("is-invalid");
        });
        if (answer3 == 6) {
            congratsMessage();
        } else {
            input.forEach(function (i) {
                i.classList.add("is-invalid");
            });
            document.getElementById('checker').innerHTML = '<br><p style="color: red;">WRONG ANSWER!</p>';
            ansWrong();
        }
    }
}

function congratsMessage() {
    document.getElementById('checker').innerHTML = '';
    document.getElementById("congratsMessage").innerHTML = `<h3 style="color: green;">CONGRATULATIONS <a style="color: red; font-style: bold;">${userName} !</a> YOU PASSED THE TEST!</h3><br><br><img style="border-radius: 2rem;" src="bs5.jpg" style="height: 200px; width:250px; margin-top: 1rem;">`;
}
