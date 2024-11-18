
var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        play(this.innerHTML);
        pressed(this.innerHTML);
    });
}

document.addEventListener("keypress",function(event)
{
play(event.key);
pressed(event.key);
});

function pressed(name){
var item= document.querySelector("."+name);
item.classList.add("pressed");
setTimeout(function(){
    item.classList.remove("pressed")
},100);
}

function  play(temp)
{
    var rnext=temp;
    var next;
    switch(rnext)
       {
        case 'w':
            next="crash";
            break;
        case 'a':
            next="kick-bass";
            break;
        case 's':
            next="snare";
            break;
        case 'd':
            next="tom-1";
            break;
        case 'j':
            next="tom-2";
            break;
        case 'k':
            next="tom-3";
            break;
        case 'l':
            next="tom-4";
            break;
        default:
            console.log("wrong key");
       }
       var sound=new Audio("sounds/"+next+".mp3");
       sound.play();
    
}