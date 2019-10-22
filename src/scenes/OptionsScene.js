import { CST } from "../CST";
export class OptionsScene extends Phaser.Scene { 
    constructor(){
        super({
            key: CST.SCENES.OPTIONS
        })
    }
    create() {
        let AA = this.add.image(600, 200, 'AA')
        let itrue = this.add.image(600, 300, 'true')
        let ifalse = this.add.image(600, 400, 'false')
        let back = this.add.image(600, 500, 'back')
    }
}