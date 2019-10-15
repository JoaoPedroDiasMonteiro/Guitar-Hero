(function () {
	var game = new Phaser.Game(1200, 600, Phaser.AUTO, null, {
		preload: preload,
		create: create,
		update: update
	});
	var sheets, score = 0,
		scoreText, scoreMulti = 1,
		key, fim = 21980,
		fimsheet = 1300
	document.addEventListener('keydown', function () {
		key = event.keyCode

	})
	document.addEventListener('keyup', function () {
		key = 0
	})

	// para colocar bolinhas

	function preload() {
		game.load.image('player', 'img/player.png')
		game.load.image('sheet1', 'img/sheetinicio.png')
		game.load.image('sheet2', 'img/sheetpadrao.png')
		game.load.image('bola', 'img/bola.png')
		game.load.image('bolinha', 'img/bolinha.png')
		game.load.image('bolinha1', 'img/bolinhaReta.png')
		game.load.audio('littlestar', 'music/littleStar.mp3')
	}

	function create() {
		game.physics.startSystem(Phaser.Physics.ARCADE)
		var music = game.sound.add('littlestar');
		music.play();


		setTimeout(() => {
			// sheets
			sheets = game.add.group()
			// sheet com clavas
			var sheet = sheets.create(fimsheet, 00, `sheet1`)
			game.physics.arcade.enable(sheet)
			sheet.body.velocity.x = -267
			fimsheet += 1000
			// sheets normais
			for (let index = 0; index < 40; index++) {
				var sheet = sheets.create(fimsheet, 0, `sheet2`)
				game.physics.arcade.enable(sheet)
				sheet.body.velocity.x = -267
				fimsheet += 800
			}

			// jogador (barra preta)
			let player = game.add.sprite(307.5, 00, 'player')
			// config

			// bolas
			let dós = game.add.group()
			let sols = game.add.group()
			let las = game.add.group()
			let fas = game.add.group()
			let mis = game.add.group()
			let res = game.add.group()

			dó = dós.create(1580, 268, 'bolinha1')
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			dó = dós.create(1780, 268, 'bolinha1')
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			sol = sols.create(1980, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			sol = sols.create(2180, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			//
			la = las.create(2380, 176, 'bolinha1')
			game.physics.arcade.enable(la)
			la.body.velocity.x = -267
			la = las.create(2580, 176, 'bolinha1')
			game.physics.arcade.enable(la)
			la.body.velocity.x = -267
			sol = sols.create(2780, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			//
			fa = fas.create(3180, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			fa = fas.create(3380, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			mi = mis.create(3580, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			mi = mis.create(3780, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			//
			re = res.create(3980, 250, 'bolinha1')
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			re = res.create(4180, 250, 'bolinha1')
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			dó = dós.create(4380, 268, 'bolinha1')
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			// segunda linha
			//
			sol = sols.create(4780, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			sol = sols.create(4980, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			fa = fas.create(5180, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			fa = fas.create(5380, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			//
			mi = mis.create(5580, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			mi = mis.create(5780, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			re = res.create(5980, 250, 'bolinha1')
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			//
			sol = sols.create(6380, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			sol = sols.create(6580, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			fa = fas.create(6780, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			fa = fas.create(6980, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			//
			mi = mis.create(7180, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			mi = mis.create(7380, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			re = res.create(7580, 250, 'bolinha1')
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			// terceira linha
			//
			dó = dós.create(7980, 268, 'bolinha1')
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			dó = dós.create(8180, 268, 'bolinha1')
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			sol = sols.create(8380, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			sols.create(8580, 195, 'bolinha1')
			//
			la = las.create(8780, 176, 'bolinha1')
			game.physics.arcade.enable(la)
			la.body.velocity.x = -267
			la = las.create(8980, 176, 'bolinha1')
			game.physics.arcade.enable(la)
			la.body.velocity.x = -267
			sol = sols.create(9180, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			//
			fa = fas.create(9580, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			fa = fas.create(9780, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			mi = mis.create(9980, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			mi = mis.create(10180, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			//
			re = res.create(10380, 250, 'bolinha1')
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			re = res.create(10580, 250, 'bolinha1')
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			dó = dós.create(10780, 268, 'bolinha1')
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267

			//
			// part 2 vruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuum
			//

			dó = dós.create(12780, 268, 'bolinha1')
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			dó = dós.create(12980, 268, 'bolinha1')
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			sol = sols.create(13180, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			sol = sols.create(13380, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			//
			la = las.create(13580, 176, 'bolinha1')
			game.physics.arcade.enable(la)
			la.body.velocity.x = -267
			la = las.create(13780, 176, 'bolinha1')
			game.physics.arcade.enable(la)
			la.body.velocity.x = -267
			sol = sols.create(13980, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			//
			fa = fas.create(14380, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			fa = fas.create(14580, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			mi = mis.create(14780, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			mi = mis.create(14980, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			//
			re = res.create(15180, 250, 'bolinha1')
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			re = res.create(15380, 250, 'bolinha1')
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			dó = dós.create(15580, 268, 'bolinha1')
			// segunda linha
			//
			sol = sols.create(15980, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			sol = sols.create(16180, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			fa = fas.create(16380, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			fa = fas.create(16580, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			//
			mi = mis.create(16780, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			mi = mis.create(16980, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			re = res.create(17180, 250, 'bolinha1')
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			//
			sol = sols.create(17580, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			sol = sols.create(17780, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			fa = fas.create(17980, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			fa = fas.create(18180, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			//
			mi = mis.create(18380, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			mi = mis.create(18580, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			re = res.create(18780, 250, 'bolinha1')
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			// terceira linha
			//
			dó = dós.create(19180, 268, 'bolinha1')
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			dó = dós.create(19380, 268, 'bolinha1')
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			sol = sols.create(19580, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			sol = sols.create(19780, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			//
			la = las.create(19980, 176, 'bolinha1')
			game.physics.arcade.enable(la)
			la.body.velocity.x = -267
			la = las.create(20180, 176, 'bolinha1')
			game.physics.arcade.enable(la)
			la.body.velocity.x = -267
			sol = sols.create(20380, 195, 'bolinha1')
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			//
			fa = fas.create(20780, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			fa = fas.create(20980, 213, 'bolinha1')
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			mi = mis.create(21180, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			mi = mis.create(21380, 232, 'bolinha1')
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			//
			re = res.create(21580, 250, 'bolinha1')
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			re = res.create(21780, 250, 'bolinha1')
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			dós.create(21980, 268, 'bolinha1')
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267

			// 
			// part 3 vruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuum
			//
			fim += 2000
			dó = dós.create(fim, 268, 'bolinha1'), fim += 200
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			dó = dós.create(fim, 268, 'bolinha1'), fim += 200
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			sol = sols.create(fim, 195, 'bolinha1'), fim += 200
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			sol = sols.create(fim, 195, 'bolinha1'), fim += 200
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			//
			la = las.create(fim, 176, 'bolinha1'), fim += 200
			game.physics.arcade.enable(la)
			la.body.velocity.x = -267
			la = las.create(fim, 176, 'bolinha1'), fim += 200
			game.physics.arcade.enable(la)
			la.body.velocity.x = -267
			sol = sols.create(fim, 195, 'bolinha1'), fim += 400
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			//
			fa = fas.create(fim, 213, 'bolinha1'), fim += 200
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			fa = fas.create(fim, 213, 'bolinha1'), fim += 200
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			mi = mis.create(fim, 232, 'bolinha1'), fim += 200
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			mi = mis.create(fim, 232, 'bolinha1'), fim += 200
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			//
			re = res.create(fim, 250, 'bolinha1'), fim += 200
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			re = res.create(fim, 250, 'bolinha1'), fim += 200
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			dó = dós.create(fim, 268, 'bolinha1'), fim += 400
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			// segunda linha
			//
			sol = sols.create(fim, 195, 'bolinha1'), fim += 200
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			sol = sols.create(fim, 195, 'bolinha1'), fim += 200
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			fa = fas.create(fim, 213, 'bolinha1'), fim += 200
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			fa = fas.create(fim, 213, 'bolinha1'), fim += 200
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			//
			mi = mis.create(fim, 232, 'bolinha1'), fim += 200
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			mi = mis.create(fim, 232, 'bolinha1'), fim += 200
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			re = res.create(fim, 250, 'bolinha1'), fim += 400
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			//
			sol = sols.create(fim, 195, 'bolinha1'), fim += 200
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			sol = sols.create(fim, 195, 'bolinha1'), fim += 200
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			fa = fas.create(fim, 213, 'bolinha1'), fim += 200
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			fa = fas.create(fim, 213, 'bolinha1'), fim += 200
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			//
			mi = mis.create(fim, 232, 'bolinha1'), fim += 200
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			mi = mis.create(fim, 232, 'bolinha1'), fim += 200
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			re = res.create(fim, 250, 'bolinha1'), fim += 400
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			// terceira linha
			//
			dó = dós.create(fim, 268, 'bolinha1'), fim += 200
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			dó = dós.create(fim, 268, 'bolinha1'), fim += 200
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267
			sol = sols.create(fim, 195, 'bolinha1'), fim += 200
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			sol = sols.create(fim, 195, 'bolinha1'), fim += 200
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			//
			la = las.create(fim, 176, 'bolinha1'), fim += 200
			game.physics.arcade.enable(la)
			la.body.velocity.x = -267
			la = las.create(fim, 176, 'bolinha1'), fim += 200
			game.physics.arcade.enable(la)
			la.body.velocity.x = -267
			sol = sols.create(fim, 195, 'bolinha1'), fim += 400
			game.physics.arcade.enable(sol)
			sol.body.velocity.x = -267
			//
			fa = fas.create(fim, 213, 'bolinha1'), fim += 200
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			fa = fas.create(fim, 213, 'bolinha1'), fim += 200
			game.physics.arcade.enable(fa)
			fa.body.velocity.x = -267
			mi = mis.create(fim, 232, 'bolinha1'), fim += 200
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			mi = mis.create(fim, 232, 'bolinha1'), fim += 200
			game.physics.arcade.enable(mi)
			mi.body.velocity.x = -267
			//
			re = res.create(fim, 250, 'bolinha1'), fim += 300
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			re = res.create(fim, 250, 'bolinha1'), fim += 300
			game.physics.arcade.enable(re)
			re.body.velocity.x = -267
			dó = dós.create(fim, 268, 'bolinha1'), fim += 400
			game.physics.arcade.enable(dó)
			dó.body.velocity.x = -267

			//  configs



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
			game.physics.arcade.overlap(player, dó, multiplicador)
			game.physics.arcade.overlap(player, re, multiplicador)
			game.physics.arcade.overlap(player, mi, multiplicador)
			game.physics.arcade.overlap(player, fa, multiplicador)
			game.physics.arcade.overlap(player, sol, multiplicador)
			game.physics.arcade.overlap(player, la, multiplicador)

			game.physics.arcade.overlap(player, dó, key_Q)
			game.physics.arcade.overlap(player, re, key_W)
			game.physics.arcade.overlap(player, mi, key_E)
			game.physics.arcade.overlap(player, fa, key_R)
			game.physics.arcade.overlap(player, sol, key_T)
			game.physics.arcade.overlap(player, la, key_Y)

		}, 7800);

	}

	function update() {
		// game.physics.arcade.collide()
	}

	// 
	function deletarNota(nota) {
		nota.disableBody(true, true)
		if (scoreMulti > 11) {
			scoreMulti = 10
		}
		score += 10 * scoreMulti
		scoreText.setText(`Score = ${score}`);

		scoreMulti++
	}

	function multiplicador() {
		scoreMulti >= 10 ? scoreMulti = 10 : scoreMulti
		multiText.setText(`Multiplicador = ${scoreMulti}X`);
	}

	function key_Q(player, nota) {
		key == 81 ? deletarNota(nota) : scoreMulti = 1
	}

	function key_W(player, nota) {
		key == 87 ? deletarNota(nota) : scoreMulti = 1
	}

	function key_E(player, nota) {
		key == 69 ? deletarNota(nota) : scoreMulti = 1
	}

	function key_R(player, nota) {
		key == 82 ? deletarNota(nota) : scoreMulti = 1
	}

	function key_T(player, nota) {
		key == 84 ? deletarNota(nota) : scoreMulti = 1
	}

	function key_Y(player, nota) {
		key == 89 ? deletarNota(nota) : scoreMulti = 1
	}
	// deixa anotado isso aqui, vai que né
	// this.input.keyboard.on('keydown_Q', function () {
	// })
}())