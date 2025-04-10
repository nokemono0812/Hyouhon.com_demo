let originPoint = [0,0];
let coordinateScale = 50;

function setup(){
    let canvas = createCanvas(500, 500);
    originPoint = [width/2, height/2];
    canvas.parent("graph");
    frameRate(30);
}

function draw(){
    translate(originPoint[0], originPoint[1]);
    background(220);
    drawBaseLine();
    drawPoint();
}

function drawBaseLine(){
    stroke(0);
    strokeWeight(1);
    line(-width,0,width,0);
    line(0,-height,0,height);
    /*
    strokeWeight(1);
    textSize(14);
    text("0", -15, -10);
    */
}

function drawPoint(){
    for(let i = 0; i < data.length; i ++){
        strokeWeight(4);
        let newX = coordinateScale * parseFloat(data[i][0]);
        let newY = coordinateScale * parseFloat(data[i][1]);
        let dataType = data[i][2].split("")[0];

        if(dataType == "A"){stroke(255,0,0);fill(255,0,0);}
        if(dataType == "B"){stroke(0,0,255);fill(0,0,255);}
        if(dataType == "C"){stroke(0,255,0);fill(0,255,0);}

        point(newX, newY);
        if(viewDataLabel){
            let viewX = parseFloat(data[i][0]).toFixed(2);
            let viewY = parseFloat(data[i][1]).toFixed(2);
            noStroke();
            textSize(8);
            text("(" + viewX + "," + viewY + ")", newX-24, newY-6)
        }
    }
}

function mouseWheel(e) {
    if(
        mouseX >= 0 &&
        mouseX <= width &&
        mouseY >= 0 &&
        mouseY <= height
    ){
        if(e.delta > 0){
            coordinateScale --;
        }
        else{
            coordinateScale ++;
        }
        if(coordinateScale < 0){
            coordinateScale = 0;
        }
        scaleTxt.textContent = coordinateScale;
    }
}