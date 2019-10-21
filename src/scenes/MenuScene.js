import { CST } from "../CST";
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.MENU
        })
    }
    init(){
        console.log("I GOT IT")
    }
    preload () {

    }
    create() {
        this.add.image(600,400, 'play')
        this.add.image(600,500, 'options')

        this.sound.pauseOnBlur = false;
        this.sound.play("title_music", {
            loop: true
        })
    }
}