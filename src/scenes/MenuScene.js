import { CST } from "../CST";
export class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.MENU
        })
    }
    init() { }
    preload() {

    }
    create() {
        let a = 2

        // bg music
        this.add.image(600, 500, 'options')
        let backgroundMusic = this.sound.add('title_music');
        backgroundMusic.play()
        this.sound.pauseOnBlur = false;
        backgroundMusic.loop = true


        // botão play
        let playButton = this.add.image(600, 400, 'play')
        playButton.setInteractive()
        // mouse em cima
        playButton.on('pointerover', () => {
            a % 2 != 0 ? playButton.x = 610 : playButton.x = 590
            a++
            setTimeout(() => {
                playButton.x = 600
            }, 150);
        })
        // mouse fora
        playButton.on('pointerout', () => {
            playButton.x = 600
            playButton.y = 400
        })
        // mouse click down
        playButton.on('pointerdown', () => {
            playButton.y = 405
        })
        // mouse click up
        playButton.on('pointerup', () => {
            playButton.y = 400
            backgroundMusic.stop()
            this.scene.start(CST.SCENES.PLAY)
        })
    }
}