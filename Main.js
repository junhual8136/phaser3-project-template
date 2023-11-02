class Main extends Phaser.Scene {
    constructor(){
        super(Main);
    }

    preload() {
        this.load.image('cem', 'tiles/cem.png')
        this.load.tilemapTiledJSON('cem', 'tiles/cem.json')


    }


    create() {
        // for sprites
        this.add.image(375,300, 'cem')



    }

}


export default Main
