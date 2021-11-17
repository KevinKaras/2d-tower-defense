const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.height = 600;
canvas.width = 900;

// Global vars
const cellSize = 100;
const cellGap = 3;
const gameGrid = [];


// gameBoard

const controlsBar = {
    width: canvas.width,
    height: cellSize
}



function animate(){
    ctx.fillStyle = 'blue'
    ctx.fillRect(0,0, controlsBar.width, controlsBar.height)
    requestAnimationFrame(animate)

}
animate()