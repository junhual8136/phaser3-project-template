class Main extends Phaser.Scene {
    constructor(){
        super(Main);
    }

    preload() {
        this.load.image('grass', 'tiles/grass.png')
        this.load.tilemapTiledJSON('grass', 'tiles/grass.json')
    }


    create() {
        // for sprites
        this.add.image(0, 0, 'grass')
    }

}


export default Main
