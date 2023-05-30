/* https://www.youtube.com/watch?v=Lcdc2v-9PjA&ab_channel=ChrisCourses */

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64 * 16;
canvas.height = 64 * 9;



c.fillStyle = 'white';
c.fillRect(0,0,canvas.width, canvas.height);

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
    c.fillStyle = 'white';
    c.fillRect(0,0,canvas.width, canvas.height);

    player.velocity.x = 0;
    if (keys.d.pressed) {
        player.velocity.x = 3;
    }  else if (keys.a.pressed) {
        player.velocity.x = -3;
    };
    player.draw();
    player.update();
};

animate();

window.addEventListener('keydown', (event) => {
    console.log(event.key);
    switch (event.key) {
        case 'w':
            if (player.velocity.y === 0) player.velocity.y = -20;
            break;
        case 'a':
            //move to left
            keys.a.pressed = true;
            break;

        case 'd':
            //move to right
            keys.d.pressed = true;
            break;
    }
});

window.addEventListener('keyup', (event) => {
    console.log(event.key);
    switch (event.key) {

        case 'a':
            //move to left
            keys.a.pressed = false;
            break;

        case 'd':
            //move to right
            keys.d.pressed = false;
            break;
    }
});