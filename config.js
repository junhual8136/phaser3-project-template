import Main from "./Main.js"

const config = {
    width:512,
    height:512,
    backgroundColor:'#333333',
    type: Phaser.AUTO,
    parent: 'game',
    scene:[Main],
    scale: {
        zoom:2,
    },
    physics: {
        default: 'matter',
        matter: {
            debug:true,
            gravity:{y:0},
        }
    },

}

new Phaser.Game(config);