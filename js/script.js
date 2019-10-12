var config = {
	type: Phaser.AUTO,
	width: 800,
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
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

function preload() {
	this.load.image('player', 'img/player.png')
	this.load.image('sheet', 'img/sheet.png')
	this.load.image('bola','img/bola.png')

}

function create() {
	let sheet = this.physics.add.image(1800,300,'sheet')
	sheet.setVelocityX(-250);
	this.add.image(400,300,'player')

	setTimeout(() => {
		let quadrado = this.physics.add.image(1400,680,'bola')
		quadrado.setVelocityX(-250);
	}, 0);
	
}

function update() {}