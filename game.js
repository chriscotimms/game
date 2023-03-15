// https://www.youtube.com/watch?v=-tlb4tv4mC4&ab_channel=developedbyed


const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;
playerLivesCount.textContent = playerLives;

const cardArray = [];


const getData = () => [
    {imgSrc: 'images/butros.jpeg', name:"boutros_boutros-ghali"},
    {imgSrc: 'images/clippy.jpeg', name:"clippy"},
    {imgSrc: 'images/earth.jpeg', name:"earth"},
    {imgSrc: 'images/shrek.jpeg', name:"shrek"},
    {imgSrc: 'images/horse.jpeg', name:"horse"},
    {imgSrc: 'images/icecream.jpeg', name:"icecream"},
    {imgSrc: 'images/kitty.jpeg', name:"kitty"},
    {imgSrc: 'images/spade.jpeg', name:"spade"},
    {imgSrc: 'images/butros.jpeg', name:"boutros_boutros-ghali"},
    {imgSrc: 'images/clippy.jpeg', name:"clippy"},
    {imgSrc: 'images/earth.jpeg', name:"earth"},
    {imgSrc: 'images/shrek.jpeg', name:"shrek"},
    {imgSrc: 'images/horse.jpeg', name:"horse"},
    {imgSrc: 'images/icecream.jpeg', name:"icecream"},
    {imgSrc: 'images/kitty.jpeg', name:"kitty"},
    {imgSrc: 'images/spade.jpeg', name:"spade"},
    ];

//randomiser
const randomise = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

//randomise();

//card generator function
const cardGenerator = () => {
    const cardData = randomise();

    cardData.forEach((item, index) => {
        //generate html
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.id = "tile" + index;
        cardArray.push(card.id);
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        back.insertAdjacentText("beforeend", index);
        card.ariaLabel = "Tile " + index;
        card.tabIndex = "0";
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        card.setAttribute('Tile', index);
        

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        //Adding event listener to cards for mouseclick
        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });


        //additionally adding keyboard input enter on focus for cards
        window.addEventListener('keydown', (e) => {
            if (e.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }
            switch (e.key) {
            
                case "Enter":
                document.activeElement.classList.toggle('toggleCard');
                checkCards(e);
                //console.log(CurrentFocus);
                break;

            default:
              return; // Quit when this doesn't handle the key event.
          }
          // Cancel the default action to avoid it being handled twice
          e.preventDefault();
        },
        true
      );


    });

};


//let currentFocus = document.getElementById("tile 2");
//console.log(currentFocus + "returned");





//check cards 
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const namer = clickedCard.getAttribute("name");
    clickedCard.ariaLabel = "Tile " + clickedCard.getAttribute("tile") + " " + namer;
    console.log(namer);
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");
    console.log(flippedCards);

    if(flippedCards.length == 2) {
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
                card.ariaLabel = "Tile " + card.getAttribute("tile") + " matched";
            });
        } else {
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => {
                    card.classList.remove('toggleCard');
                    card.ariaLabel = "Tile " + card.getAttribute("tile");   
                }, 2000);
                
            });
            
            playerLives--;
            if (playerLives === 0) {
                restart(":( try again :(");
            } 
            setTimeout(() => {
                playerLivesCount.textContent = playerLives;
                  
            }, 1500);
        }
    }
    if (toggleCard.length === 16) {
        restart("you won!");
    }
};

const restart = (text) => {
    cardData = randomise();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        setTimeout(() => {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
        }, 1000);
    });
    setTimeout(function() { 
        playerLives = 6; 
        playerLivesCount.textContent = playerLives; 
        window.alert(text);
    }, 1501);
};

cardGenerator();


let i = 0;
let currentFocus = document.getElementById(cardArray[i]);
currentFocus.focus();
console.log(currentFocus, i);



//adding keyboard navigation
window.addEventListener("keydown", (event) => { 

      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
  
      switch (event.key) {

        case "Down": // IE/Edge specific value
        case "ArrowDown":
            i = i + 4;
          // Do something for "down arrow" key press.
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
            i = i - 4;
          // Do something for "up arrow" key press.
          break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
            i = i - 1;
          // Do something for "left arrow" key press.
          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
            i = i + 1;
          // Do something for "right arrow" key press.
          break;
        
        default:
          return; // Quit when this doesn't handle the key event.
      }
        //cancel the default action to avoid it being handled twice
        event.preventDefault();

        //counter issues with remainder from 0 to negative integers (abs does no work here as it essentially reverses the intended direction of the arrows)  
        if (i < 0) {
            i = i + 16;
        }

        //modulo to contain counted variable within 0-15
        i = i % 16;
        currentFocus = document.getElementById(cardArray[i]);
        currentFocus.focus();

    },
    true
  );


