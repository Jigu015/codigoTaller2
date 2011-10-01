


function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.remover = false; //Remover
        this.direccion="derecha";
}

Circulo.prototype.actualizar = function() { 
 
if(this.direccion=="derecha")
{
  this.x += 2;
}
else if(this.direccion=="izquierda")
{
  this.x -= 2;
}
   
    if (this.x >= this.juego.ctx.canvas.width) {
        
          this.direccion="izquierda";
        //this.x -= 2;
    }
    else if (this.x <= 0) {
        
          this.direccion="derecha";
        //this.x -= 2;
    }
    
    /*else //if(this.x > this.juego.ctx.canvas.width)
    {
        this.x=this.juego.ctx.canvas.width;
        while()
        this.x+=-2;
    }*/
};

Circulo.prototype.dibujar = function(ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.arc(this.x, this.y, 60, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};