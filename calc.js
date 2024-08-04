
const display = document.getElementById("display");

function appendNumber(number) {
   display.textContent += number;
}

function appendOperation(operation){
    display.textContent += operation;
}

function  clearInput(){
    display.textContent = '';
}

function calculate(){
    try{
        display.textContent = eval(display.textContent);
    }

    catch(error){
        display.textContent = "error";
    }
}

