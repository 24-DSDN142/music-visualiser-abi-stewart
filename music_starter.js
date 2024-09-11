let img;
let firstRun = true;

let img1;
let firstRun1 = true;

let angle = 0;
let angle1 = 10;
let r = 100;



// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0,10)
  

//   let basscolour = map(bass, 0, 100, 0, 255);
//   let basscolour1 = map(bass, 0, 100, 255, 0);


// background(basscolour, 0, basscolour);

// push()
// translate(canvasWidth/2, canvasHeight/2);
// fill(0, 70);
// ellipse(0, 0, 600, 600);
// pop()

//Central circle, in correlation to vocal
//   if (firstRun){
//   img = loadImage('orb.png')
//     firstRun = false
//   }


//    let circlescale = map(vocal, 0, 100, 0.1, 1)
//   if (circlescale < 0.5){
//     circlescale = 0.5
//   }

//   push()
//   translate( canvasWidth/2, canvasHeight/2)
//   rotate(0)
//   scale(circlescale/2)
//   image(img,-215,-235)
// //To check if the translation is in the centre of the image
//     // ellipse(0,0,20,20)
//   pop()



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



  

    // if (firstRun1){
    //   img1 = loadImage('orb2.png');
    //   firstRun1 = false;
    // }
    // let circlescale2 = map(bass, 0, 100, 1, 3);
    // if (circlescale2 < 1){
    //   circlescale2 = 1.5
    // }
   
    // push()
    // translate(canvasWidth/2, canvasHeight/2);
    // scale(circlescale2);
    // image(img1, -107, -107);
    // pop()


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


  

  //  let increment = map(bass, 0, 100, );
  //  translate(canvasWidth/2, canvasHeight/2);
  //  noFill()
  //  stroke(255)

  //  let basschange = map(bass, 0, 100, 0, 40)

  //  beginShape();
  //   for(let a = 0; a < 360; a+= increment){
  //     let bassr = r * 3.5 + random(-10, basschange);
  //     let bassx = bassr * cos(a);
  //     let bassy = bassr * sin(a);
  //     vertex(bassx, bassy);

  //   }

  //   endShape(CLOSE)

  let increment = 100
  let r2 = r * 6 + increment;
  let ellipsecolour = map(bass, 0, 100, 150, 255)
  

  push( )
  translate(canvasWidth/2, canvasHeight/2);
  noFill();
  stroke(0, 174, ellipsecolour);
  strokeWeight(5);

  let numberOfRings = 6;
  for (let i=0; i<numberOfRings; i++) {
    let ringMap = map(vocal, 0, 100, r2 + i * 50, r2 + i * 50 * 1.1);
    ellipse(
      0, 0, 
      ringMap, 
      ringMap
    );

  }

  // ellipse(0, 0, r2, r2);
  // ellipse(0, 0, map(vocal, 0, 100, r2, r2 * 1.2));
  // ellipse(0, 0, map(vocal, 0, 100, r2 + 50, (r2 + 50) * 1.1));
  // // ellipse(0, 0, r2 + 50, r2 + 50);
  // ellipse(0, 0, r2 + 100, r2 + 100);
  // ellipse(0, 0, r2 + 150, r2 + 150);
  // ellipse(0, 0, r2 + 200, r2 + 200);
  // ellipse(0, 0, r2 + 250, r2 + 250);
  

  pop()

   }

//if (firstRun1){
  // img1 = loadImage('orb2.png')
  //   firstRun1 = false
  // }




  //  let circlescale1 = map(other, 0, 100, 0.1, 1)
  // if (circlescale1 < 0.5){
  //   circlescale1 = 0.5
  // }

//   push()
//   translate( canvasWidth/4 - 100, canvasHeight/2)
//   rotate(0)
//   scale(0.5)
//   //scale(circlescale1/2)
//   image(img1, -106, -106)
// //To check if the translation is in the centre of the image
//     // ellipse(0,0,20,20)
//   pop()

//   push()
//   translate( canvasWidth/4 + canvasWidth/2 + 100, canvasHeight/2)
//   rotate(0)
//   scale(0.5)
//   //scale(circlescale1/2)
//   image(img1, -106, -106)
// //To check if the translation is in the centre of the image
//     // ellipse(0,0,20,20)
//   pop()
 



// if (firstRun1){
//   img1 = loadImage('orb2.png')
//     firstRun1 = false
//   }




//    let circlescale1 = map(other, 0, 100, 0.1, 1)
//   if (circlescale1 < 0.5){
//     circlescale1 = 0.5
//   }

//   push()
//   translate( canvasWidth/4 + 25, canvasHeight/2)
//   scale(0.5)
//   //scale(circlescale1/2)
//   image(img1, -106, -106)
// //To check if the translation is in the centre of the image
//     // ellipse(0,0,20,20)
//   pop()

//   push()
//   translate( canvasWidth/4 + canvasWidth/2 - 25, canvasHeight/2)
//   scale(0.5)
//   //scale(circlescale1/2)
//   image(img1, -106, -106)
// //To check if the translation is in the centre of the image
//     // ellipse(0,0,20,20)
//   pop()
 
   



// stroke(255)
// strokeWeight(5)
// noFill()


// beginShape();
// vertex(397, 753);
// bezierVertex(132, 550, 171, 148, 418, 0);
// vertex(0, 0);
// vertex(0, 750);
// vertex(397, 753);
// endShape(CLOSE);

// beginShape();
// vertex(1093, 0);
// bezierVertex(1390, 286, 1279, 607, 1109, 752);
// vertex(1500, 750);
// vertex(1500, 0);
// vertex(1093, 0);
// endShape();


  // let basscolour = map(bass, 0, 100, 0, 255)

  // //  strokeWeight(10)
  // //  stroke(255)
  // noStroke()
  //  fill(bass, 117, basscolour)
  //  beginShape();
  //     vertex(999, 55);
  //     bezierVertex(1149, 156, 1313, 416, 1021, 694);
  //     vertex(1450, 694)
  //     vertex(1450, 55)
  //     vertex(999, 55);
  //  endShape();
  










  



  







    // background(237, 26 ,112 );
  
  // strokeWeight(16)
  // stroke(252, 238, 33);


  // let x = r * cos(angle);
  // let y = r * sin(angle);
  // point(x , y);

  // angle += 0.04;
  // r -= random(-2, 2);






















  // background (255)
 
  //  background(20)
  // textFont('Verdana'); // please use CSS safe fonts
  // rectMode(CENTER)
  // textSize(24);

  // let eyeSize = map(drum, 0, 100, 50, 150)
  // ellipse(100, 100, eyeSize, eyeSize)
  // ellipse(300, 100, eyeSize, eyeSize)

  // let mouthSize = map(vocal,0,100,30,300 )
  // rect(200, 300, 200, mouthSize)









 //   let circlescale = map(vocal, 0, 100, 0.1, 1)
  // if (circlescale < 0.5){
  //   circlescale = 0.5
  // }

  // push()
  // translate(250,300)
  // rotate(0)
  // scale(circlescale)
  // image(img,-215,-235)
  // //ellipse(0,0,20,20)
  // pop()


//  background(20)
//   textFont('Verdana'); // please use CSS safe fonts
//   rectMode(CENTER)
//   textSize(24);

 // let eyeSize = map(drum, 0, 100, 50, 150)
  // ellipse(100, 100, eyeSize, eyeSize)
  // ellipse(300, 100, eyeSize, eyeSize)

  // let mouthSize = map(vocal,0,100,30,300 )
  // rect(200, 300, 200, mouthSize)


 // background(20)
  // textFont('Verdana'); // please use CSS safe fonts
  // rectMode(CENTER)
  // textSize(24);




  // let eyeSize = map(drum, 0, 100, 50, 150)
  // ellipse(100, 100, eyeSize, eyeSize)
  // ellipse(300, 100, eyeSize, eyeSize)

  // let mouthSize = map(vocal,0,100,30,300 )
  // rect(200, 300, 200, mouthSize)













  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);