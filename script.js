const board = document.querySelector('.board');//here we add board class 
const startBtn = document.querySelector('.start-btn')//here we add start button class
const modal = document.querySelector('.modal')//here we add modal class
const startGameModal = document.querySelector('.start-game')//here we add start game class
const gameOverModal = document.querySelector('.game-over')//here we add game over class
const restartBtn = document.querySelector('.restart-btn')//here we add restart button class
const highScoreElement = document.querySelector('#high-score')//here we add high score class
const scoreElement = document.querySelector('#score')//here we add score class
const timeElement = document.querySelector('#time')//here we add time class

//Set the size of each block
const blockHeight = 50
const blockWidth = 50

let highScore = localStorage.getItem("highScore") || 0
let score = 0
let time = `0-0`

highScoreElement.innerText=highScore

//Calculate how many columns can fit
const cols=Math.floor(board.clientWidth/blockWidth);
//Calculate how many rows can fit
const rows=Math.floor(board.clientHeight/blockHeight);

let intervalId=null
let timerId=null

let food={x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)}

const blocks=[]//one-d array
let snake=[{x:1,y:3}]
let direction='down'

// //Create blocks using a loop 
for (let row = 0; row<rows;row++){
    for(let col=0;col<cols;col++){
        const block = document.createElement('div');//Create a new div Every time the loop runs, it creates:<div></div>
        block.classList.add('block');//Add the block class:<div class="block"></div>
        board.appendChild(block);//Add the block to the board
        blocks[ `${row}-${col}`] = block
        
    }
}


// we can use the forEach method to loop through the snake array and add the fill class to each block that corresponds to a segment of the snake
function rander(){
       let head=null
    blocks[`${food.x}-${food.y}`].classList.add("food")
    if(direction==="left"){
        head={x:snake[0].x,y:snake[0].y-1}
    } 
    else if(direction==="right"){
         head={x:snake[0].x,y:snake[0].y+1}
    }
    else if(direction==="down"){
        head={x:snake[0].x+1,y:snake[0].y}
    }
    else if(direction==="up"){
        head={x:snake[0].x-1,y:snake[0].y}
    }

    if(head.x<0 || head.x>=rows || head.y<0 || head.y>=cols){
        // alert("Game Over")
        clearInterval(intervalId)
        modal.style.display="flex"
        startGameModal.style.display="none"
        gameOverModal.style.display="flex"
        return; //fix: stop here so we don't try to draw an out-of-bounds head below
    }
// food consume logic
    if(head.x===food.x && head.y===food.y){
        blocks[`${food.x}-${food.y}`].classList.remove("food")
        food={x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)}
        blocks[`${food.x}-${food.y}`].classList.add("food")

        snake.forEach(segment=>{
            blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
        })
        snake.unshift(head)
        snake.forEach(segment=>{
            blocks[`${segment.x}-${segment.y}`].classList.add("fill")
        })
        score += 10
        scoreElement.innerText=score
        if(score>highScore){
            highScore=score
            localStorage.setItem("highScore",highScore.toString())
        }
        return//fix: growth already handled above, skip the move logic below so head isn't unshifted twice
    }

    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
    })
    snake.unshift(head)
    snake.pop()
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.add("fill")
    })
}



// we can use the setInterval function to move the snake every 400 milliseconds
//fix: removed the auto-start interval that used to run here before Start was clicked,
//since it caused two intervals to run at once once startBtn was pressed


startBtn.addEventListener('click',()=>{
    modal.style.display="none"
    if(intervalId) clearInterval(intervalId) //fix: guard against a second interval stacking up
    intervalId=setInterval(()=>{
        rander()
    },200)
    timerId=setInterval(()=>{
        let [minutes,seconds]=time.split("-").map(Number)
        if(seconds===59){
            minutes+=1
            seconds=0
    }else{
        seconds+=1
    }
    time=`${minutes}-${seconds}`
    timeElement.innerText=time
},1000)
})

restartBtn.addEventListener('click',resetGame)

function resetGame(){

    blocks[`${food.x}-${food.y}`].classList.remove("food")
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
    })
    score=0
    time=`0-0`
    scoreElement.innerText=score
    timeElement.innerText=time

    modal.style.display="none"
    direction='down'
    snake=[{x:1,y:3}]
    food={x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)}
    intervalId=setInterval(()=>{
        rander()
    },200)
}
// we can use the arrow keys to change the direction of the snake
 addEventListener('keydown',(event)=>{
        if(event.key==="ArrowUp"){
            direction="up"
        }
        else if(event.key==="ArrowDown"){
            direction="down"
        }
        else if(event.key==="ArrowLeft"){
            direction="left"
        }   
        else if(event.key==="ArrowRight"){
            direction="right"
        }
    })