const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

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
    console.log(cardData);
}
cardGenerator();