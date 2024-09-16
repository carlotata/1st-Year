function start(){
    document.getElementById('button').hidden = true
    document.getElementById('button').onclick = q1()
}
function q1(){
    document.getElementById('question').innerHTML = "<label for='answer'>1. WHAT IS THE CORRECT ANSWER:</label><br><input type='text' id='answer'><br><br><button onclick='correct1()'>CHECK ANSWER</button>"
}
function correct1(){
    var ans = document.getElementById('answer').value
    var answer = "hakdog"

    if (ans === answer) {
       document.getElementById('question').innerHTML = "<a style='color: green;'>CORRECT ANSWER</a><br><br><button onclick='q2()'>PROCEED</button>"
    } else {
        document.getElementById('question').innerHTML = "<a style='color: red;'>INCORRECT ANSWER! TRY AGAIN</a><br><br><button onclick='q1()'><--</button>"
    }
}
function q2(){
    document.getElementById('question').innerHTML = "<label for='answer'>2. WHAT IS THE CORRECT ANSWER:</label><br><input type='text' id='answer'><br><br><button onclick='correct2()'>CHECK ANSWER</button>"
}
function correct2(){
    var ans = document.getElementById('answer').value
    var answer = "chris"

    if (ans === answer) {
       document.getElementById('question').innerHTML = "<a style='color: green;'>CORRECT ANSWER</a><br><br><button onclick='q3()'>PROCEED</button>"
    } else {
       document.getElementById('question').innerHTML = "<a style='color: red;'>INCORRECT ANSWER! TRY AGAIN</a><br><br><button onclick='q2()'><--</button>"
    }
}
function q3(){
    document.getElementById('question').innerHTML = "<a style='color: green;'>CONGRATULATIONS! YOU PASSED THE TEST!</a><br><br><img width='150px' height='50px' src='http://i0.kym-cdn.com/photos/images/facebook/000/892/608/fb9.jpg'>"
}
