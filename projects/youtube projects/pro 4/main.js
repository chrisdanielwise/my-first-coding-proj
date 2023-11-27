var mesg1 = document.querySelector('.message1');
var mesg2 = document.querySelector('.message2');
var mesg3 = document.querySelector('.message3');
var no_of_guesses = 0
var answer = Math.floor(Math.random()*100) + 1
var diff_guesses = []
console.log(answer)
const play = () =>{
    var guess = document.getElementById('guess').value
    if( guess < 1 || guess > 100){
        alert('please input number from 1 to 100')
    }
    else{
        diff_guesses.push(guess)
        no_of_guesses += 1
        if(guess < answer){
            mesg1.textContent = `Your guess is too low`
            mesg2.textContent = `No. of Guesses:  ${no_of_guesses}`
            mesg3.textContent = `Guessed Numbers are: ${diff_guesses}`
        }
         else if(guess > answer){
            mesg1.textContent = `Your guess is too high`
            mesg2.textContent = `No. of Guesses: ${no_of_guesses}`
            mesg3.textContent = `Guessed Numbers are: ${diff_guesses}`
        }
        else if(guess == answer){
            mesg1.textContent = `Corret!!`
            mesg2.textContent = `The answer is: ${answer}`
            mesg3.textContent = `You guessed it in: ${no_of_guesses} guesses`
            document.getElementById('my_btn').disabled = true;
        }
    }
}