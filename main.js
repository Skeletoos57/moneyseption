/*

MONEYSEPTION -- Entire Code.

NOTE: This script contains EVERYTHING that makes
the game work, DO NOT DELETE ANYTHING !!

Developed by Thiago Grillo (Skeletoos57) in a term of 1 week

*/

// Global and important variables
var money = 0;
var i = 0;
var guessed = 0;

// Numbers
var firstNumber  = document.getElementById("firstNumber").value;
var secondNumber = document.getElementById("secondNumber").value;
var thirdNumber  = document.getElementById("thirdNumber").value;

// Rooms
var principal = document.getElementById("buttons");
var principalGame = document.getElementById("principalGame");
var information = document.getElementById("information-page");

function first() {

    var principal = document.getElementById("buttons");
    var principalGame = document.getElementById("principalGame");
    var information = document.getElementById("information-page");

    principal.style.display = "none";
    principalGame.style.display = "inline";

    money = 2000;
    updateMoney(money);

}

function second() {

    var principal = document.getElementById("buttons");
    var principalGame = document.getElementById("principalGame");

    principal.style.display = "none";
    principalGame.style.display = "inline";

    money = 4500;
    updateMoney(money);

}

function third() {

    var principal = document.getElementById("buttons");
    var principalGame = document.getElementById("principalGame");

    principal.style.display = "none";
    principalGame.style.display = "inline";

    money = 7000;
    updateMoney(money);

}


function updateMoney(money) {

    if (money < 0 || money == 0) {
        alert("HAS PERDIDO: Ya no tienes mas dinero ¡Gracias por jugar! Resetea la pagina para volver a jugar");
        document.getElementById("moneyDisplay").innerHTML = `
            <p style="font-size: 15px;color: #FD0000;"><b>$ ${money}</b></p>
        `
    }else{
        document.getElementById("moneyDisplay").innerHTML = `
            <p style="font-size: 15px;"><b>$ ${money}</b></p>
        `
    }

}


function start() {

    var apuesta = Number(document.getElementById("apuesta").value);

    firstNumber  = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    thirdNumber  = document.getElementById("thirdNumber").value;

    if (firstNumber == 0) { alert("Llena todos los campos. 0"); }
    else if (secondNumber == 0) { alert("Llena todos los campos. 1"); }
    else if (thirdNumber == 0) { alert("Llena todos los campos. 2 "); }
    else if (apuesta == 0) { alert("Llena todos los campos. 3");
    }else{
        if (money < apuesta) {
            alert("No tienes dinero suficiente para apostar.");
        }else{
            if (apuesta == money) {
                var option = prompt("¿Estas REALMENTE SEGURO que quieres apostar TODO TU DINERO? Si pierdes en el primer numero... ¡PIERDES TODO! (1 = Si, estoy seguro | 2 = No, mejor no)");
                if (option == "1") {
                    document.getElementById("inputNumbers").style.display = "none";
                    document.getElementById("random").style.display = "none";
                    document.getElementById("start").style.display = "none";
                    information.style.display = "none";
                    nextNumber(1);
                }else if (option == "2") {
                    alert("Recuerda... El que no arriesga NO GANA.");
                }
            }else{
                document.getElementById("inputNumbers").style.display = "none";
                document.getElementById("random").style.display = "none";
                document.getElementById("start").style.display = "none";
                nextNumber(1);
            }
        }
    }
}


function nextNumber(number) {

    var apuesta = Number(document.getElementById("apuesta").value);

    switch (number) {
        case 1:
            var timer = setInterval(function() {

                var num = Math.floor(Math.random()*100);
                document.getElementById("chooser").innerHTML = `
                    <h2 style="font-size: 30px;">${num}</h2>
                `
                if (i != 50) {
                    if (num == firstNumber) {
                        alert("Has acertado el primer numero!");
                        console.log(i);
                        money += apuesta;
                        updateMoney(money);
                        guessed++;
                        clearInterval(timer);
                        nextNumber(2);
                        i = 0;
                    }else{
                        i++;
                        console.log(i);
                    }
                }else{
                    alert("No has acertado el primer numero");
                    money -= apuesta;
                    updateMoney(money);
                    clearInterval(timer);
                    nextNumber(2);
                    console.log(i);
                    i = 0;
                }

            }, 50)
        break;
        case 2:
            var timer = setInterval(function() {

                var num = Math.floor(Math.random()*100);
                document.getElementById("chooser").innerHTML = `
                    <h2 style="font-size: 30px;">${num}</h2>
                `
                if (i != 50) {
                    if (num == secondNumber) {
                        alert("Has acertado el segundo numero!");
                        money += apuesta;
                        updateMoney(money);
                        guessed++;
                        clearInterval(timer);
                        nextNumber(3);
                        i = 0;
                    }else{
                        i++;
                        console.log(i);
                    }
                }else{
                    alert("No has acertado el segundo numero");
                    money -= apuesta;
                    updateMoney(money);
                    clearInterval(timer);
                    nextNumber(3);
                    i = 0;
                    console.log(i);
                }

            }, 50)
        break;
        case 3:
            var timer = setInterval(function() {

                var num = Math.floor(Math.random()*100);
                document.getElementById("chooser").innerHTML = `
                    <h2 style="font-size: 30px;">${num}</h2>
                `
                if (i != 50) {
                    if (num == thirdNumber) {
                        alert("Has acertado el tercer numero!");
                        money += apuesta;
                        updateMoney(money);
                        guessed++;
                        clearInterval(timer);
                        i = 0;
                        document.getElementById("inputNumbers").style.display = "inline";
                        document.getElementById("random").style.display = "inline";
                        document.getElementById("start").style.display = "inline";
                        chooser.innerHTML = `
                            <h2></h2>
                        `
                        if (guessed == 3) {
                            alert("¡TRIPLE ACIERTO!");
                            alert("¡Ganas el dinero apostado X3!");
                            guessed = 0;
                            money += apuesta*3;
                            updateMoney(money);
                        }
                    }else{
                        i++;
                        console.log(i);
                    }
                }else{
                    alert("No has acertado el tercer numero");
                    clearInterval(timer);
                    money -= apuesta;
                    updateMoney(money);
                    document.getElementById("inputNumbers").style.display = "inline";
                    document.getElementById("random").style.display = "inline";
                    document.getElementById("start").style.display = "inline";
                    i = 0;
                    console.log(i);
                    chooser.innerHTML = `
                        <h2></h2>
                    `
                }

            }, 50)
        break;
    }

}


function generate() {

    var number1 = Math.floor(Math.random()*100);
    var number2 = Math.floor(Math.random()*100);
    var number3 = Math.floor(Math.random()*100);

    document.getElementById("inputNumbers").innerHTML = `
    <input type="number" id="firstNumber" value=${number1}><input type="number" id="secondNumber" value=${number2}><input type="number" id="thirdNumber" value=${number3}>
    <p><b>¿Cuanto apostaras?:</b><br><input type="number" id="apuesta" value=0></p>
    `

}


function info() {

    principal.style.display = "none";
    principalGame.style.display = "none";
    information.style.display = "inline";
    document.getElementById("title").style.display = "none";
    document.getElementById("subtitle").style.display = "none";

}


function returnToGame() {

    if (money == 0) {
        principal.style.display = "inline";
        principalGame.style.display = "none";
        information.style.display = "none";
        document.getElementById("title").style.display = "inline";
        document.getElementById("subtitle").style.display = "inline";
    }else{
        principal.style.display = "none";
        principalGame.style.display = "inline";
        information.style.display = "none";
        document.getElementById("title").style.display = "inline";
        document.getElementById("subtitle").style.display = "inline";
    }

}
