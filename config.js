import Main from "./Main.js"

const config = {
    type: Phaser.AUTO,
    width: 700,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene:[Main]

}

new Phaser.Game(config);