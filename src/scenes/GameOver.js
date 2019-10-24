import { CST } from "../CST";
import { MenuitemAnimation } from "../scenes/MenuScene"
import { score } from "../scenes/MusicaStar"

export class GameOverScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.GAMEOVER
        })
    }
    create() {
        this.sound.stopAll()
        //SFX FAIL
        var value = Phaser.Math.Between(1, 7);
        let failSFX = this.sound.add(`fail${value}`)
        failSFX.play()
        // SFX MENU
        var menuSFX = this.sound.add('menuSFX')
        var menuSFX_click = this.sound.add('menuSFX_click')
        // timeout para criar os textos
        setTimeout(() => {
            // Game Over
            this.add.text(600, 50, 'Game Over', {
                fontFamily: 'pixel',
                fontSize: '150px',
                fill: '#FFFFFF',
            }).setOrigin(0.5, 0);
            // Score
            this.add.text(600, 300, `Score: ${score}`, {
                fontFamily: 'pixel',
                fontSize: '50px',
                fill: '#FFFFFF',
            }).setOrigin(0.5, 0);
            // Buttons
            let back_button = this.add.image(600, 520, 'back')
            MenuitemAnimation(back_button, 600, 520, menuSFX, menuSFX_click)
            back_button.on('pointerup', () => {
                location.reload()
            })
        }, 500);
    } // < -- Create
}