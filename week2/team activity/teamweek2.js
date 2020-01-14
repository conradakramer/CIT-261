document.getElementById("button").addEventListener("click", onbuttonclick);
document.getElementById("plus").addEventListener("click", adding);
function onbuttonclick() {
    var text = document.getElementById("stuff").value;
    console.log(text);
    
    if (isNaN(text)){
        text = "your dumb!";
    }
    else {
        text = func2(text);

        
    }
    document.getElementById("emptydiv").innerHTML = text;
}


function func2(num) {
    var sum = 0;
    for(i=0 ; i < num ; i++){
        sum += i;
        console.log(sum);
    }
    return sum;
}



function adding() {
    var input1 = parseInt(document.getElementById("stuff").value);
    var input2 = parseInt(document.getElementById("stuff2").value);
    var total = 0;
    if (isNaN(input1,input2)){
        total = "your dumb!";
    }
    else {
         var total2 = function(input1 ,input2) {return input1 + input2};
         total = total2(input1,input2);
    }
    document.getElementById("emptydiv2").innerHTML = total;
    
}