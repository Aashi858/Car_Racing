canavs = document.getElementById("myCanvas");
ctx = getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.jpg";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.jpg";
car2_x = 10;
car2_y = 100;

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
        console.log("Up");
    }
    if(keypress == "40" ){
        car1_down();
        console.log("Down");
    }
    if(keypress == "37" ){
        car1_left();
        console.log("Left");
    }
    if(keypress == "39" ){
        car1_right();
        console.log("Right");
    }
    if(keypress == "38" ){
        car2_up();
        console.log("Up");
    }
    if(keypress == "40" ){
        car2_down();
        console.log("Down");
    }
    if(keypress == "37" ){
        car2_left();
        console.log("Left");
    }
    if(keypress == "39" ){
        car2_right();
        console.log("Right");
    }
}