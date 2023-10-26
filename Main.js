export default class Main extends Phaser.Scene {
    constructor(){
        super("scene1");
    }
    preload() {
        console.log("preload");
    }
    create(){
        console.log("create")
    }
    update(){
        console.log("update")
    }
}