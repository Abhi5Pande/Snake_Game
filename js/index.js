let inputDir = {x: 0, y: 0};
let snakeArr = [{x:10,y:17}];
let lastPaintTime = 0;
let speed =20;
let food = {x:10,y:5}
function main(ctime)
{
    window.requestAnimationFrame(main);
  //  console.log(ctime);
  if((ctime-lastPaintTime)/1000 <= 1/speed)
    {
        return;
    }
   
        lastPaintTime = ctime;
      //  console.log(ctime)
      gameEngine();
    
}

function collision(snake)
{
    for (let i = 2; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }    
}
function overlap(snake)
{
    let flag = 0;
        if(snake[0].x === snake[1].x && snake[0].y === snake[1].y){
            return true;
        }
}


function gameEngine()
{
   
    //collide
    if(collision(snakeArr))
    {
        inputDir={x:0,y:0};
        alert("Game over");
        snakeArr = [{x: 13, y: 15}];
    }
 //move head

 for (let i = snakeArr.length - 2; i>=0; i--) { 
    snakeArr[i+1] = {...snakeArr[i]};
}
    snakeArr[0].x  +=  inputDir.x;
    snakeArr[0].y  +=  inputDir.y;
   
    if (snakeArr[0].x>20)
    {
        snakeArr[0].x = 0;
    }
else if (snakeArr[0].y>20)
    {
        snakeArr[0].y = 0;
    }
else if (snakeArr[0].x<0)
    {
        snakeArr[0].x = 20;
    }
else if (snakeArr[0].y<0)
    {
        snakeArr[0].y = 20;
    }
    //eat
    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x)
    {
        console.log(snakeArr.length);
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        food.x=(Math.round(1+18*Math.random()));
        food.y=(Math.round(1+18*Math.random()));
    }
    //display
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
     
        if(index === 0 ){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
     // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
   

}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    inputDir = {x: 0, y: -1} // Start the game
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        case "Enter":
            alert("Game Paused!Press any key to continue");
            break;

        default:
            break;
    }

});
document.getElementById("pause").onclick = function() {
    
    alert("Game Paused!Press any key to continue");

};