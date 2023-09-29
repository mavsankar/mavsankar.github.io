// Get canvas and context
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Game constants
const WIDTH = 800;
const HEIGHT = 600;
const ALIEN_WIDTH = 60;
const ALIEN_HEIGHT = 60;
const SPACESHIP_WIDTH = 60;
const SPACESHIP_HEIGHT = 60;
const LASER_WIDTH = 5;
const LASER_HEIGHT = 25;
const SPEED = 10;
const ALIEN_SPEED = 2;
const LASER_SPEED = 7;

const alienImage = new Image();
alienImage.src = 'alien.png';

const spaceshipImage = new Image();
spaceshipImage.src = 'spaceship.png';

// Set of currently pressed keys
const keys = new Set();

// Handle keydown and keyup events
window.addEventListener('keydown', (e) => {
    keys.add(e.key);
    if(e.key === ' '){
        spaceship.lasers.push(new Laser(spaceship.x + SPACESHIP_WIDTH / 2, spaceship.y));
    }
});

window.addEventListener('keyup', (e) => {
    keys.delete(e.key);
});

// Game variables
let score = 0;
let lives = 3;
let spaceship;
let aliens = [];
let lasers = [];
let highScore = localStorage.getItem('highScore') || 0;

// Spaceship class
class Spaceship {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.lasers = [];
    }
    
    draw() {
        ctx.drawImage(spaceshipImage, this.x, this.y, SPACESHIP_WIDTH, SPACESHIP_HEIGHT);
    }
}

// Alien class
class Alien {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    draw() {
        ctx.drawImage(alienImage, this.x, this.y, ALIEN_WIDTH, ALIEN_HEIGHT);
    }
}

// Laser class
class Laser {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, LASER_WIDTH, LASER_HEIGHT);
    }
}

// Initialize game objects
function init() {
    score = 0;
    lives = 3;
    spaceship;
    aliens = [];
    lasers = [];
    highScore = localStorage.getItem('highScore') || 0;
    spaceship = new Spaceship(WIDTH / 2, HEIGHT - SPACESHIP_HEIGHT);
    // Initialize aliens
    for (let i = 0; i < 3; i++) {
        aliens.push(new Alien(Math.random() * (WIDTH - ALIEN_WIDTH), 0));
    }
}



// Game loop
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    
    if(keys.has('ArrowLeft') && spaceship.x - SPEED > 0) {
        spaceship.x -= SPEED;
    }
    if(keys.has('ArrowRight') && spaceship.x + SPEED < WIDTH - SPACESHIP_WIDTH) {
        spaceship.x += SPEED;
    }
    
    // Move and draw aliens
    for(let alien of aliens) {
        alien.y += ALIEN_SPEED;
        alien.draw();
        // Check collision with spaceship
        if(collides(alien, spaceship)) {
            lives--;
            resetAlien(alien);
        }
        // Remove alien and reduce lives if it reaches the bottom
        if(alien.y > HEIGHT) {
            lives--;
            resetAlien(alien);
        }
    }
    
    // Move and draw lasers
    for(let laser of spaceship.lasers) {
        laser.y -= LASER_SPEED;
        laser.draw();
        // Check collision with aliens
        for(let alien of aliens) {
            if(collides(laser, alien)) {
                score++;
                resetAlien(alien);
                spaceship.lasers.splice(spaceship.lasers.indexOf(laser), 1);
                break;
            }
        }
    }
    
    // Draw spaceship
    spaceship.draw();
    
    // Update score and lives
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('lives').textContent = `Lives: ${lives}`;
    document.getElementById('highScore').textContent = `High Score: ${highScore}`;

    
    // End game if out of lives
    if(lives <= 0) {
        alert('Game Over!');
        if(score > highScore) {
            highScore = score;
            localStorage.setItem('highScore', highScore);
        }
        init();
    }
    
    // Request next animation frame
    requestAnimationFrame(gameLoop);
}

// Check collision between two objects
function collides(obj1, obj2) {
    return obj1.x < obj2.x + ALIEN_WIDTH &&
           obj1.x + LASER_WIDTH > obj2.x &&
           obj1.y < obj2.y + ALIEN_HEIGHT &&
           obj1.y + LASER_HEIGHT > obj2.y;
}

// Reset alien position
function resetAlien(alien) {
    alien.x = Math.random() * (WIDTH - ALIEN_WIDTH);
    alien.y = 0;
}

// Start the game
init();
gameLoop();
