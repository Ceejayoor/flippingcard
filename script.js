const cardArray = [
    {
        name: "milkshake",
        img: "./images for games/milkshake.png",
    },
    {
        name: "ice-cream",
        img: "./images for games/ice-cream.png",
    },
    {
        name: "pizza",
        img: "./images for games/pizza.png",
    },
    {
        name: "fries",
        img: "./images for games/fries.png",
    },
    {
        name: "hotdog",
        img: "./images for games/hotdog.png",
    },
    {
        name: "cheeseburger",
        img: "./images for games/cheeseburger.png",
    },
   
    {
        name: "milkshake",
        img: "./images for games/milkshake.png",
    },
    {
        name: "ice-cream",
        img: "./images for games/ice-cream.png",
    },
    {
        name: "pizza",
        img: "./images for games/pizza.png",
    },
    {
        name: "fries",
        img: "./images for games/fries.png",
    },
    {
        name: "hotdog",
        img: "./images for games/hotdog.png",
    },
    {
        name: "cheeseburger",
        img: "./images for games/cheeseburger.png",
    }
    ];

const theGrid = document.querySelector(".grid");

cardArray.sort(()=> 0.5 - Math.random());

function createBoard(){
    for(i=0; i<cardArray.length; i++){
    let card = document.createElement("img");
    card.setAttribute("src", "./images for games/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard); 
    theGrid.append(card);
    }
}
createBoard();

let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];

function flipCard(){
   const cardId = this.getAttribute("data-id");
   cardChosen.push(cardArray[cardId].name);
   cardChosenIds.push(cardId);
   this.setAttribute("src", cardArray[cardId].img);
  
    console.log(cardChosen)

   if(cardChosen.length === 2){
    setTimeout(checkMatch, 500);
   }
}

function checkMatch(){
const cards = document.querySelectorAll("img");

    if(cardChosen[0]===cardChosen[1]){
        alert("you found a match");
        cards[cardChosenIds[0]].setAttribute("src", "./images for games/white.png");
        cards[cardChosenIds[1]].setAttribute("src", "./images for games/white.png");
        cards[cardChosenIds[0]].removeEventListener("click", flipCard);
        cards[cardChosenIds[1]].removeEventListener("click",  flipCard);
        cardsWon.push(cardChosen);
        document.getElementById("score").innerHTML = cardsWon.length;
        console.log(cardsWon);
    }

    else{
        cards[cardChosenIds[0]].setAttribute("src", "./images for games/blank.png");
        cards[cardChosenIds[1]].setAttribute("src", "./images for games/blank.png");
    }
    cardChosen = [];
    cardChosenIds = [];

    if (cardsWon.length == cardArray.length/2){
        document.getElementById("score").innerHTML = "congratulations you found them all   "; 
    }
}
