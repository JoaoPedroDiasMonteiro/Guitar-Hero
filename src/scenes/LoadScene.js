import { CST } from '../CST'


export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    }
    init() { }
    preload() {
        this.load.image('player', require('../../assets/image/player.png'))
        this.load.image('sheet1', require('../../assets/image/sheetinicio.png'))
        this.load.image('sheet2', require('../../assets/image/sheetpadrao.png'))
        this.load.image('inimigo', require('../../assets/image/inimigo.png'))
        this.load.image('bolaRisco', require('../../assets/image/bolaRisco.png'))
        this.load.image('bolaRiscoBranco', require('../../assets/image/bolaRiscoBranca.png'))
        this.load.image('risco', require('../../assets/image/risco.png'))

        this.load.image('play', require('../../assets/image/play_button.png'))
        this.load.image('options', require('../../assets/image/options_button.png'))
        this.load.image('AA', require('../../assets/image/AAText.png'))
        this.load.image('back', require('../../assets/image/back.png'))
        this.load.image('true',require( '../../assets/image/true.png'))
        this.load.image('false',require( '../../assets/image/false.png'))
        this.load.image('apply',require( '../../assets/image/apply.png'))
        this.load.image('fullscreen',require( '../../assets/image/fullscreen.png'))


        this.load.audio('star',require( "../../assets/audio/littleStar.mp3"))
        this.load.audio("title_music",require( "../../assets/audio/shuinvy-childhood.mp3"))
        this.load.audio('menuSFX',require( '../../assets/audio/menuSFX_over.mp3'))
        this.load.audio('menuSFX_click',require( '../../assets/audio/menuSFX_click.mp3'))



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
        let backgroundMusic = this.sound.add('title_music');
        backgroundMusic.play()
        this.sound.pauseOnBlur = false;
        backgroundMusic.loop = true
        this.scene.start(CST.SCENES.MENU, 'aaaaa')
    }

}