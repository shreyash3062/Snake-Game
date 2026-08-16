const board = document.querySelector('.board');//here we add board class 

//Set the size of each block
const blockHeight = 50
const blockWidth = 50

//Calculate how many columns can fit
const cols=Math.floor(board.clientWidth/blockWidth);
//Calculate how many rows can fit
const rows=Math.floor(board.clientHeight/blockHeight);

const blocks=[]//one-d array
const snake=[{x:1,y:3}]
let direction='right'

// //Create blocks using a loop 
for (let row = 0; row<rows;row++){
    for(let col=0;col<cols;col++){
        const block = document.createElement('div');//Create a new div Every time the loop runs, it creates:<div></div>
        block.classList.add('block');//Add the block class:<div class="block"></div>
        board.appendChild(block);//Add the block to the board
        blocks[ `${row}-${col}`] = block
        block.innerText=`${row}-${col}`
    }
}

function rander(){
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.add("fill")
    })
}

setInterval(()=>{
    let head=null
    if(direction==="left"){
        head={x:snake[0].x,y:snake[0].y-1}
    } 
    else if(direction==="right"){
         head={x:snake[0].x,y:snake[0].y+1}
    }
    

    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
    })
    snake.unshift(head)
    snake.pop()
    rander()
},400);