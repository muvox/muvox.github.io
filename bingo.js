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

var arrayOfCells = []

var checklist = []

function initAll() {
  var boksi = document.getElementById("boksi");
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
  arrayOfCells = tableCells(table)
  console.log(arrayOfCells)
    for (var i = 0; i <= 24; i++) {
      setSquare(arrayOfCells[i].id, arrayOfObjects[i].image, arrayOfObjects[i].name)
     }

  checklist = arrayOfCells.slice()

  for(c in checklist){
    console.log(checklist[c].id)
    checklist[c] = {
      id : checklist[c].id,
      dead : 'false'
    }
  }
  console.log(checklist)
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

function dead(el) {
  var parent = el.parentNode
  var nodes = el.childNodes
  var nodes2 = nodes[1].childNodes
  var nodes3 = nodes2[3]
  var actualNode = nodes3.childNodes[1]
  var checkId = parent.id
  var character = checkPerson(checkId)

  if(actualNode.style.visibility == "hidden"){
    character.dead = "true"
    actualNode.style.visibility = ("visible")
  } else {
    character.dead = "false"
    actualNode.style.visibility = ("hidden")
  }

  console.log(character.id+character.dead)
  checkForBingo()
}

function checkPerson(id) {
  var character = checklist.find(x => x.id === id)

  return character
}

function checkForBingo() {
        checkVerticalBingo();
        checkHorizontalBingo();

}

function bingo(){
  console.log("bingo")
}

function checkVerticalBingo() {
  if(checklist[0].dead === "true" && checklist[5].dead === "true" && checklist[10].dead === "true" && checklist[15].dead === "true" && checklist[20].dead === "true"){
    bingo()
} else if(checklist[1].dead === "true" && checklist[6].dead === "true" && checklist[11].dead === "true" && checklist[16].dead === "true" && checklist[21].dead === "true"){
  bingo()
} else if(checklist[2].dead === "true" && checklist[7].dead === "true" && checklist[12].dead === "true" && checklist[17].dead === "true" && checklist[22].dead === "true"){
    bingo()
} else if(checklist[3].dead === "true" && checklist[8].dead === "true" && checklist[13].dead === "true" && checklist[18].dead === "true" && checklist[23].dead === "true"){
        bingo()
} else if(checklist[4].dead === "true" && checklist[9].dead === "true" && checklist[14].dead === "true" && checklist[19].dead === "true" && checklist[24].dead === "true"){
        bingo()
}
}


function checkHorizontalBingo() {
  if(checklist[0].dead === "true" && checklist[1].dead === "true" && checklist[2].dead === "true" && checklist[3].dead === "true" && checklist[4].dead === "true"){
    console.log("bingo")

  }
}
