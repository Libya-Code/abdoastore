let tite = document.querySelector('.content-O-X')
let boxs = 'X'
let Output = []
function winner() {
    for (let index = 1; index < 10; index++) {

       Output[index] = document.getElementById("box" + index).innerText
        
    }
    if (Output[1] == Output[2] && Output[2] == Output[3] && Output[1] != "") {
        console.log('تحقق شرط');
        document.getElementById("line").classList.add('line3')
    }else if (Output[4] == Output[5] && Output[5] == Output[6] && Output[4] != "") {
        console.log('تحقق شرط');
        document.getElementById("line").classList.add('line4')
    }else if (Output[7] == Output[8] && Output[8] == Output[9] && Output[7] != "") {
        console.log('تحقق شرط');
        document.getElementById("line").classList.add('line5')
    }else if (Output[1] == Output[4] && Output[4] == Output[7] && Output[7] != "") {
        console.log('تحقق شرط');
        document.getElementById("line").classList.add('line6')
    }else if (Output[2] == Output[5] && Output[5] == Output[8] && Output[2] != "") {
        console.log('تحقق شرط');
        document.getElementById("line").classList.add('line7')
    }else if (Output[3] == Output[6] && Output[6] == Output[9] && Output[9] != "") {
        console.log('تحقق شرط');
        document.getElementById("line").classList.add('line8')
    }else if (Output[1] == Output[5] && Output[5] == Output[9] && Output[9] != "") {
        console.log('تحقق شرط');
        document.getElementById("line").classList.add('line2')
    }else if (Output[3] == Output[5] && Output[5] == Output[7] && Output[7] != "") {
        console.log('تحقق شرط');
        document.getElementById("line").classList.add('line1')
    }else{
        
    }
}
function clickbox(id) {
    let element = document.getElementById(id)
        if (boxs == 'X' && element.innerText == '') {
            element.innerText = 'X'
            boxs = 'O'
            tite.innerText = 'O'
        }else if (boxs == 'O' && element.innerText == '') {
            element.innerText = 'O'
            boxs = 'X'
            tite.innerText = 'X'
        }
        winner()
       
        
}
