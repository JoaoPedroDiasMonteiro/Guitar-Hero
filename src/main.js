/** @type {import("../typings/phaser")} */

import { LoadScene } from "./scenes/LoadScene";
import { MenuScene } from "./scenes/MenuScene";
import { MusicaStar } from "./scenes/MusicaStar";
import { MenuOptionsScene } from "./scenes/MenuOptionsScene";

var AAconfig = localStorage.getItem('AA')
// Se o valor de AA for igual a true desativa o PixelArt, se não ativa. Por padrão PixelArt é desativado
if (AAconfig == 'true') { AAconfig = false } else if (AAconfig == 'false') { AAconfig = true } else { AAconfig = false }

let game = new Phaser.Game({
    width: 1200,
    height: 600,
    scale: {
        // mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
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
        LoadScene, MenuScene, MenuOptionsScene, MusicaStar
    ],
    render: {
        pixelArt: AAconfig
    }
});