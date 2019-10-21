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
        let a = 2
        this.add.image(600,500, 'options')

        this.sound.pauseOnBlur = false;
        this.sound.play("title_music", {
            loop: true
        })

        let playButton = this.add.image(600,400, 'play')
        playButton.setInteractive()
        // mouse em cima
        playButton.on('pointerover', ()=> {
            a%2 != 0? playButton.x = 610 : playButton.x = 590 
            a ++
            setTimeout(() => {
                playButton.x = 600
            }, 150);
        })
        // mouse fora
        playButton.on('pointerout', ()=> {
            playButton.x = 600
        })
        // mouse click down
        playButton.on('pointerdown', ()=> {
            playButton.y = 405
            console.log('rooo');
        })
        // mouse click up
        playButton.on('pointerup', ()=> {
            playButton.y = 400
            console.log('rooo');
        })
    }
}