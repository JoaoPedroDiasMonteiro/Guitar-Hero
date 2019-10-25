import { CST } from '../CST'


export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    }
    init() { }
    preload() {
        // GAMEPLAY
        this.load.image('player', require('../../assets/image/player.png'))
        this.load.image('sheet1', require('../../assets/image/sheetinicio.png'))
        this.load.image('sheet2', require('../../assets/image/sheetpadrao.png'))
        this.load.image('inimigo', require('../../assets/image/inimigo.png'))
        this.load.image('bolaRisco', require('../../assets/image/bolaRisco.png'))
        this.load.image('bolaRiscoBranco', require('../../assets/image/bolaRiscoBranca.png'))
        this.load.image('risco', require('../../assets/image/risco.png'))
        // Game Menus
        this.load.image('play', require('../../assets/image/play_button.png'))
        this.load.image('options', require('../../assets/image/options_button.png'))
        this.load.image('AA', require('../../assets/image/AAText.png'))
        this.load.image('back', require('../../assets/image/back.png'))
        this.load.image('true', require('../../assets/image/true.png'))
        this.load.image('false', require('../../assets/image/false.png'))
        this.load.image('apply', require('../../assets/image/apply.png'))
        this.load.image('fullscreen', require('../../assets/image/fullscreen.png'))

        // music
        this.load.audio('star', require("../../assets/audio/littleStar.mp3"))
        this.load.audio("title_music", require("../../assets/audio/shuinvy-childhood.mp3"))
        // SFX
        this.load.audio('menuSFX', require('../../assets/audio/menuSFX_over.mp3'))
        this.load.audio('menuSFX_click', require('../../assets/audio/menuSFX_click.mp3'))
        // SFX FAIL
        this.load.audio('fail1', require('../../assets/audio/SFX/Cataclysmic_Molten_Core_Sting.mp3'))
        this.load.audio('fail2', require('../../assets/audio/SFX/Day_of_Recon_Sting.mp3'))
        this.load.audio('fail3', require('../../assets/audio/SFX/Der_Kleber_Sting.mp3'))
        this.load.audio('fail4', require('../../assets/audio/SFX/Double_Helix_Sting.mp3'))
        this.load.audio('fail5', require('../../assets/audio/SFX/Earthy_Crust_Sting.mp3'))
        this.load.audio('fail6', require('../../assets/audio/SFX/Extinction_Level_Event_Sting.mp3'))
        this.load.audio('fail7', require('../../assets/audio/SFX/Galactic_Damages_Sting.mp3'))
        // SFX VICTORY
        this.load.audio('win1', require('../../assets/audio/SFX/Victory/1940_s_Slow_Dance_Sting.mp3'))
        this.load.audio('win2', require('../../assets/audio/SFX/Victory/Baroque_Coffee_House_Sting.mp3'))
        this.load.audio('win3', require('../../assets/audio/SFX/Victory/Big_Horns_Intro.mp3'))
        this.load.audio('win4', require('../../assets/audio/SFX/Victory/Dead_Reckoning_Sting.mp3'))
        this.load.audio('win5', require('../../assets/audio/SFX/Victory/Granite_Sting.mp3'))
        this.load.audio('win6', require('../../assets/audio/SFX/Victory/Light_Sting.mp3'))
        this.load.audio('win7', require('../../assets/audio/SFX/Victory/News_Theme.mp3'))
        this.load.audio('win8', require('../../assets/audio/SFX/Victory/Rock_Intro_4.mp3'))
        this.load.audio('win9', require('../../assets/audio/SFX/Victory/Timed_Out_Sting.mp3'))



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
        this.scene.start(CST.SCENES.MENU)
    }

}