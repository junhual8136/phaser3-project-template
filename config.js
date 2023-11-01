import Main from "./Main.js"

const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 750,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene:[Main]
}

new Phaser.Game(config);