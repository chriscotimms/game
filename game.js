// https://www.youtube.com/watch?v=-tlb4tv4mC4&ab_channel=developedbyed


const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

playerLivesCount.textContent = playerLives;



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

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });
};

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

// https://www.youtube.com/watch?v=-tlb4tv4mC4&ab_channel=developedbyed

//adding keyboard navigation
window.addEventListener(
    "keydown",
    (event) => {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
  
      switch (event.key) {
        
        case "Enter":
            console.log(document.activeElement); //Log current focus
        case "Down": // IE/Edge specific value
        case "ArrowDown":
            console.log(event.key);
          // Do something for "down arrow" key press.
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          // Do something for "up arrow" key press.
          break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          // Do something for "right arrow" key press.
          break;
        case "Enter":
          // Do something for "enter" or "return" key press.
          break;
        case "Esc": // IE/Edge specific value
        case "Escape":
          // Do something for "esc" key press.
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
  
      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    },
    true
  );

  