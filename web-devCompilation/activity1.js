function start(){
    document.getElementById('button').hidden=true
    document.getElementById('question').innerHTML = "THIS IS THE FIRST QUESTION<br> <button onclick='q1()'>1</button> <button onclick='wrong()'>2</button>"
}
function q0(){
    document.getElementById('question').innerHTML = "THIS IS THE FIRST QUESTION<br> <button onclick='q1()'>1</button> <button onclick='wrong()'>2</button>"
}

function wrong(){
    document.getElementById('question').innerHTML = "WRONG ANSWER<br> <button onclick='q0()'>try again</button>"
}
function q1(){
    document.getElementById('question').innerHTML = "THIS IS THE SECOND QUESTION <br> <button onclick='q2()'>1</button> <button onclick='wrong()'>2</button>"
}
function q2(){
    document.getElementById('question').innerHTML = "CLICK IMAGES YOU WANT <br> <img src='anime1.jpg' style='height: 100px;width: 100px;' onclick='q3()'> <img src='anime2.jpg' style='height: 100px;width: 100px;' onclick='wrong()'>"
}
function q3(){
    document.getElementById('question').innerHTML = "CONGRATS YOU PASSED THE TEST!"
    document.getElementById('question').style.color = 'green'
    document.getElementById('question').style.font = 'italic'
}
