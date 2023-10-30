// export default class Main extends Phaser.Scene {
//     constructor() {
//         super("Main");
//     }

const game = new Phaser.Game(config);

     function preload() {
        this.load.image('MapEditor', 'tiles/test_map.json')
        this.load.tilemapTiledJSON('MapEditor', 'tiles/test_map.json')
    }
    create() {
	this.add.image(0, 0, 'base_tiles')
    }
}






