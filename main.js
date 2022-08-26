document.getElementById("b1").onclick = click
document.getElementById("b2").onclick = click
document.getElementById("b3").onclick = click
document.getElementById("b4").onclick = click
document.getElementById("b5").onclick = click
document.getElementById("b6").onclick = click
document.getElementById("b7").onclick = click
document.getElementById("b8").onclick = click
document.getElementById("b9").onclick = click
document.getElementById("button").onclick = reset
var msg = document.getElementById("msg")



let nextTurn = 'X'




function click() {
    if (this.id == "b1") {
        if(document.getElementById("b1").innerHTML == "") {
            document.getElementById("b1").innerHTML = nextTurn
           changeTurn()
           gameWon()
          
           
        }
        
    }else if (this.id == "b2") {
        if(document.getElementById("b2").innerHTML == "") {
            document.getElementById("b2").innerHTML = nextTurn
            changeTurn()
            gameWon()
           
        }
    }else if (this.id == "b3") {
        if(document.getElementById("b3").innerHTML == "") {
            document.getElementById("b3").innerHTML = nextTurn
            changeTurn()
            gameWon()
            
        }
    }else if (this.id == "b4") {
        if(document.getElementById("b4").innerHTML == "") {
            document.getElementById("b4").innerHTML = nextTurn
            changeTurn()
            gameWon()
        }
    }else if (this.id == "b5") {
        if(document.getElementById("b5").innerHTML == "") {
            document.getElementById("b5").innerHTML = nextTurn
            changeTurn()
            gameWon()
        }
    }else if (this.id == "b6") {
        if(document.getElementById("b6").innerHTML == "") {
            document.getElementById("b6").innerHTML = nextTurn
            changeTurn()
            gameWon()
        }
    }else if (this.id == "b7") {
        if(document.getElementById("b7").innerHTML == "") {
            document.getElementById("b7").innerHTML = nextTurn
            changeTurn()
            gameWon()
        }
    }else if (this.id == "b8") {
        if(document.getElementById("b8").innerHTML == "") {
            document.getElementById("b8").innerHTML = nextTurn
            changeTurn()
            gameWon()
        }
    }else if (this.id == "b9") {
        if(document.getElementById("b9").innerHTML == "") {
            document.getElementById("b9").innerHTML = nextTurn
            changeTurn()
            gameWon()
        }
    }
}

function changeTurn() {
    if (nextTurn == 'X') {
        nextTurn = 'O'
    }else {
        nextTurn = 'X'
    }
}




function reset() {
    location.reload()
    document.getElementById('b1').innerHTML = ''
    document.getElementById('b2').innerHTML = ''
    document.getElementById('b3').innerHTML = ''
    document.getElementById('b4').innerHTML = ''
    document.getElementById('b5').innerHTML = ''
    document.getElementById('b6').innerHTML = ''
    document.getElementById('b7').innerHTML = ''
    document.getElementById('b8').innerHTML = ''
    document.getElementById('b9').innerHTML = ''
}


function gameWon() {
    var b1 = document.getElementById('b1')
    var b2 = document.getElementById('b2')
    var b3 = document.getElementById('b3')
    var b4 = document.getElementById('b4')
    var b5 = document.getElementById('b5')
    var b6 = document.getElementById('b6')
    var b7 = document.getElementById('b7')
    var b8 = document.getElementById('b8')
    var b9 = document.getElementById('b9')
    msg.style.color = 'red'

   if (b1.innerText == 'X' && b2.innerText == 'X' && b3.innerText == 'X') {
    msg.innerHTML = "Player 1 won"
   }else if(b1.innerText == 'O' && b2.innerText == 'O' && b3.innerText == 'O') {
    msg.innerHTML = "player 2 won"
   }
   if (b4.innerText == 'X' && b5.innerText == 'X' && b6.innerText == 'X') {
    msg.innerHTML = "Player 1 won"
   }else if(b4.innerText == 'O' && b5.innerText == 'O' && b6.innerText == 'O') {
    msg.innerHTML = "player 2 won"
   }
   if (b7.innerText == 'X' && b8.innerText == 'X' && b9.innerText == 'X') {
    msg.innerHTML = "Player 1 won"
   }else if(b7.innerText == 'O' && b8.innerText == 'O' && b9.innerText == 'O') {
    msg.innerHTML = "player 2 won"
   }
   if (b1.innerText == 'X' && b4.innerText == 'X' && b7.innerText == 'X') {
    msg.innerHTML = "Player 1 won"
   }else if(b1.innerText == 'O' && b4.innerText == 'O' && b7.innerText == 'O') {
    msg.innerHTML = "player 2 won"
   }
   if (b2.innerText == 'X' && b5.innerText == 'X' && b8.innerText == 'X') {
    msg.innerHTML = "Player 1 won"
   }else if(b2.innerText == 'O' && b5.innerText == 'O' && b8.innerText == 'O') {
    msg.innerHTML = "player 2 won"
   }
   if (b3.innerText == 'X' && b6.innerText == 'X' && b9.innerText == 'X') {
    msg.innerHTML = "Player 1 won"
   }else if(b3.innerText == 'O' && b6.innerText == 'O' && b9.innerText == 'O') {
    msg.innerHTML = "player 2 won"
   }
   if (b1.innerText == 'X' && b5.innerText == 'X' && b9.innerText == 'X') {
    msg.innerHTML = "Player 1 won"
   }else if(b1.innerText == 'O' && b5.innerText == 'O' && b9.innerText == 'O') {
    msg.innerHTML = "player 2 won"
   }
   if (b3.innerText == 'X' && b5.innerText == 'X' && b7.innerText == 'X') {
    msg.innerHTML = "Player 1 won"
   }else if(b3.innerText == 'O' && b5.innerText == 'O' && b7.innerText == 'O') {
    msg.innerHTML = "player 2 won"
   }
  

   
   }

gameWon()




