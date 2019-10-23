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

        // sfx
        let menuSFX = this.sound.add('menuSFX')
        let menuSFX2 = this.sound.add('menuSFX_click')

        // botão play
        let playButton = this.add.image(600, 400, 'play')
        MenuitemAnimation(playButton, 600, 400, menuSFX, menuSFX2)
        playButton.setInteractive()
        // mouse click up
        playButton.on('pointerup', () => {
            this.sound.stopAll()
            this.scene.start(CST.SCENES.PLAY)
        })

        // option button
        let optionsButton = this.add.image(600, 500, 'options')
        MenuitemAnimation(optionsButton, 600, 500, menuSFX, menuSFX2)
        // mouse click up
        optionsButton.on('pointerup', () => {
            this.scene.start(CST.SCENES.OPTIONS)
        })

    } // < --  create 
}
export function MenuitemAnimation(img, x, y, soundSFX, soundSFX2, a = 2) {
    img.setInteractive()
    // mouse em cima
    img.on('pointerover', () => {
        soundSFX.play()
        a % 2 != 0 ? img.x = x + 10 : img.x = x - 10
        a++
        setTimeout(() => {
            img.x = x
        }, 250);
    })
    // mouse fora
    img.on('pointerout', () => {
        img.x = x
        img.y = y
    })
    // mouse click down
    img.on('pointerdown', () => {
        img.y = y + 5
    })
    // mouse click up
    img.on('pointerup', () => {
        img.y = y
        soundSFX2.play()
    })
}