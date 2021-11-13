const list = ["paper.png", "scissors.png","stone.png"]

//DOM = Document obejct model

const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const stone = document.getElementById('stone')
const computerSelection = document.getElementById('computer-selection')

const resultWrite= document.getElementById('result')
//funksiyalar 
paper.onclick=handleYourChoice
scissors.onclick = handleYourChoice
stone.onclick = handleYourChoice


function handleYourChoice(){
    const computer= randomChoice()//0 1 2
    const choice = this.dataset.id //0 1 2

    if(computer ==0 && choice == 0){
        result = "Try again"
    }
    else if (computer == 0 && choice==1){
        result = "Win!Qayci kagizi kesdiyi ucun Qazandiniz"
    }
    else if(computer == 0 && choice==2){
        result = "lose!Kagiz Dasi bukur"
    }
    else if(computer == 1 && choice==0){
        result = "Lose! Qayci Kagiz kesir"
    }
    else if(computer == 1&& choice==1){
        result-"TRY AGAIN"
    }
    else if(computer == 1 && choice==2){
        result= "Qazandin! Dash qaycini sindirdi"
    }
    else if(computer == 2&& choice==0){
        result = "Win Kagiz dashi bukur"
    }
    else if(computer == 2 && choice==1){
        result ="dash qaycini sindirdi"
    }else if (computer == 2 && choice==2){
        result = "Try Again"
    }

    resultWrite.innerHTML = result


}


function randomChoice(){
    const number = Math.round(Math.random()*2)
    computerSelection.src = `img/${list[number]}` 

    return number
}
