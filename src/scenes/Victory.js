import { CST } from "../CST";
import { MenuitemAnimation } from "../scenes/MenuScene"
// import { score } from "../scenes/MusicaStar"
var score = 300000
export class VictoryScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.VICTORY
        })
    }
    create() {
        this.sound.stopAll()
        // SFX
        var menuSFX = this.sound.add('menuSFX')
        var menuSFX_click = this.sound.add('menuSFX_click')
        // Victory txt
        this.add.text(600, 50, 'Victory', {
            fontFamily: 'pixel',
            fontSize: '150px',
            fill: '#FFFFFF',
        }).setOrigin(0.5, 0);
        // Score
        var scoreTxt
        scoreTxt = this.add.text(600, 300, `Score: 0`, {
            fontFamily: 'pixel',
            fontSize: '50px',
            fill: '#FFFFFF',
        }).setOrigin(0.5, 0);
        // Score pontos animação
        var i = 1
        var z = 2
        var anim = setInterval(() => {
            if (i <= score) {
                scoreTxt.setText(`Score: ${i}`)
                i += 1 * z
                z+= 3
            } else {
                clearInterval(anim)
                scoreTxt.setText(`Score: ${score}`)
                // Buttons
                let back_button = this.add.image(600, 520, 'back')
                MenuitemAnimation(back_button, 600, 520, menuSFX, menuSFX_click)
                back_button.on('pointerup', () => {
                    location.reload()
                })
            }
        }, 16);
    }
}