canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;
car1_image = "car1.png";

car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 100;
car2_image = "car2.png";
background_image = "racing_bg.jpg";
function add(){
    background_image_tag = new Image();
    background_image_tag.onload = upload_background;
    background_image_tag.src = background_image;

    car1_image_tag = new Image();
    car1_image_tag.onload = upload_car1;
    car1_image_tag.src = car1_image;

    car2_image_tag = new Image();
    car2_image_tag.onload = upload_car2;
    car2_image_tag.src = car2_image;
}
function upload_background(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}
function upload_car1(){
    ctx.drawImage(car1_image_tag,car1_x,car1_y,car1_width,car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_image_tag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypress = e.keyCode;
    console.log(keypress);
    if(keypress == "38" ){
        car1_up();
        car2_up();
        console.log("Up");
    }
    if(keypress == "40" ){
        car1_down();
        car2_down();
        console.log("Down");
    }
    if(keypress == "37" ){
        car1_left();
        car2_left();
        console.log("Left");
    }
    if(keypress == "39" ){
        car1_right();
        car2_right();
        console.log("Right");
    }
    if(car1_x>700){
        console.log("Car1 Won");
        document.getElementById("game").innerHTML = "Car1 has won";
    }
    if(car2_x>700){
        console.log("Car2 Won");
        document.getElementById("game").innerHTML = "Car2 has won";
    }
}
function car1_up(){
    if(car1_y>=0){
        car1_y = car1_y - 10;
        console.log("X = " + car1_x + "Y = " + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car2_up(){
    if(car2_y>=0){
        car2_y = car2_y - 10;
        console.log("X = " + car2_x + "Y = " + car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}       
function car1_down(){
    if(car1_y<=500){
        car1_y = car1_y + 10;
        console.log("X = " + car1_x + "Y = " + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car2_down(){
    if(car2_y<=500){
        car2_y = car2_y + 10;
        console.log("X = " + car2_x + "Y = " + car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}   
function car1_left(){
    if(car1_x>=0){
        car1_x = car1_x - 10;
        console.log("X = " + car1_x + "Y = " + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}   
function car2_left(){
    if(car2_x>=0){
        car2_x = car2_x - 10;
        console.log("X = " + car2_x + "Y = " + car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}   
function car1_right(){
    if(car1_x<=700){
        car1_x = car1_x + 10;
        console.log("X = " + car1_x + "Y = " + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}   
function car2_right(){
    if(car2_x<=700){
        car2_x = car2_x + 10;
        console.log("X = " + car2_x + "Y = " + car2_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}   