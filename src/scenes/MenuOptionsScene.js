import { CST } from "../CST";
import { MenuitemAnimation } from "../scenes/MenuScene"
export class MenuOptionsScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.OPTIONS
        })
    }
    create() {
        var menuSFX = this.sound.add('menuSFX')
        var menuSFX_click = this.sound.add('menuSFX_click')


        let imageFullscreen = this.add.image(600, 3000, 'true')
        if (localStorage.getItem('fscreen') == 'true') {
            imageFullscreen = this.add.image(600, 200, 'true')
        } else if (localStorage.getItem('fscreen') == 'false') {
            imageFullscreen = this.add.image(600, 200, 'false')
        } else {
            localStorage.setItem('fscreen', false)
            imageFullscreen = this.add.image(600, 200, 'true')
        }
        //
        let fullscreen = this.add.image(600, 100, 'fullscreen')
        MenuitemAnimation(fullscreen, 600, 100, menuSFX, menuSFX_click)
        // on click down function
        fullscreen.on('pointerup', () => {
            var fscreen = localStorage.getItem('fscreen')
            if (fscreen == 'false') {
                localStorage.setItem('fscreen', 'true')
                imageFullscreen.destroy()
                imageFullscreen = this.add.image(600, 200, 'true')
            } else if (fscreen == 'true') {
                imageFullscreen.destroy()
                imageFullscreen = this.add.image(600, 200, 'false')
                localStorage.setItem('fscreen', 'false')
            }
        })


        let imageAA = this.add.image(600, 3000, 'true')
        if (localStorage.getItem('AA') == 'true') {
            imageAA = this.add.image(600, 400, 'true')
        } else if (localStorage.getItem('AA') == 'false') {
            imageAA = this.add.image(600, 400, 'false')
        } else {
            localStorage.setItem('AA', true)
            imageAA = this.add.image(600, 400, 'true')
        }
        let AA_Button = this.add.image(600, 300, 'AA')
        // on click up function
        MenuitemAnimation(AA_Button, 600, 300, menuSFX, menuSFX_click)
        AA_Button.on('pointerup', () => {
            var AA = localStorage.getItem('AA')
            if (AA == 'false') {
                localStorage.setItem('AA', 'true')
                imageAA.destroy()
                imageAA = this.add.image(600, 400, 'true')
            } else if (AA == 'true') {
                imageAA.destroy()
                imageAA = this.add.image(600, 400, 'false')
                localStorage.setItem('AA', 'false')
            }
        })


        let back_button = this.add.image(1050, 520, 'back')
        MenuitemAnimation(back_button, 1050, 520, menuSFX, menuSFX_click)
        // on click up function
        back_button.on('pointerup', () => {
            this.scene.start(CST.SCENES.MENU)
        })

        let apply_button = this.add.image(150, 520, 'apply')
        MenuitemAnimation(apply_button, 150, 520, menuSFX, menuSFX_click)
        apply_button.on('pointerup', () => {
            location.reload()
        })


    } // < -- Create
}