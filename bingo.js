window.onload = initAll;

var usedNums = new Array(25);

var arrayOfObject = [
  {
    name: 'Jon Snow',
    image: 'images/jonSnow.png'
  },
  {
    name: 'Bran Stark',
    image: 'images/branStark.png'
  },
  {
    name: 'Brianne Of Tarth',
    image: 'images/brianneOfTarth.png'
  },
  {
    name: 'Bronn',
    image: 'images/bronn.png'
  },
  {
    name: 'Cersei Lannister',
    image: 'images/cerseiLannister.png'
  },
  {
    name: 'Daario Naharis',
    image: 'images/daarioNaharis.png'
  },
  {
    name: 'Davos Seaworth',
    image: 'images/davosSeaworth.png'
  },
  {
    name: 'Denerys Targaryan',
    image: 'images/denerysTargaryan.png'
  },
  {
    name: 'Euron Grayjoy',
    image: 'images/euronGreyjoy.png'
  },
  {
    name: 'Gendry',
    image: 'images/gendry.png'
  },
  {
    name: 'Gilly',
    image: 'images/gilly.png'
  },
  {
    name: 'Grey Worm',
    image: 'images/greyWorm.png'
  },
  {
    name: 'Jamie Lannister',
    image: 'images/jamieLannister.png'
  },
  {
    name: 'Jaqen Hghar',
    image: 'images/jaqenHghar.png'
  },
  {
    name: 'Podrick Payne',
    image: 'images/podrickPayne.png'
  },
  {
    name: 'Qyburn',
    image: 'images/qyburn.png'
  },
  {
    name: 'Samwell Tarly',
    image: 'images/samwellTarly.png'
  },
  {
    name: 'Sansa Stark',
    image: 'images/sansaStark.png'
  },
  {
    name: 'The Hound',
    image: 'images/theHound.png'
  },
  {
    name: 'The Mountain',
    image: 'images/theMountain.png'
  },
  {
    name: 'Tormund Giantsbane',
    image: 'images/tormundGiantsbane.png'
  },
  {
    name: 'Tyrion Lannister',
    image: 'images/tyrionLannister.png'
  },
  {
    name: 'Varys',
    image: 'images/varys.png'
  },
  {
    name: 'Yara Greyjoy',
    image: 'images/yaraGreyjoy.png'
  },
  {
    name: 'Arya Stark',
    image: 'images/aryaStark.png'
  }
]

function initAll() {
  var boksi = document.getElementById("boksi");
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

//TODO: Proper iteration through the damn shitfuck

function newCard() {
  var table = document.getElementById("table");
    for (var i = 0, row; row = table.rows[i]; i++) {
   //iterate through
   console.log(row+" row "+i)
   //rows would be accessed using the "row" variable assigned in the for loop
      for (var j = 0, col; col = row.cells[j]; j++) {
        console.log(col+" col "+j)



     //iterate through columns
     //columns would be accessed using the "col" variable assigned in the for loop
   }
 }
}

function setImage(row, column){
  var currentSquare = "sq" + row + column
  var currentImage = currentSquare + "i"
  console.log(currentImage)

  var imageSource = document.getElementById(currentImage);

  imageSource.src = "images/jonSnow.png"
  console.log(imageSource)
}

function setSquare(thisSquare){
  var currentSquare = "sq" + thisSquare;
  var newNum = getNewNum();
  var currentSquareImage = "sq"+thisSquare+"i"
  do{
    newNum = getNewNum();
  }while(usedNums[newNum]);

  usedNums[newNum] = true;
  document.getElementById(currentSquare).innerHTML = newNum;

}

function getNewNum() {
  var min = 0
  var max = 24
  return Math.floor(Math.random() * (max - min)) + min;
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++){
    usedNums[i] = false;
  };

  newCard();
  return false;
}
