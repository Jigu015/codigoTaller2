var canvas = document.getElementById('fondo');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "yellow";
ctx.arc(150, 200, 100, 0, Math.PI*2, true);
//x,y,radio,angulo de inicio,360 grados,sentido de man reloj, true contrario
ctx.stroke(); //Dibujar el contorno
ctx.fill(); //Llena el fill
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "36pt Algerian";
ctx.fillText("Hola Canvas-Mundo", 280, 100); //Texto, posx,posy
ctx.closePath();

var assetManager = new AssetManager();

//assetManager.queueDownload("./imagenes/vaca_normal.png","vacanormal");

assetManager.downloadAll(function() {
    //var imagen = assetManager.getAsset("vacanormal");
    //ctx.drawImage(imagen, 500,150);

    var juego = new Juego(ctx);
    var circulo = new Circulo(juego, 0, 225);
    juego.addEntidad(circulo);
    juego.iniciar();
});