const board = document.querySelector('.board');//here we add board class 

//Set the size of each block
const blockHeight = 30
const blockWidth = 30

//Calculate how many columns can fit
const col=Math.floor(board.clientWidth/blockWidth);
//Calculate how many rows can fit
const row=Math.floor(board.clientHeight/blockHeight);

//Create blocks using a loop 
for(let i=0;i<row * col;i++){
    const block = document.createElement('div');//Create a new div Every time the loop runs, it creates:<div></div>
    block.classList.add('block');//Add the block class:<div class="block"></div>
    board.appendChild(block);//Add the block to the board
}
