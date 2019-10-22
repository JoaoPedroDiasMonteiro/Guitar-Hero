/** @type {import("../typings/phaser")} */ 

import {LoadScene} from "./scenes/LoadScene";
import {MenuScene} from "./scenes/MenuScene";
import {MusicaStar} from "./scenes/MusicaStar";
import { OptionsScene } from "./scenes/OptionsScene";

let game = new Phaser.Game({
    width: 1200,
    height: 600,
    physics: {
		default: 'Arcade',
		arcade: {
			gravity: {
				x: 0
			},
			debug: false
		}
	},
    scene:[
        LoadScene, MenuScene, OptionsScene, MusicaStar
    ],
    render:{
        pixelArt: false
    }
});