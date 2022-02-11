function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}

function DarkMode() {
    document.body.classList.toggle("dark");
    
}

var yourAge =prompt("What is your Age")

if(yourAge < 15){
    console.log("not here");
} else{
    console.log("Okay");
}

var time = new Date().getHours();
var text;
if(time>12){
    text ="good evining";
} else if(time<12){
    text ="good morning";
} else{
   "good day" ;
}
console.log(text);
