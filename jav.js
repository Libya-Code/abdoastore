let tite = document.querySelector('.content-O-X')
let boxs = 'X'
let Output = []
let audio1 = document.getElementById("audio1")
let audio2 = document.getElementById("audio2")
function background(numbr1, numbr2, numbr3) {
    setTimeout(() => {
        document.getElementById("box" + numbr1).style.backgroundColor = "#17f702"
    }, 100);
    setTimeout(() => {
        document.getElementById("box" + numbr2).style.backgroundColor = "#17f702"
    }, 200);
    setTimeout(() => {
        document.getElementById("box" + numbr3).style.backgroundColor = "#17f702"
    }, 300);
    audio2.play()
}
function elsebox() {
    for (let i = 1; i < 10; i++) {
       document.getElementById("box" + i).style.backgroundColor = "#83888d"
        
    }    
}
function winner() {
    for (let index = 1; index < 10; index++) {

        Output[index] = document.getElementById("box" + index).innerText

    }
    if (Output[1] == Output[2] && Output[2] == Output[3] && Output[1] != "") {
        background(1, 2, 3)
    } else if (Output[4] == Output[5] && Output[5] == Output[6] && Output[4] != "") {
        background(4, 5, 6)
    } else if (Output[7] == Output[8] && Output[8] == Output[9] && Output[7] != "") {
        background(7, 8, 9)
    } else if (Output[1] == Output[4] && Output[4] == Output[7] && Output[7] != "") {
        background(1, 4, 7)
    } else if (Output[2] == Output[5] && Output[5] == Output[8] && Output[2] != "") {
        background(2, 5, 8)
    } else if (Output[3] == Output[6] && Output[6] == Output[9] && Output[9] != "") {
        background(3 , 6 , 9)
    } else if (Output[1] == Output[5] && Output[5] == Output[9] && Output[9] != "") {
        background(1 , 5 , 9)
    } else if (Output[3] == Output[5] && Output[5] == Output[7] && Output[7] != "") {
       background(3 , 5 , 7)
    }
}
function clickbox(id) {
    let element = document.getElementById(id)
    if (boxs == 'X' && element.innerText == '') {
        element.innerText = 'X'
        boxs = 'O'
        tite.innerText = 'O'
        audio1.play()
    } else if (boxs == 'O' && element.innerText == '') {
        element.innerText = 'O'
        boxs = 'X'
        tite.innerText = 'X'
        
        audio1.play()
    }
    winner()


}
