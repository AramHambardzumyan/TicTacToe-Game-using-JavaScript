const boxes = Array.from(document.getElementsByClassName('boxes'))
let boxOne= document.getElementById('boxOne')
let boxTwo = document.getElementById('boxTwo')
let boxTree = document.getElementById('boxTree')
let boxfour = document.getElementById('boxfour')
let boxFive = document.getElementById('boxFive')
let boxSix = document.getElementById('boxSix')
let boxSeven = document.getElementById('boxSeven')
let boxEight = document.getElementById('boxEight')
let boxNine = document.getElementById('boxNine')
const display = document.getElementById('display')
const restart = document.getElementById('restart-button')
let isFin = false
let selectedPlayer = false

let array = [
        {
        selected : false, 
        div : boxOne
        },
        {
        selected : false, 
        div : boxTwo
        },
        {
        selected : false, 
        div : boxTree
        },
        {
        selected : false, 
        div : boxFour
        },
        {
        selected : false, 
        div : boxFive
        },
        {
        selected : false, 
        div : boxSix
        },
        {
        selected : false, 
        div : boxSeven
        },  
        {
        selected : false, 
        div : boxEight
        },
        {
        selected : false, 
        div : boxNine
        }
]

array.map(el => {
    el.div.addEventListener('click' , ()=> {
        if(isFin === false){
            if(el.selected === false){
                if(selectedPlayer ===false) {
                    el.div.innerHTML = '<img src="./image/x.png" alt="x" class="image-x"> '
                    el.div.style.backgroundColor ='#34A1EF'
                    selectedPlayer = true
                    el.selected = true
                    compare();
                }else if(selectedPlayer === true) {
                    el.div.innerHTML = '<img src="./image/o.png" alt="0" class="image-o">  '
                    el.div.style.backgroundColor ='#ADD4EF'
                    selectedPlayer = false
                    el.selected = true
                    compare();
                }
            }
        }

    })
})

function compare(){    
        if(array[0].div.innerHTML === array[1].div.innerHTML && array[0].div.innerHTML === array[2].div.innerHTML && array[0].selected ===true){
            array[1].div.style.backgroundColor = '#EF7676'
            array[0].div.style.backgroundColor = '#EF7676'
            array[2].div.style.backgroundColor = '#EF7676' 
            isFin = true
            if( array[0].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
                display.innerHTML = ' Winner X'
            } else {
                display.innerHTML = ' Winner 0'
            }
        }
        if(array[3].div.innerHTML === array[4].div.innerHTML && array[3].div.innerHTML === array[5].div.innerHTML && array[3].selected ===true){
            array[3].div.style.backgroundColor = '#EF7676'
            array[4].div.style.backgroundColor = '#EF7676'
            array[5].div.style.backgroundColor = '#EF7676'
            isFin = true
            if( array[3].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
                display.innerHTML = ' Winner X'
            } else {
                display.innerHTML = ' Winner 0'
            }
        }
        if(array[6].div.innerHTML === array[7].div.innerHTML && array[6].div.innerHTML === array[8].div.innerHTML && array[6].selected ===true){
            array[6].div.style.backgroundColor = '#EF7676'
            array[7].div.style.backgroundColor = '#EF7676'
            array[8].div.style.backgroundColor = '#EF7676'
            isFin = true
            if( array[6].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
                display.innerHTML = ' Winner X'
            } else {
                display.innerHTML = ' Winner 0'
            }
        }
        if(array[0].div.innerHTML === array[3].div.innerHTML && array[0].div.innerHTML === array[6].div.innerHTML && array[0].selected ===true){
            array[0].div.style.backgroundColor = '#EF7676'
            array[3].div.style.backgroundColor = '#EF7676'
            array[6].div.style.backgroundColor = '#EF7676'
            isFin = true
            if( array[0].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
                display.innerHTML = ' Winner X'
            } else {
                display.innerHTML = ' Winner 0'
            }
        }
        if(array[1].div.innerHTML === array[4].div.innerHTML && array[1].div.innerHTML === array[7].div.innerHTML && array[1].selected ===true){
            array[1].div.style.backgroundColor = '#EF7676'
            array[4].div.style.backgroundColor = '#EF7676'
            array[7].div.style.backgroundColor = '#EF7676'
            isFin = true
            if( array[1].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
                display.innerHTML = ' Winner X'
            } else {
                display.innerHTML = ' Winner 0'
            }
        }
        if(array[2].div.innerHTML === array[5].div.innerHTML && array[2].div.innerHTML === array[8].div.innerHTML && array[2].selected ===true){
            array[2].div.style.backgroundColor = '#EF7676'
            array[5].div.style.backgroundColor = '#EF7676'
            array[8].div.style.backgroundColor = '#EF7676'
            isFin = true
            if( array[2].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
                display.innerHTML = ' Winner X'
            } else {
                display.innerHTML = ' Winner 0'
            }

        }
        if(array[0].div.innerHTML === array[4].div.innerHTML && array[0].div.innerHTML === array[8].div.innerHTML && array[0].selected ===true){
            array[0].div.style.backgroundColor = '#EF7676'
            array[4].div.style.backgroundColor = '#EF7676'
            array[8].div.style.backgroundColor = '#EF7676'
            isFin = true
            if( array[0].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
                display.innerHTML = ' Winner X'
            } else {
                display.innerHTML = ' Winner 0'
            }
        }
        if(array[2].div.innerHTML === array[4].div.innerHTML && array[2].div.innerHTML === array[6].div.innerHTML && array[2].selected ===true){
            array[2].div.style.backgroundColor = '#EF7676'
            array[4].div.style.backgroundColor = '#EF7676'
            array[6].div.style.backgroundColor = '#EF7676'
            isFin = true
            if( array[2].div.innerHTML === '<img src="./image/x.png" alt="x" class="image-x"> '){
                display.innerHTML = ' Winner X'
            } else {
                display.innerHTML = ' Winner 0'
            }
        }
}

restart.addEventListener('click' , ()=> {
    window.location.reload()
})