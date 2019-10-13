var config = {
	type: Phaser.AUTO,
	width: 1800,
	height: 600,
	physics: {
		default: 'Arcade',
		arcade: {
			gravity: {
				x: -2
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
	this.load.image('sheet1', 'img/sheetinicio.png')
	this.load.image('sheet2', 'img/sheetpadrao.png')
	this.load.image('bola', 'img/bola.png')
	this.load.image('bolinha','img/bolinha.png')
	this.load.image('bolinha1','img/bolinhaReta.png')

}

function create() {
	// primeira sheet
	this.physics.add.image(1800, 300, 'sheet1')

	// sheets padrao
	this.physics.add.image(2700, 300, 'sheet2')
	this.physics.add.image(3500, 300, 'sheet2')

	// jogador (barra preta)
	this.add.image(400, 300, 'player')

	// bolas
	this.physics.add.image(1530, 195, 'bolinha1')

	// quadrado.setVelocityX(-250);

}

function update() {}