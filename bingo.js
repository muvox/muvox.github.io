window.onload = initAll;

var usedNums = new Array(25);

var jonSnow = {
  image : 'images/jonSnow.png',
  name : 'Jon Snow'
}

var arrayOfObject = [jonSnow]

function initAll() {
  var boksi = document.getElementById('boksi');
  console.log(arrayOfObject[0])
  document.getElementById('teksti').innerHTML = arrayOfObject[0].name;
  boksi.src = arrayOfObject[0].image;
  if(document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  }else{
    alert("Your browser does not support this script.");
  }
}


function newCard() {
  for(var i=0; i<24 ; i++){
    setSquare(i);
  }
}

function setSquare(thisSquare){
  var currentSquare = "sq" + thisSquare;
  var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4);
  var colBasis = colPlace[thisSquare] * 15;
  var newNum = colBasis + getNewNum() + 1;

  do{
    newNum = colBasis + getNewNum() + 1;
  }while(usedNums[newNum]);

  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;

}

function getNewNum() {
  return Math.floor(Math.random() * 15);
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++){
    usedNums[i] = false;
  };

  newCard();
  return false;
}
