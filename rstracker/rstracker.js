const listElements = document.getElementById("people");
document.getElementById("people").addEventListener("click",aboutPerson);




function compareValues(key, order = 'asc') {
return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
    // property doesn't exist on either object
    return 0;
    }

    const varA = (typeof a[key] === 'string')
    ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
    ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
    comparison = 1;
    } else if (varA < varB) {
    comparison = -1;
    }
    return (
    (order === 'desc') ? (comparison * -1) : comparison
    );
};
}

function aboutPerson(){

}

 function displayItems(){
    
   const itemList = JSON.parse(localStorage.getItem('items'));
   const cleanList = [];
    for(x in itemList)
    {
        cleanList.push(itemList[x]);
            
    }
    console.log(cleanList);
    for(x in cleanList){
        if (cleanList[x].sell_average == 0)
        {
            cleanList[x].diffrence = 0;
        }
        else if(cleanList[x].buy_average == 0)
        {
            cleanList[x].diffrence = 0;
        }
        else{
            cleanList[x].diffrence = cleanList[x].sell_average - cleanList[x].buy_average;
        }
        
    }
    cleanList.sort(compareValues('diffrence', 'desc'));
    for(i = 0; i < 150 ; i++){
        listElements.appendChild(displayResults(cleanList[i]));
    }
};
function displayPotions(){
    const itemList = JSON.parse(localStorage.getItem('items'));
    const cleanList = [];
     for(x in itemList)
     {
         cleanList.push(itemList[x]);    
     }
     console.log(cleanList);
     for(x in cleanList){
         if (cleanList[x].sell_average == 0)
         {
             cleanList[x].diffrence = 0;
         }
         else if(cleanList[x].buy_average == 0)
         {
             cleanList[x].diffrence = 0;
         }
         else{
             cleanList[x].diffrence = cleanList[x].sell_average - cleanList[x].buy_average;
         } 
     }
     cleanList.sort(compareValues('diffrence', 'desc'));
     for(i = 0; i < 2500 ; i++){
         if(cleanList[i].name.includes('potion')){
            listElements.appendChild(displayResults(cleanList[i]));
         }
     }
 };

 function displaySets(){
    const itemList = JSON.parse(localStorage.getItem('items'));
    const cleanList = [];
     for(x in itemList)
     {
         cleanList.push(itemList[x]);    
     }
     console.log(cleanList);
     for(x in cleanList){
         if (cleanList[x].sell_average == 0)
         {
             cleanList[x].diffrence = 0;
         }
         else if(cleanList[x].buy_average == 0)
         {
             cleanList[x].diffrence = 0;
         }
         else{
             cleanList[x].diffrence = cleanList[x].sell_average - cleanList[x].buy_average;
         } 
     }
     cleanList.sort(compareValues('diffrence', 'desc'));
     for(i = 0; i < 2500 ; i++){
         if(cleanList[i].name.includes('set')){
            listElements.appendChild(displayResults(cleanList[i]));
         }
     }
 };

function displayResults(item) {
    //console.log(item);
    const display = document.createElement('li');
    display.innerHTML = `<div class="card">
    <div class="card-header">
    <img src="http://services.runescape.com/m=itemdb_oldschool/1583848866847_obj_big.gif?id=${item.id}" alt="${item.name}">
    <h5 class="card-title">${item.name} -        ${item.diffrence} gp </h5>
    <h5 class="card-title">Med Price: ${item.overall_average} gp </h5>
    <h5 class="card-title">Buy Price: ${item.buy_average} gp </h5>
    <h5 class="card-title">Sell Price: ${item.sell_average} gp </h5>
    </div>
  </div><br>`
    return display;
};

function refreshPage(){
    $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://rsbuddy.com/exchange/summary.json'), function (data) {
                          
        const parsed = JSON.parse(data.contents);
        const newJson = JSON.stringify(parsed);
        localStorage.setItem('items', newJson );
    });


    listElements.innerHTML = '';
    displayItems();
};
function potions(){
    $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://rsbuddy.com/exchange/summary.json'), function (data) {
                          
        const parsed = JSON.parse(data.contents);
        const newJson = JSON.stringify(parsed);
        localStorage.setItem('items', newJson );
    });
    listElements.innerHTML = '';
    displayPotions();
};

function sets(){
    $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://rsbuddy.com/exchange/summary.json'), function (data) {
                          
        const parsed = JSON.parse(data.contents);
        const newJson = JSON.stringify(parsed);
        localStorage.setItem('items', newJson );
    });
    listElements.innerHTML = '';
    displaySets();
};

refreshPage();



//https://www.runescape.com/img/rsp777/scroll/backdrop_745.gif
//https://www.runescape.com/img/rsp777/scroll/backdrop_765_top.gif
//https://www.runescape.com/img/rsp777/scroll/backdrop_765_bottom.gif







