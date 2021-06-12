"use strict"
let global_number;

function generate_random_number() {
    let generated_number = Math.trunc(Math.random() * 10) + 1;
    console.log(generated_number);
    global_number = generated_number;
}
function generate_random_number_while_click() {
    generate_random_number();
    document.getElementById('button-div').style.display = 'none';
    document.getElementById('full-page').style.display = 'block';
}

function check_number_correct_or_wrong() {
    let number = document.querySelector('#entered_number').value
    if (number == global_number) {
        // alert("Hell Yeah! You've got that in you!");
        document.getElementById('one-liner').style.display = 'none';
        document.getElementById('button-div').style.display = 'none';
        document.getElementById('full-page').style.display = 'block';
        document.body.style.backgroundColor = "rgb(128, 255, 0)"
        document.getElementById('message_after_correct').style.display = 'block';
    } else {
        document.getElementById('one-liner').style.display = 'none';
        document.getElementById('button-div').style.display = 'none';
        document.getElementById('full-page').style.display = 'block';
        document.body.style.backgroundColor = "rgb(235, 71, 51)"
        document.getElementById('message_after_wrong').style.display = 'block';
    }
}