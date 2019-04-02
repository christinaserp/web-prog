let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');
canvas.width  = 800;
canvas.height = 600;

let img1 = new Image(); ///создаем объект изображения
let img2 = new Image();
let img3 = new Image();
let img4 = new Image();
let link = "https://source.unsplash.com/collection/145698/";

//4 одинаковых рисунка
img1.onload = function(){
    for (let i=0;i<2;i++){
        for (let j=0;j<2;j++){
            ctx.drawImage(img1,j*400,i*300,400,300);

        }
    }
};
img1.src = link;

