var global= 1;
document.addEventListener('DOMContentLoaded', myLoaded, clickButton);
//Preconditions: 1. User name is a string, and must be supplied; 2. Numbers should be real numbers whether -ve or +ve but have allowed for 2 decimals; 

//Postconditions:
//1: (welcome): A welcome alert is on the console; 
//2: (name): Response to prompt will be the users name, and if no name supplied will be prompted again
//3. (Welcome2): web browser window is open with hover features on Enter button; 
//4. (1st number): num1 is the users response to prompt to provide first number; 
//5. (2nd number): num2 is users response to prompt to provide 2nd number;
//6. (return): no numbers supplied, then goodbye is the output and thank you ; 
//7. (Output feedback): that the number is either too low or too high;
//8. (finish): after 3 loops the addition function stops. 


function clickButton() {
    console.log('Button clicked');
    let i = 0;
    do {
        i += 1;
        console.log(i);
        alert('Please enter first number')
        var num1 = Number(prompt("First number"));
        alert((num1 === "" || isNaN(num1)) ? "Enter a valid number!" : `${num1.toFixed(2)}`);

        var num2 = Number(prompt('Enter second number, and ok'));

        alert((num2 === "" || isNaN(num2)) ? "Enter a valid number!" : `${num2.toFixed(2)}`);
        if (!num1 && !num2) {
            console.log(alert('Goodbye, and thanks for trying the calculator')); //leaving two blanks will exit the loop of asking for numbers
            return;

        }
        var sum = Number(num1 + num2);
        const result = sum.toFixed(2); //allows for 
        console.log(alert("Sum of the two numbers is " + result));
        if (sum<= 10)
            alert("This number is too low") //left it as is, but 10 or higher being too high is rather dumm
        else
            alert("This number is too high")
        alert("Want to continue: Y/N?");
    } while (i< 3); //this loop was different from what was asked, but I didnt work out how to use the cancel button, and in Chrome there was only an ok button. 
    return;
}


function myLoaded() {
    alert('Hello and welcome to basic calculator');
    var name = prompt('Enter your first name');
    if (name == null || name == "") {
        alert('No name supplied!');
        var name = prompt('Enter your first name');
        alert(name + ' glad you are here, now input your 2 numbers');
    }
    else {
        alert(name + ' glad you are here, now input your 2 numbers');

    }

    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
}
