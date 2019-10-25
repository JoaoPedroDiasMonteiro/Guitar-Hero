import { CST } from "../CST";
import { MenuitemAnimation } from "../scenes/MenuScene"

export class LevelSelect extends Phaser.Scene {
    constructor(){
        super({
            key:CST.SCENES.LEVELSELECT
        })
    }
    create() {
        // SFX Buttons
        var menuSFX = this.sound.add('menuSFX')
        var menuSFX_click = this.sound.add('menuSFX_click')

        // Title TXT
        this.add.text(600, 25, 'Select Level', {
            fontFamily: 'pixel',
            fontSize: '70px',
            fill: '#FFFFFF',
        }).setOrigin(0.5, 0);
        // Phase 1 
        let phase1 = this.add.text(600, 150, '<1. Little Star>', {
            fontFamily: 'pixel',
            fontSize: '45px',
            fill: '#FFFFFF',
        }).setOrigin(0.5, 0);
        MenuitemAnimation(phase1, 600, 150, menuSFX, menuSFX_click)
        // Phase 2 
        let phase2 = this.add.text(600, 210, '<2. Coming soon...>', {
            fontFamily: 'pixel',
            fontSize: '45px',
            fill: '#FFFFFF',
        }).setOrigin(.5, 0);
        MenuitemAnimation(phase2, 600, 210, menuSFX, menuSFX_click)

        // Back Button
        let back_button = this.add.image(600, 520, 'back')
        MenuitemAnimation(back_button, 600, 520, menuSFX, menuSFX_click)
        // on click up function
        back_button.on('pointerup', () => {
            this.scene.start(CST.SCENES.MENU)
        })
    } // < -- Create
}