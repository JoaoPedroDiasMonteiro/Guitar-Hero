var config = {
	type: Phaser.AUTO,
	width: 1800,
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

var player
var game = new Phaser.Game(config);

function preload() {
	this.load.image('player', 'img/player.png')
	this.load.image('sheet1', 'img/sheetinicio.png')
	this.load.image('sheet2', 'img/sheetpadrao.png')
	this.load.image('bola', 'img/bola.png')
	this.load.image('bolinha', 'img/bolinha.png')
	this.load.image('bolinha1', 'img/bolinhaReta.png')
}

function create() {
	// sheets
	let sheets = this.physics.add.group()
	// sheet com clavas
	sheets.create(1800,300,`sheet1`)
	// sheets normais
	sheets.create(2700,300,`sheet2`)
	sheets.create(3500,300,`sheet2`)
	sheets.create(4300,300,`sheet2`)
	sheets.create(5100,300,`sheet2`)
	sheets.create(5900,300,`sheet2`)
	sheets.create(6700,300,`sheet2`)
	sheets.create(7500,300,`sheet2`)
	sheets.create(8300,300,`sheet2`)
	sheets.create(9100,300,`sheet2`)
	sheets.create(9900,300,`sheet2`)
	sheets.create(10700,300,`sheet2`)
	// config
	sheets.setVelocityX(-70);

	// jogador (barra preta)
	let player = this.physics.add.image(400, 300, 'player')
	// config
	player.setCollideWorldBounds(true);


	// teclas
	cursors = this.input.keyboard.createCursorKeys();
	// interações
	this.physics.add.overlap(player, dos, teste, null, this);
}

function update() {
	if (cursors.up.isDown) {}
}

function teste(player, dos) {
	if (cursors.up.isDown) {
		dos.disableBody(true, true);
	}
}