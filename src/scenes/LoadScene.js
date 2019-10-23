import { CST } from '../CST'
import { MenuScene } from './MenuScene'


export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    }
    init() {}
    preload() {
        this.load.image('player', './assets/image/player.png')
        this.load.image('sheet1', './assets/image/sheetinicio.png')
        this.load.image('sheet2', './assets/image/sheetpadrao.png')
        this.load.image('inimigo', './assets/image/inimigo.png')
        this.load.image('bolaRisco', './assets/image/bolaRisco.png')
        this.load.image('bolaRiscoBranco', './assets/image/bolaRiscoBranca.png')
        this.load.image('risco', './assets/image/risco.png')

        this.load.image('play', './assets/image/play_button.png')
        this.load.image('options', './assets/image/options_button.png')
        this.load.image('AA', './assets/image/AAText.png')
        this.load.image('back', './assets/image/back.png')
        this.load.image('true', './assets/image/true.png')
        this.load.image('false', './assets/image/false.png')
        this.load.image('apply', './assets/image/apply.png')
        this.load.image('fullscreen', './assets/image/fullscreen.png')


        this.load.audio('star', "../assets/audio/littleStar.mp3")
        this.load.audio("title_music", "../assets/audio/shuinvy-childhood.mp3");


        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //white
            }
        })

        this.load.on('progress', (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50)
        })

        this.load.on('complete', () => {
            // this.scene.start(CST.SCENES.MENU, 'aaaaa')
        })
    }
    create() {
        this.scene.start(CST.SCENES.MENU, 'aaaaa')
    }

}