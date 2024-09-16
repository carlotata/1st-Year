function start(){
    var date = new Date();

    let h = String(date.getHours()).padStart(2, '0');
    let m = String(date.getMinutes()).padStart(2, '0');
    let s = String(date.getSeconds()).padStart(2, '0');

    var time = `${h}:${m}:${s}`;

    document.getElementById('clock').textContent = time;
    if(s == 1 || s == 31){
        document.getElementById('alert').innerHTML = "TIME'S UP!"
        stopa;
    }
}
let stopa = setTimeout(start, 1000);
let clear = setInterval(start, 1000);
start();
