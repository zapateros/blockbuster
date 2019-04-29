
const cvs = document.getElementById("canv");
const ctx = cvs.getContext("2d");

const cell = {
  width: 60,
  height: 60
};

var pos = {
  x: 2,
  y: 3
};

cvs.addEventListener('click', (e) => {
  var rect = cvs.getBoundingClientRect();
  pos = {
    x: Math.floor((e.clientX - rect.left) / cell.width),
    y: Math.floor((e.clientY - rect.top) / cell.height)
  };
    //  alert(Math.floor(pos.x / cell.width));
draw();
});


function draw(){

  ctx.beginPath();
  ctx.fillStyle = "#fff";
  ctx.rect(0,0,600,600);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "#999";
  ctx.rect(pos.x * cell.width, pos.y * cell.height, cell.height, cell.width);
  ctx.fill();

}

draw();
