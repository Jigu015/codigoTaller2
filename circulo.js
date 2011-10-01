function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.remover = false; //Remover
}

Circulo.prototype.actualizar = function() { 
    if (this.x < this.juego.ctx.canvas.width) {
        this.x += 2;
        //this.x -= 2;
    }
    else if(this.x > this.juego.ctx.canvas.width)
 {
        this.x+=-2;
    }
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