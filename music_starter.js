let img;
let firstRun = true;


let angle = 0;
let angle1 = 10;
let r = 100;



// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0,10)
  

// Code for the drum portion; It is the inner spinning circles 
  push()
  background(0,10);
  translate(canvasWidth/2, canvasHeight/2);
 


  let fillcolour = map(drum, 0, 100, 0, 255)
    strokeWeight(10)
    stroke(fillcolour, 49, 117)
    fill(fillcolour, 49, 117);
    let circlepath = map(drum, 0, 100, 1, 2);

    let x = r * cos(angle) * circlepath;
    let y = r * sin(angle) * circlepath;
    ellipse(x, y, 20, 20);
    ellipse(1.15 * y, 1.15 * x + 10, 20, 20);
    ellipse(1.3 * x, 1.3 * y + 10, 20, 20);
    ellipse(1.45 * y, 1.45 * x + 10, 20, 20);

    ellipse(x * -1, y * -1, 20, 20);
    ellipse(-1.15 * y, -1.15 * x + 10, 20, 20);
    ellipse(-1.3 * x, -1.3 * y + 10, 20, 20);
    ellipse(-1.45 * y, -1.45 * x + 10, 20, 20);


    let x1 = r * cos(angle + 45) * circlepath;
    let y1 = r * sin(angle + 45) * circlepath;
    ellipse(x1, y1, 20, 20);
    ellipse(1.15 * y1, 1.15 * x1 + 10, 20, 20);
    ellipse(1.3 * x1, 1.3 * y1 + 10, 20, 20);
    ellipse(1.45 * y1, 1.45 * x1 + 10, 20, 20);

    ellipse(x1 * -1, y1 * -1, 20, 20);
    ellipse(-1.15 * y1, -1.15 * x1 + 10, 20, 20);
    ellipse(-1.3 * x1, -1.3 * y1 + 10, 20, 20);
    ellipse(-1.45 * y1, -1.45 * x1 + 10, 20, 20);



    let x2 = r * cos(angle + 90) * circlepath;
    let y2 = r * sin(angle + 90) * circlepath;
    ellipse(x2, y2, 20, 20);
    ellipse(1.15 * y2, 1.15 * x2 + 10, 20, 20);
    ellipse(1.3 * x2, 1.3 * y2 + 10, 20, 20);
    ellipse(1.45 * y2, 1.45 * x2 + 10, 20, 20);

    ellipse(x2 * -1, y2 * -1, 20, 20);
    ellipse(-1.15 * y2, -1.15 * x2 + 10, 20, 20);
    ellipse(-1.3 * x2, -1.3 * y2 + 10, 20, 20);
    ellipse(-1.45 * y2, -1.45 * x2 + 10, 20, 20);


    let x3 = r * cos(angle + 135) * circlepath;
    let y3 = r * sin(angle + 135) * circlepath;
    ellipse(x3, y3, 20, 20);
    ellipse(1.15 * y3, 1.15 * x3 + 10, 20, 20);
    ellipse(1.3 * x3, 1.3 * y3 + 10, 20, 20);
    ellipse(1.45 * y3, 1.45 * x3 + 10, 20, 20);

    ellipse(x3 * -1, y3 * -1, 20, 20);
    ellipse(-1.15 * y3, -1.15 * x3 + 10, 20, 20);
    ellipse(-1.3 * x3, -1.3 * y3 + 10, 20, 20);
    ellipse(-1.45 * y3, -1.45 * x3 + 10, 20, 20);




    
    let speed = map(drum, 0, 100, 0, 5);
   angle += speed/4;

   pop()


// Code for the other part; It is the outer spinning circles
  push()
  background(0,10);
  translate(canvasWidth/2, canvasHeight/2);

  let ellipseother = 30;

  // let fillcolour1 = map(other, 0, 100, 0, 255)
    strokeWeight(15);
    stroke(237, 10, 113);
    fill(237, 10, 113);

    let r1 = r * 2 + 350
    

    let otherx = r1 * cos(angle1);
    let othery = r1 * sin(angle1);
    ellipse(otherx, othery, 20, 20);
    ellipse(1.15 * othery, 1.15 * otherx + 10, ellipseother, ellipseother);
    ellipse(1.3 * otherx, 1.3 * othery + 10, ellipseother, ellipseother);
    ellipse(1.45 * othery, 1.45 * otherx + 10, ellipseother, ellipseother);

    ellipse(otherx * -1, othery * -1, ellipseother, ellipseother);
    ellipse(-1.15 * othery, -1.15 * otherx + 10, ellipseother, ellipseother);
    ellipse(-1.3 * otherx, -1.3 * othery + 10, ellipseother, ellipseother);
    ellipse(-1.45 * othery, -1.45 * otherx + 10, ellipseother, ellipseother);


    let otherx1 = r1 * cos(angle1 + 45);
    let othery1 = r1 * sin(angle1 + 45);
    ellipse(otherx1, othery1, ellipseother, ellipseother);
    ellipse(1.15 * othery1, 1.15 * otherx1 + 10, ellipseother, ellipseother);
    ellipse(1.3 * otherx1, 1.3 * othery1 + 10, ellipseother, ellipseother);
    ellipse(1.45 * othery1, 1.45 * otherx1 + 10, ellipseother, ellipseother);

    ellipse(otherx1 * -1, othery1 * -1, ellipseother, ellipseother);
    ellipse(-1.15 * othery1, -1.15 * otherx1 + 10, ellipseother, ellipseother);
    ellipse(-1.3 * otherx1, -1.3 * othery1 + 10, ellipseother, ellipseother);
    ellipse(-1.45 * othery1, -1.45 * otherx1 + 10, ellipseother, ellipseother);



    let otherx2 = r1 * cos(angle1 + 90);
    let othery2 = r1 * sin(angle1 + 90);
    ellipse(otherx2, othery2, ellipseother, ellipseother);
    ellipse(1.15 * othery2, 1.15 * otherx2 + 10, ellipseother, ellipseother);
    ellipse(1.3 * otherx2, 1.3 * othery2 + 10, ellipseother, ellipseother);
    ellipse(1.45 * othery2, 1.45 * otherx2 + 10, ellipseother, ellipseother);

    ellipse(otherx2 * -1, othery2 * -1, ellipseother, ellipseother);
    ellipse(-1.15 * othery2, -1.15 * otherx2 + 10, ellipseother, ellipseother);
    ellipse(-1.3 * otherx2, -1.3 * othery2 + 10, ellipseother, ellipseother);
    ellipse(-1.45 * othery2, -1.45 * otherx2 + 10, ellipseother, ellipseother);


    let otherx3 = r1 * cos(angle1 + 135);
    let othery3 = r1 * sin(angle1 + 135);
    ellipse(otherx3, othery3, ellipseother, ellipseother);
    ellipse(1.15 * othery3, 1.15 * otherx3 + 10, ellipseother, ellipseother);
    ellipse(1.3 * otherx3, 1.3 * othery3 + 10, ellipseother, ellipseother);
    ellipse(1.45 * othery3, 1.45 * otherx3 + 10, ellipseother, ellipseother);

    ellipse(otherx3 * -1, othery3 * -1, ellipseother, ellipseother);
    ellipse(-1.15 * othery3, -1.15 * otherx3 + 10, ellipseother, ellipseother);
    ellipse(-1.3 * otherx3, -1.3 * othery3 + 10, ellipseother, ellipseother);
    ellipse(-1.45 * othery3, -1.45 * otherx3 + 10, ellipseother, ellipseother);



    
   let speedother = map(other, 0, 100, 0, 150);
   angle1 += speedother/50;
  

   pop()



   // Code for the vocal part; It is the inner circle that changes in reaction

       if (firstRun){
    img = loadImage('orb.png')
      firstRun = false
    }
  
  
     let circlescale = map(vocal, 0, 100, 0.1, 1)
    if (circlescale < 0.5){
      circlescale = 0.5
    }
  
    push()
    translate( canvasWidth/2, canvasHeight/2)
    rotate(0)
    scale(circlescale/2)
    image(img,-215,-235)
  //To check if the translation is in the centre of the image
      // ellipse(0,0,20,20)
    pop()


// Code for the bass part; It is the ripple circles

  let increment = 50
  let r2 = r * 6 + increment;
  let ellipsecolour = map(bass, 0, 100, 100, 255)
  

  push( )
  translate(canvasWidth/2, canvasHeight/2);
  noFill();
  stroke(0, 174, ellipsecolour);
  strokeWeight(5);

  let numberOfRings = 6;
  for (let i=1; i<numberOfRings; i++) {
    //change the 1 and 10 in the map to adjust the effects
    let growth = (numberOfRings - i) * map(bass, 0, 100, 1, 30); 
    ellipse(0, 0, r2 + i * 50 + growth, r2 + i * 50 + growth);
  }
  pop()
}
 