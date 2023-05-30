/* https://www.youtube.com/watch?v=Lcdc2v-9PjA&ab_channel=ChrisCourses */

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64 * 16;
canvas.height = 64 * 9;


c.fillStyle = 'white';
c.fillRect(0,0,canvas.width, canvas.height);


const backgroundLevel1 = new Sprite({
    position: {
        x:0,
        y:0,
    },
    imageSrc:"./img/backgroundLevel1.png",

})

const player = new Player();
const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
};

//let = bottom = y + 100;
function animate() {
    window.requestAnimationFrame(animate);

    //c.fillStyle = 'white';
    //c.fillRect(0,0,canvas.width, canvas.height);

    backgroundLevel1.draw();

    player.velocity.x = 0;
    if (keys.d.pressed) player.velocity.x = 4;
    else if (keys.a.pressed) player.velocity.x = -4 ;

    player.draw();
    player.update();
};

animate();

