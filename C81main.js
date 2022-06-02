var canvas = document.getElementById("my_canvas")
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth-400;
canvas.height = window.innerHeight-400;
var color = "red"
line_Width = 1;
// Event starts --------------------------------------------------------------------------------
Mouseevent = "empty";
Last_postion_x = 0;
Last_postion_y = 0;
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    Mouseevent = "touchsart";
}

canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e)
{
    current_mouse_x = e.touches[0].clientX -canvas.offsetLeft;
    current_mouse_y = e.touches[0].clientY -canvas.offsetTop;

if (Mouseevent == "touchstart")
{
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = line_Width;
     ctx.arc(current_mouse_x , current_mouse_y ,40,0, 2*Math.PI)
     ctx.stroke();
    
}

    Last_postion_x = current_mouse_x;
    Last_postion_y = current_mouse_y;
}
function cleararea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
}