const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");
const box = 32;

const groundImg = new Image();
groundImg.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";


let snake = [];
snake[0] = {
    x : 9 * box,
    y : 10 * box
}

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

let score = 0;

let d;

document.addEventListener("keydown", direction);


function direction(){
    if (event.keyCode == 37) {
        console.log("PRESS LEFT");
        d = "LEFT";
    } else if (event.keyCode == 38) {
        console.log("PRESS UP");
        d = "UP";
    } else if (event.keyCode == 39) {
        console.log("PRESS RIGHT");
        d = "RIGHT";
    } else if (event.keyCode == 40) {
        console.log("PRESS DOWN");
        d = "DOWN";
    }
}

function draw(){
    console.log("EFA1 " + d);
    ctx.drawImage(groundImg, 0, 0);

    for (let i=0; i < snake.length; i++){
        ctx.fillStyle = ( i == 0)? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    ctx.drawImage(foodImg, food.x, food.y);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    console.log("EFA2 " + d);
    if (d == "LEFT") snakeX -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "UP") snakeY -= box;
    if (d == "DOWN") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);


    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score, 2*box, 1.6*box);
    console.log("EFA3 " + d);
}

let game = setInterval(draw, 200);