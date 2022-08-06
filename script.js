let btn = document.getElementById("changeColor");

let click = 0;
let body = document.body.style;


btn.onclick = () => {
    click ^= 1;
    if(click==0){
        body.backgroundImage = "linear-gradient(347.95deg, #51B9F3 0%, #2A6F96 100%)";
    }else{
        body.backgroundColor = "#FBAB7E";
        body.backgroundImage = "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)";
    }
}   
