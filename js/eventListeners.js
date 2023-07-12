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