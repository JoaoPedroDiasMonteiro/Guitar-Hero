var config = {
	type: Phaser.AUTO,
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
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

let key
document.addEventListener('keydown', function () {
	key = event.keyCode
})
document.addEventListener('keyup', function () {
	key = 0
})

function preload() {
	this.load.image('player', 'img/player.png')
	this.load.image('sheet1', 'img/sheetinicio.png')
	this.load.image('sheet2', 'img/sheetpadrao.png')
	this.load.image('bola', 'img/bola.png')
	this.load.image('bolinha', 'img/bolinha.png')
	this.load.image('bolinha1', 'img/bolinhaReta.png')
	this.load.audio('littlestar', 'music/littleStar.mp3')
}

function create() {

	var music = this.sound.add('littlestar');
	music.play();

	setTimeout(() => {
		// sheets
		let sheets = this.physics.add.group()
		// sheet com clavas
		sheets.create(1800, 300, `sheet1`)
		// sheets normais
		sheets.create(2700, 300, `sheet2`)
		sheets.create(3500, 300, `sheet2`)
		sheets.create(4300, 300, `sheet2`)
		sheets.create(5100, 300, `sheet2`)
		sheets.create(5900, 300, `sheet2`)
		sheets.create(6700, 300, `sheet2`)
		sheets.create(7500, 300, `sheet2`)
		sheets.create(8300, 300, `sheet2`)
		sheets.create(9100, 300, `sheet2`)
		sheets.create(9900, 300, `sheet2`)
		sheets.create(10700, 300, `sheet2`)
		// config
		sheets.setVelocityX(-267);

		// jogador (barra preta)
		let player = this.physics.add.image(400, 300, 'player')
		// config
		player.setCollideWorldBounds(true);

		// bolas
		let dó = this.physics.add.group()
		let sol = this.physics.add.group()
		let la = this.physics.add.group()
		let fa = this.physics.add.group()
		let mi = this.physics.add.group()
		let re = this.physics.add.group()

		dó.create(1580, 268, 'bolinha1')
		dó.create(1780, 268, 'bolinha1')
		sol.create(1980, 195, 'bolinha1')
		sol.create(2180, 195, 'bolinha1')
		//
		la.create(2380, 176, 'bolinha1')
		la.create(2580, 176, 'bolinha1')
		sol.create(2780, 195, 'bolinha1')
		//
		fa.create(3180, 213, 'bolinha1')
		fa.create(3380, 213, 'bolinha1')
		mi.create(3580, 232, 'bolinha1')
		mi.create(3780, 232, 'bolinha1')
		//
		re.create(3980, 250, 'bolinha1')
		re.create(4180, 250, 'bolinha1')
		dó.create(4380, 268, 'bolinha1')
		// segunda linha
		//
		sol.create(4780, 195, 'bolinha1')
		sol.create(4980, 195, 'bolinha1')
		fa.create(5180, 213, 'bolinha1')
		fa.create(5380, 213, 'bolinha1')
		//
		mi.create(5580, 232, 'bolinha1')
		mi.create(5780, 232, 'bolinha1')
		re.create(5980, 250, 'bolinha1')
		//
		sol.create(6380, 195, 'bolinha1')
		sol.create(6580, 195, 'bolinha1')
		fa.create(6780, 213, 'bolinha1')
		fa.create(6980, 213, 'bolinha1')
		//
		mi.create(7180, 232, 'bolinha1')
		mi.create(7380, 232, 'bolinha1')
		re.create(7580, 250, 'bolinha1')
		// terceira linha
		//
		dó.create(7980, 268, 'bolinha1')
		dó.create(8180, 268, 'bolinha1')
		sol.create(8380, 195, 'bolinha1')
		sol.create(8580, 195, 'bolinha1')
		//
		la.create(8780, 176, 'bolinha1')
		la.create(8980, 176, 'bolinha1')
		sol.create(9180, 195, 'bolinha1')
		//
		fa.create(9580, 213, 'bolinha1')
		fa.create(9780, 213, 'bolinha1')
		mi.create(9980, 232, 'bolinha1')
		mi.create(10180, 232, 'bolinha1')
		//
		re.create(10380, 250, 'bolinha1')
		re.create(10580, 250, 'bolinha1')
		dó.create(10780, 268, 'bolinha1')

		//  configs
		dó.setVelocityX(-267)
		sol.setVelocityX(-267)
		la.setVelocityX(-267)
		fa.setVelocityX(-267)
		mi.setVelocityX(-267)
		re.setVelocityX(-267)

		// teclas
		cursors = this.input.keyboard.createCursorKeys();

		// interações
		this.physics.add.overlap(player, dó, key_Q)
		this.physics.add.overlap(player, re, key_W)
		this.physics.add.overlap(player, mi, key_E)
		this.physics.add.overlap(player, fa, key_R)
		this.physics.add.overlap(player, sol, key_T)
		this.physics.add.overlap(player, la, key_Y)

	}, 7800);

}

function update() {

}

// 
function key_Q(player, nota) {
	key == 81 ? nota.disableBody(true, true):''
}

function key_W(player, nota) {
	key == 87 ? nota.disableBody(true, true) : ''
}

function key_E(player, nota) {
	key == 69 ? nota.disableBody(true, true) : ''
}

function key_R(player, nota) {
	key == 82 ? nota.disableBody(true, true) : ''
}

function key_T(player, nota) {
	key == 84 ? nota.disableBody(true, true) : ''
}

function key_Y(player, nota) {
	key == 89 ? nota.disableBody(true, true) : ''
}
// deixa anotado isso aqui, vai que né
// this.input.keyboard.on('keydown_Q', function () {
// })