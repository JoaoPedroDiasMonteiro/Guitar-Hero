/** @type {import("../typings/phaser")} */

import { LoadScene } from "./scenes/LoadScene";
import { MenuScene } from "./scenes/MenuScene";
import { MusicaStar } from "./scenes/MusicaStar";
import { MenuOptionsScene } from "./scenes/MenuOptionsScene";
import { GameOverScene } from "./scenes/GameOver";
import { VictoryScene } from "./scenes/Victory";
import { LevelSelect } from "./scenes/SelectScene";



var AAconfig = localStorage.getItem('AA')
// Se o valor de AA for igual a true desativa o PixelArt, se não ativa. Por padrão PixelArt é desativado
if (AAconfig == 'true') { AAconfig = false } else if (AAconfig == 'false') { AAconfig = true } else { AAconfig = false }

var fullscreen = localStorage.getItem('fscreen')
if (fullscreen == 'true') {
    fullscreen = Phaser.Scale.WIDTH_CONTROLS_HEIGHT
} else {
    fullscreen = ''
}

let game = new Phaser.Game({
    width: 1200,
    height: 600,
    parent: 'game',
    scale: {
        mode: fullscreen,
    },
    physics: {
        default: 'Arcade',
        arcade: {
            gravity: {
                x: 0
            },
            debug: false
        }
    },
    scene: [
        LoadScene, MenuScene, MenuOptionsScene, MusicaStar, GameOverScene, VictoryScene, LevelSelect
    ],
    render: {
        pixelArt: AAconfig
    }
});