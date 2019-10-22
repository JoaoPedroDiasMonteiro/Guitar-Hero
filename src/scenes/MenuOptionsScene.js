import { CST } from "../CST";
import { MenuitemAnimation } from "../scenes/MenuScene"
export class MenuOptionsScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.OPTIONS
        })
    }
    create() {
        let imageAA = this.add.image(600, 3000, 'true')
        if (localStorage.getItem('AA') == 'true') {
            imageAA = this.add.image(600, 300, 'true')
        } else if (localStorage.getItem('AA') == 'false') {
            imageAA = this.add.image(600, 300, 'false')
        } else {
            localStorage.setItem('AA', true)
            imageAA = this.add.image(600, 300, 'true')
        }
        let AA_Button = this.add.image(600, 200, 'AA')
        // on click up function
        MenuitemAnimation(AA_Button, 600, 200)
        AA_Button.on('pointerdown', () => {
            var AA = localStorage.getItem('AA')
            if (AA == 'false') {
                localStorage.setItem('AA', 'true')
                imageAA.destroy()
                imageAA = this.add.image(600, 300, 'true')
            } else if (AA == 'true') {
                imageAA.destroy()
                imageAA = this.add.image(600, 300, 'false')
                localStorage.setItem('AA', 'false')
            }
        })


        let back_button = this.add.image(1050, 520, 'back')
        MenuitemAnimation(back_button, 1050, 520)
        // on click up function
        back_button.on('pointerup', () => {
            this.scene.start(CST.SCENES.MENU)
            this.sound.stopAll()
        })

        let apply_button = this.add.image(150,520,'apply')
        MenuitemAnimation(apply_button, 150, 520)
        apply_button.on('pointerup', () => {
            location.reload()
        })


    } // < -- Create
}