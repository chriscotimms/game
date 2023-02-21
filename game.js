// https://www.youtube.com/watch?v=-tlb4tv4mC4&ab_channel=developedbyed


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


    cardData.forEach((item) => {
        //generate html
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        face.src = item.imgSrc;

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
        })
        })
    

    
}
cardGenerator();

// https://www.youtube.com/watch?v=-tlb4tv4mC4&ab_channel=developedbyed