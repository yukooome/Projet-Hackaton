let config = {
    type: Phaser.AUTO,
    width: window.innerWidth * 0.66,
    height: window.innerHeight,
    parent: 'gameCanvas',
    physics: {
        default: 'arcade'
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    autoCenter: true
};

let game = new Phaser.Game(config);

let data_center;

// Start and end RGB colors
let startColor = { r: 114, g: 210, b: 237 }; // #72d2ed
let endColor = { r: 255, g: 74, b: 55 };     // #FF4A37

function preload() {
    this.load.image('dbIcon', 'assets/Sprites/3DdataCenter.webp');
    this.load.image('tile', 'assets/Sprites/tile-tree-quad.png');
    this.load.image('tileAfter', 'assets/Sprites/tile-end.png');
}

function create() {
    // Set the background color of the camera
    this.cameras.main.setBackgroundColor('#72d2ed');

    // Define the starting position for the tiles
    let startX = config.width / 3; 
    let startY = config.height / 3;

    // Define tile size and spacing between tiles
    let tileSize = 64;
    let imageSize = 30;
    let space = 36; 

    // Number of rows of tiles to generate
    let n = 4; 
    let tiles = [];

    let DataCenter = [];
    let diagonalCoords = generateMatrixCoords(n);

    // Description text
    let text = this.add.text( 
        window.innerWidth / 20, 
        window.innerHeight / 2, 
        'Hello World!', 
        { fontSize: '16px', fill: '#ffffff' }
    );
    text.setAlpha(0);

    // First loop to create the upper part of the pattern
    for (let i = 0; i < n; i++) {
        // Set the starting position for each row
        let x = startX + space * (n - i); 
        let y = startY + i * space;
        
        // Inner loop to create tiles for each row
        for (let j = 0; j <= i; j++) {
            // Add the tile image to the scene
            let tile = this.add.image(x, y, 'tile');
            tile.setOrigin(0.5, 0.5); // Set the anchor point to the center
            tile.setScale(1.5);         // Scale the tile size
            tiles.push(tile);         // Add the tile to the tiles array

            // Move x position to the right for the next tile
            x += space * 2;
        }
    }

    // Second loop to create the lower part of the pattern
    for (let i = n - 2; i >= 0; i--) {
        let x = startX + space * (n - i); 
        let y = startY + (n - 1) * space + (n - 1 - i) * space;
        
        for (let j = i; j >= 0; j--) {
            let tile = this.add.image(x, y, 'tile');
            tile.setOrigin(0.5, 0.5);
            tile.setScale(1.5);
            tiles.push(tile);

            x += space * 2;
        }
    }

    // Add an interactive image representing the data center
    data_center = this.add.image( 
        20, 
        window.innerHeight - 80, 
        'dbIcon').setInteractive();;
    data_center.setOrigin(0, 0);
    data_center.setScale(0.3);

    this.tweens.add({
        targets: data_center, 
        y: '+=5', 
        duration: 1000, 
        ease: 'Sine.inOut', 
        yoyo: true, 
        repeat: -1 
    });

    let currentTileIndex = 0;
    let progress = 0;

    data_center.on('pointerdown', () => {
        if (currentTileIndex < tiles.length) {
            tiles[currentTileIndex].setTexture('tileAfter');

            // Add the new data center
            let coord = diagonalCoords[currentTileIndex];
            let x = 50 + coord.x * imageSize;
            let y = 50 + coord.y * imageSize;
    
            DataCenter[currentTileIndex] = this.add.image(x, y, 'dbIcon');
            DataCenter[currentTileIndex].setScale(0.3);

            currentTileIndex++; 

            // Calculate red and green values based on the progress
            progress = currentTileIndex / tiles.length;

            let red = Math.floor(startColor.r + (endColor.r - startColor.r) * progress);
            let green = Math.floor(startColor.g + (endColor.g - startColor.g) * progress);
            let blue = Math.floor(startColor.b + (endColor.b - startColor.b) * progress);

            // Update the background color gradually using Phaser's setBackgroundColor method
            this.cameras.main.setBackgroundColor(`rgb(${red}, ${green}, ${blue})`);

            // if the color has been changed, show the text
            let currentColor = this.cameras.main.backgroundColor.color;
            let targetColor = parseInt('FF4A37', 16);

            if ( targetColor == currentColor ) {
                this.tweens.add({
                    targets: text,    
                    alpha: 1,         
                    duration: 1000,   
                    ease: 'Linear',
                    delay: 1000,   
                    onComplete: () => {
                        console.log("Text has fully appeared!");
                    }
                });
            }
        } else {
            console.log("The ground has been changed");
        }
    });

}

function update() {

}

function generateMatrixCoords(n) {
    let coords = []; 

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            coords.push({ x: i, y: j });
        }
    }

    return coords; 
}



