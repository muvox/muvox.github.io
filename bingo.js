window.onload = initAll;

var usedNums = new Array(25);

var arrayOfObjects = [
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
    image: 'images/euronGrayjoy.png'
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
    name: 'Yara Grayjoy',
    image: 'images/yaraGrayjoy.png'
  },
  {
    name: 'Arya Stark',
    image: 'images/aryaStark.png'
  }
]

function initAll() {
  var boksi = document.getElementById("boksi");
  console.log(arrayOfObjects[0])
  document.getElementById('teksti').innerHTML = arrayOfObjects[0].name;
  // boksi.src = arrayOfObjects[0].image;
  if(document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    newCard();
  }else{
    alert("Your browser does not support this script.");
  }
}


function newCard() {
  shuffleArray(arrayOfObjects)
  var table = document.getElementById("table");
  var arrayOfCells = tableCells(table)
  console.log(arrayOfCells)
    for (var i = 0; i <= 25; i++) {
      console.log(arrayOfCells[i].id)
      setSquare(arrayOfCells[i].id, arrayOfObjects[i].image, arrayOfObjects[i].name)
     }
 }

function tableCells(t){
   if(t.cells) return t.cells;
   for(var a=[], r=t.rows, y=0, c, x; t=r[y++];){
      for(c=t.cells, x=0; t=c[x++]; a.push(t));
   }
   return a;
}

function setSquare(cellId, image, name){
  var currentImage = cellId + "i"
  var currentText = cellId + "t"
  var image = image
  var name = name

  var imageSource = document.getElementById(currentImage);
  var textSource = document.getElementById(currentText).innerHTML = name
  imageSource.src = image

}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function anotherCard() {
  for (var i = 1; i < usedNums.length; i++){
    usedNums[i] = false;
  };

  newCard();
  return false;
}
