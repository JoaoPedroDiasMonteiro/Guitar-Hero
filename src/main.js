/** @type {import("../typings/phaser")} */ 

import {LoadScene} from "./scenes/LoadScene";
import {MenuScene} from "./scenes/MenuScene";
let game = new Phaser.Game({
    width: 1200,
    height: 600,
    scene:[
        LoadScene, MenuScene
    ],
    render:{
        pixelArt: true
    }
});