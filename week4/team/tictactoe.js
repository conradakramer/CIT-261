document.getElementById("table").addEventListener("touchend",onclick);

let player = 0;
function onclick(e){

    if (player % 2 == 0){
        e.target.innerHTML = "X";
        player +=1;
    }
    else{
        e.target.innerHTML = "O";
        player +=1;
    }

}