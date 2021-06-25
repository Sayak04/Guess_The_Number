"use strict"
let global_number;

let score = 10;
let highest = 0;

function generate_random_number() {
    let generated_number = Math.trunc(Math.random() * 10) + 1;
    console.log(generated_number);
    global_number = generated_number;
}
function generate_random_number_while_click() {
    document.getElementById('one-liner').style.display = 'none';
    document.getElementById('section_Zero').style.display = 'none';
    document.getElementById('button-div').style.display = 'none';
    document.getElementById('processing').style.display = 'block';
    document.getElementById('full-page').style.display = 'none';

    setTimeout(() => {
        generate_random_number();
        document.getElementById('one-liner').style.display = 'block';
        document.getElementById('section_Zero').style.display = 'block';
        document.getElementById('button-div').style.display = 'none';
        document.getElementById('processing').style.display = 'none';
        document.getElementById('full-page').style.display = 'block';
        document.getElementById('btn-normal').style.display = 'block';
    }, 1350);

}

function playAgainRestore() {
    generate_random_number_while_click();
    document.body.style.backgroundColor = "#fff";
    score = 10;
    document.querySelector('.score').textContent = `Score:- ${score}`;
    document.getElementById('message_after_correct').style.display = 'none';
    document.getElementById('message_after_wrong').style.display = 'none';
    document.getElementById('entered_number').value = "";
    document.getElementById('btn-normal').style.display = "block";
    document.getElementById('btn-playagain').style.display = "none";
}

function check_number_correct_or_wrong() {
    let number = document.querySelector('#entered_number').value
    if (number == global_number) {
        // alert("Hell Yeah! You've got that in you!");
        if (score > highest) {
            highest = score;
            document.querySelector('.highscore').textContent = `Highest:- ${highest}`;
            document.querySelector('.score').textContent = `Score:- ${score}`;
        }
        document.getElementById('one-liner').style.display = 'block';
        document.getElementById('button-div').style.display = 'none';
        document.getElementById('full-page').style.display = 'block';
        document.body.style.backgroundColor = "rgb(191, 255, 0)";
        document.getElementById('message_after_correct').style.display = 'block';
        document.getElementById('message_after_wrong').style.display = 'none';
        document.getElementById('btn-normal').style.display = "none";
        document.getElementById('btn-playagain').style.display = "block";
        document.getElementById('onlyafterwin').style.display = 'block';
    } else {
        score--;
        document.querySelector('.score').textContent = `Score:- ${score}`;
        document.getElementById('one-liner').style.display = 'block';
        document.getElementById('button-div').style.display = 'none';
        document.getElementById('full-page').style.display = 'block';
        document.body.style.backgroundColor = "	rgb(255, 77, 77)";
        document.getElementById('message_after_correct').style.display = 'none';
        document.getElementById('message_after_wrong').style.display = 'block';
    }
}

