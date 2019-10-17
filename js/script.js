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
var key, scoreText
var score = 0;
var scoreMulti = 1

var game = new Phaser.Game(config);

document.addEventListener('keydown', function () {
	key = event.keyCode
})
document.addEventListener('keyup', function () {
	key = 0
})
// para colocar bolinhas
let fim = 21980
// para colocar sheets
let fimsheet = 29900

function preload() {
	this.load.image('player', 'img/player.png')
	this.load.image('sheet1', 'img/sheetinicio.png')
	this.load.image('sheet2', 'img/sheetpadrao.png')
	this.load.image('inimigo', 'img/inimigo.png')
	this.load.image('bolaRisco', 'img/bolaRisco.png')
	this.load.image('bolaRiscoBranco', 'img/bolaRiscoBranca.png')
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
		// espaço em branco V
		sheets.create(11500, 300, `sheet2`)
		sheets.create(12300, 300, `sheet2`)
		// página sheet V
		sheets.create(13100, 300, `sheet2`)
		sheets.create(13900, 300, `sheet2`)
		sheets.create(14700, 300, `sheet2`)
		sheets.create(15500, 300, `sheet2`)
		sheets.create(16300, 300, `sheet2`)
		sheets.create(17100, 300, `sheet2`)
		sheets.create(17900, 300, `sheet2`)
		sheets.create(18700, 300, `sheet2`)
		sheets.create(19500, 300, `sheet2`)
		sheets.create(20300, 300, `sheet2`)
		sheets.create(21100, 300, `sheet2`)
		//
		sheets.create(21900, 300, `sheet2`)
		sheets.create(22700, 300, `sheet2`)
		sheets.create(23500, 300, `sheet2`)
		sheets.create(24300, 300, `sheet2`)
		sheets.create(25100, 300, `sheet2`)
		sheets.create(25900, 300, `sheet2`)
		sheets.create(26700, 300, `sheet2`)
		sheets.create(27500, 300, `sheet2`)
		sheets.create(28300, 300, `sheet2`)
		sheets.create(29100, 300, `sheet2`)
		sheets.create(29900, 300, `sheet2`), fimsheet += 800
		//
		sheets.create(fimsheet, 300, `sheet2`), fimsheet += 800
		sheets.create(fimsheet, 300, `sheet2`), fimsheet += 800
		sheets.create(fimsheet, 300, `sheet2`), fimsheet += 800
		sheets.create(fimsheet, 300, `sheet2`), fimsheet += 800
		sheets.create(fimsheet, 300, `sheet2`), fimsheet += 800

		// config
		sheets.setVelocityX(-267);

		var inimigo = this.physics.add.staticGroup()
		inimigo.create(300, 300, 'inimigo')

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

		dó.create(1580, 268, 'bolaRisco').setOrigin(0.5, 0.86)
		dó.create(1780, 268, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(1980, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(2180, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		//
		la.create(2380, 176, 'bolaRisco').setOrigin(0.5, 0.86)
		la.create(2580, 176, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(2780, 195, 'bolaRiscoBranco').setOrigin(0.5, 0.86)
		//
		fa.create(3180, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		fa.create(3380, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		mi.create(3580, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		mi.create(3780, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		//
		re.create(3980, 250, 'bolaRisco').setOrigin(0.5, 0.86)
		re.create(4180, 250, 'bolaRisco').setOrigin(0.5, 0.86)
		dó.create(4380, 268, 'bolaRiscoBranco').setOrigin(0.5, 0.86)
		// segunda linha
		//
		sol.create(4780, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(4980, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		fa.create(5180, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		fa.create(5380, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		//
		mi.create(5580, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		mi.create(5780, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		re.create(5980, 250, 'bolaRiscoBranco').setOrigin(0.5, 0.86)
		//
		sol.create(6380, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(6580, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		fa.create(6780, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		fa.create(6980, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		//
		mi.create(7180, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		mi.create(7380, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		re.create(7580, 250, 'bolaRiscoBranco').setOrigin(0.5, 0.86)
		// terceira linha
		//
		dó.create(7980, 268, 'bolaRisco').setOrigin(0.5, 0.86)
		dó.create(8180, 268, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(8380, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(8580, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		//
		la.create(8780, 176, 'bolaRisco').setOrigin(0.5, 0.86)
		la.create(8980, 176, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(9180, 195, 'bolaRiscoBranco').setOrigin(0.5, 0.86)
		//
		fa.create(9580, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		fa.create(9780, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		mi.create(9980, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		mi.create(10180, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		//
		re.create(10380, 250, 'bolaRisco').setOrigin(0.5, 0.86)
		re.create(10580, 250, 'bolaRisco').setOrigin(0.5, 0.86)
		dó.create(10780, 268, 'bolaRiscoBranco').setOrigin(0.5, 0.86)

		//
		// part 2 vruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuum
		//

		dó.create(12780, 268, 'bolaRisco').setOrigin(0.5, 0.86)
		dó.create(12980, 268, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(13180, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(13380, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		//
		la.create(13580, 176, 'bolaRisco').setOrigin(0.5, 0.86)
		la.create(13780, 176, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(13980, 195, 'bolaRiscoBranco').setOrigin(0.5, 0.86)
		//
		fa.create(14380, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		fa.create(14580, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		mi.create(14780, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		mi.create(14980, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		//
		re.create(15180, 250, 'bolaRisco').setOrigin(0.5, 0.86)
		re.create(15380, 250, 'bolaRisco').setOrigin(0.5, 0.86)
		dó.create(15580, 268, 'bolaRiscoBranco').setOrigin(0.5, 0.86)
		// segunda linha
		//
		sol.create(15980, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(16180, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		fa.create(16380, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		fa.create(16580, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		//
		mi.create(16780, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		mi.create(16980, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		re.create(17180, 250, 'bolaRiscoBranco').setOrigin(0.5, 0.86)
		//
		sol.create(17580, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(17780, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		fa.create(17980, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		fa.create(18180, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		//
		mi.create(18380, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		mi.create(18580, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		re.create(18780, 250, 'bolaRiscoBranco').setOrigin(0.5, 0.86)
		// terceira linha
		//
		dó.create(19180, 268, 'bolaRisco').setOrigin(0.5, 0.86)
		dó.create(19380, 268, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(19580, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(19780, 195, 'bolaRisco').setOrigin(0.5, 0.86)
		//
		la.create(19980, 176, 'bolaRisco').setOrigin(0.5, 0.86)
		la.create(20180, 176, 'bolaRisco').setOrigin(0.5, 0.86)
		sol.create(20380, 195, 'bolaRiscoBranco').setOrigin(0.5, 0.86)
		//
		fa.create(20780, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		fa.create(20980, 213, 'bolaRisco').setOrigin(0.5, 0.86)
		mi.create(21180, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		mi.create(21380, 232, 'bolaRisco').setOrigin(0.5, 0.86)
		//
		re.create(21580, 250, 'bolaRisco').setOrigin(0.5, 0.86)
		re.create(21780, 250, 'bolaRisco').setOrigin(0.5, 0.86)
		dó.create(21980, 268, 'bolaRiscoBranco').setOrigin(0.5, 0.86)

		// 
		// part 3 vruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuum
		//
		fim += 2000
		dó.create(fim, 268, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		dó.create(fim, 268, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		//
		la.create(fim, 176, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		la.create(fim, 176, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		sol.create(fim, 195, 'bolaRiscoBranco').setOrigin(0.5, 0.86), fim += 400
		//
		fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		//
		re.create(fim, 250, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		re.create(fim, 250, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		dó.create(fim, 268, 'bolaRiscoBranco').setOrigin(0.5, 0.86), fim += 400
		// segunda linha
		//
		sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		//
		mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		re.create(fim, 250, 'bolaRiscoBranco').setOrigin(0.5, 0.86), fim += 400
		//
		sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		//
		mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		re.create(fim, 250, 'bolaRiscoBranco').setOrigin(0.5, 0.86), fim += 400
		// terceira linha
		//
		dó.create(fim, 268, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		dó.create(fim, 268, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		//
		la.create(fim, 176, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		la.create(fim, 176, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		sol.create(fim, 195, 'bolaRiscoBranco').setOrigin(0.5, 0.86), fim += 400
		//
		fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200
		//
		re.create(fim, 250, 'bolaRisco').setOrigin(0.5, 0.86), fim += 300
		re.create(fim, 250, 'bolaRisco').setOrigin(0.5, 0.86), fim += 300
		dó.create(fim, 268, 'bolaRiscoBranco').setOrigin(0.5, 0.86), fim += 400

		//  configs
		dó.setVelocityX(-267)
		sol.setVelocityX(-267)
		la.setVelocityX(-267)
		fa.setVelocityX(-267)
		mi.setVelocityX(-267)
		re.setVelocityX(-267)


		// pontuação
		scoreText = this.add.text(16, 16, 'score: 0', {
			fontSize: '32px',
			fill: '#000'
		});
		multiText = this.add.text(16, 38, 'score: 0', {
			fontSize: '32px',
			fill: '#000'
		});

		// teclas
		cursors = this.input.keyboard.createCursorKeys();

		// interações
		this.physics.add.overlap(player, dó, key_Q)
		this.physics.add.overlap(player, re, key_W)
		this.physics.add.overlap(player, mi, key_E)
		this.physics.add.overlap(player, fa, key_R)
		this.physics.add.overlap(player, sol, key_T)
		this.physics.add.overlap(player, la, key_Y)

		this.physics.add.collider(dó, inimigo, perderStrike);
		this.physics.add.collider(re, inimigo, perderStrike);
		this.physics.add.collider(mi, inimigo, perderStrike);
		this.physics.add.collider(fa, inimigo, perderStrike);
		this.physics.add.collider(sol, inimigo, perderStrike);
		this.physics.add.collider(la, inimigo, perderStrike);

	}, 7880);

}

function update() {

}

// 
function perderStrike(nota, inimigo) {
	scoreMulti = 1
	score -= 10
	deletarNota(nota)
}

function deletarNota(nota) {
	nota.disableBody(true, true)
	if (scoreMulti > 10) {
		scoreMulti = 10
	}
	score += 10 * scoreMulti
	scoreText.setText(`Score = ${score}`);
	multiText.setText(`Multiplicador = ${scoreMulti}X`);
	scoreMulti++
}


function key_Q(player, nota) {
	key == 81 ? deletarNota(nota) : ''
}

function key_W(player, nota) {
	key == 87 ? deletarNota(nota) : ''
}

function key_E(player, nota) {
	key == 69 ? deletarNota(nota) : ''
}

function key_R(player, nota) {
	key == 82 ? deletarNota(nota) : ''
}

function key_T(player, nota) {
	key == 84 ? deletarNota(nota) : ''
}

function key_Y(player, nota) {
	key == 89 ? deletarNota(nota) : ''
}