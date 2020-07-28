var a=document.getElementById("canvas_y");
var b=document.getElementById("canvas_x");
var c=document.getElementById("boton_enter");
var d=document.getElementById("papel");
control=new Boolean;
var xi;
var yi;
var area=d.getContext("2d");
c.addEventListener("click",asignar);
d.addEventListener("mousedown",iniciar);
d.addEventListener("mousemove",dibujando);
d.addEventListener("mouseup",parar);

function asignar()
{
  d.width=parseInt(a.value);
  d.height= parseInt(b.value);
  dibujarLinea("blue",1,1,d.width-1,1,area);
  dibujarLinea("blue",1,1,1,d.height-1,area);
  dibujarLinea("blue",d.width-1,1,d.width-1,d.height-1,area);
  dibujarLinea("blue",1,d.height-1,d.width-1,d.height-1,area);
}
function iniciar(z)
{
  control=true;
  xi=z.offsetX;
  yi=z.offsetY;
}
function dibujando(z)
{
  if(control==true)
    {
      dibujarLinea("red",xi,yi,z.offsetX,z.offsetY,area);
    }
  xi=z.offsetX;
  yi=z.offsetY;

}
function parar(z)
{
  control=false;
  xi=z.offsetX;
  yi=z.offsetY;
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
