// import Main from "./Main.js"

const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 1600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene:[Main]

}

new Phaser.Game(config);