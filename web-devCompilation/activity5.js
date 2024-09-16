function calculate(){

    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value

    let bmi = weight / (height * height)

    let result = document.getElementById('result').innerHTML = bmi
    /*if (result < 20){
        document.getElementById('message').innerHTML = "NORMAL KA BA?";
    }
    else{
        document.getElementById('message').innerHTML = "DI KA NORMAL NO?";
    }*/
}

function reset() {

    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
    
    //document.getElementById('message').innerHTML = '';
    document.getElementById("result").innerHTML = "";
}