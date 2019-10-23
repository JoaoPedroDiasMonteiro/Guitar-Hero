// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU",
    OPTIONS: 'OPTIONS',
    PLAY: "PLAY"
  }
};
exports.CST = CST;
},{}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuitemAnimation = MenuitemAnimation;
exports.MenuScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: _CST.CST.SCENES.MENU
    }));
  }

  _createClass(MenuScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      var a = 2; // bg music
      // sfx

      var menuSFX = this.sound.add('menuSFX');
      var menuSFX2 = this.sound.add('menuSFX_click'); // botão play

      var playButton = this.add.image(600, 400, 'play');
      MenuitemAnimation(playButton, 600, 400, menuSFX, menuSFX2);
      playButton.setInteractive(); // mouse click up

      playButton.on('pointerup', function () {
        _this.sound.stopAll();

        _this.scene.start(_CST.CST.SCENES.PLAY);
      }); // option button

      var optionsButton = this.add.image(600, 500, 'options');
      MenuitemAnimation(optionsButton, 600, 500, menuSFX, menuSFX2); // mouse click up

      optionsButton.on('pointerup', function () {
        _this.scene.start(_CST.CST.SCENES.OPTIONS);
      });
    } // < --  create 

  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;

function MenuitemAnimation(img, x, y, soundSFX, soundSFX2) {
  var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2;
  img.setInteractive(); // mouse em cima

  img.on('pointerover', function () {
    soundSFX.play();
    a % 2 != 0 ? img.x = x + 10 : img.x = x - 10;
    a++;
    setTimeout(function () {
      img.x = x;
    }, 250);
  }); // mouse fora

  img.on('pointerout', function () {
    img.x = x;
    img.y = y;
  }); // mouse click down

  img.on('pointerdown', function () {
    img.y = y + 5;
  }); // mouse click up

  img.on('pointerup', function () {
    img.y = y;
    soundSFX2.play();
  });
}
},{"../CST":"src/CST.js"}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST");

var _MenuScene = require("./MenuScene");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadScene).call(this, {
      key: _CST.CST.SCENES.LOAD
    }));
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

      this.load.image('player', './assets/image/player.png');
      this.load.image('sheet1', './assets/image/sheetinicio.png');
      this.load.image('sheet2', './assets/image/sheetpadrao.png');
      this.load.image('inimigo', './assets/image/inimigo.png');
      this.load.image('bolaRisco', './assets/image/bolaRisco.png');
      this.load.image('bolaRiscoBranco', './assets/image/bolaRiscoBranca.png');
      this.load.image('risco', './assets/image/risco.png');
      this.load.image('play', './assets/image/play_button.png');
      this.load.image('options', './assets/image/options_button.png');
      this.load.image('AA', './assets/image/AAText.png');
      this.load.image('back', './assets/image/back.png');
      this.load.image('true', './assets/image/true.png');
      this.load.image('false', './assets/image/false.png');
      this.load.image('apply', './assets/image/apply.png');
      this.load.image('fullscreen', './assets/image/fullscreen.png');
      this.load.audio('star', "../assets/audio/littleStar.mp3");
      this.load.audio("title_music", "../assets/audio/shuinvy-childhood.mp3");
      this.load.audio('menuSFX', '../assets/audio/menuSFX_over.mp3');
      this.load.audio('menuSFX_click', '../assets/audio/menuSFX_click.mp3');
      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0xffffff //white

        }
      });
      this.load.on('progress', function (percent) {
        loadingBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 50);
      });
      this.load.on('complete', function () {// this.scene.start(CST.SCENES.MENU, 'aaaaa')
      });
    }
  }, {
    key: "create",
    value: function create() {
      var backgroundMusic = this.sound.add('title_music');
      backgroundMusic.play();
      this.sound.pauseOnBlur = false;
      backgroundMusic.loop = true;
      this.scene.start(_CST.CST.SCENES.MENU, 'aaaaa');
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js","./MenuScene":"src/scenes/MenuScene.js"}],"src/scenes/MusicaStar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MusicaStar = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var key, scoreText, multiText;
var score = 0;
var scoreMulti = 1;
document.addEventListener('keydown', function () {
  key = event.keyCode;
});
document.addEventListener('keyup', function () {
  key = 0;
});
var fim = 21980;
var fimsheet = 29900;

var MusicaStar =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MusicaStar, _Phaser$Scene);

  function MusicaStar() {
    _classCallCheck(this, MusicaStar);

    return _possibleConstructorReturn(this, _getPrototypeOf(MusicaStar).call(this, {
      key: _CST.CST.SCENES.PLAY
    }));
  }

  _createClass(MusicaStar, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      var music = this.sound.add('star');
      music.play();
      setTimeout(function () {
        // sheets
        var sheets = _this.physics.add.group(); // sheet com clavas


        sheets.create(1800, 300, "sheet1"); // sheets normais

        sheets.create(2700, 300, "sheet2");
        sheets.create(3500, 300, "sheet2");
        sheets.create(4300, 300, "sheet2");
        sheets.create(5100, 300, "sheet2");
        sheets.create(5900, 300, "sheet2");
        sheets.create(6700, 300, "sheet2");
        sheets.create(7500, 300, "sheet2");
        sheets.create(8300, 300, "sheet2");
        sheets.create(9100, 300, "sheet2");
        sheets.create(9900, 300, "sheet2");
        sheets.create(10700, 300, "sheet2"); // espaço em branco V

        sheets.create(11500, 300, "sheet2");
        sheets.create(12300, 300, "sheet2"); // página sheet V

        sheets.create(13100, 300, "sheet2");
        sheets.create(13900, 300, "sheet2");
        sheets.create(14700, 300, "sheet2");
        sheets.create(15500, 300, "sheet2");
        sheets.create(16300, 300, "sheet2");
        sheets.create(17100, 300, "sheet2");
        sheets.create(17900, 300, "sheet2");
        sheets.create(18700, 300, "sheet2");
        sheets.create(19500, 300, "sheet2");
        sheets.create(20300, 300, "sheet2");
        sheets.create(21100, 300, "sheet2"); //

        sheets.create(21900, 300, "sheet2");
        sheets.create(22700, 300, "sheet2");
        sheets.create(23500, 300, "sheet2");
        sheets.create(24300, 300, "sheet2");
        sheets.create(25100, 300, "sheet2");
        sheets.create(25900, 300, "sheet2");
        sheets.create(26700, 300, "sheet2");
        sheets.create(27500, 300, "sheet2");
        sheets.create(28300, 300, "sheet2");
        sheets.create(29100, 300, "sheet2");
        sheets.create(29900, 300, "sheet2"), fimsheet += 800; //

        sheets.create(fimsheet, 300, "sheet2"), fimsheet += 800;
        sheets.create(fimsheet, 300, "sheet2"), fimsheet += 800;
        sheets.create(fimsheet, 300, "sheet2"), fimsheet += 800;
        sheets.create(fimsheet, 300, "sheet2"), fimsheet += 800;
        sheets.create(fimsheet, 300, "sheet2"), fimsheet += 800; // config

        sheets.setVelocityX(-267);

        var inimigo = _this.physics.add.staticGroup();

        inimigo.create(333, 300, 'inimigo');

        var deletador = _this.physics.add.staticGroup();

        deletador.create(-75, 300, 'inimigo'); // jogador (barra preta)

        var player = _this.physics.add.image(400, 300, 'player'); // config


        player.setCollideWorldBounds(true); // bolas

        var dó = _this.physics.add.group();

        var sol = _this.physics.add.group();

        var la = _this.physics.add.group();

        var fa = _this.physics.add.group();

        var mi = _this.physics.add.group();

        var re = _this.physics.add.group();

        dó.create(1580, 268, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(1580, 268, 'risco');
        dó.create(1780, 268, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(1780, 268, 'risco');
        sol.create(1980, 195, 'bolaRisco').setOrigin(0.5, 0.86);
        sol.create(2180, 195, 'bolaRisco').setOrigin(0.5, 0.86); //

        la.create(2380, 176, 'bolaRisco').setOrigin(0.5, 0.86);
        la.create(2580, 176, 'bolaRisco').setOrigin(0.5, 0.86);
        sol.create(2780, 195, 'bolaRiscoBranco').setOrigin(0.5, 0.86); //

        fa.create(3180, 213, 'bolaRisco').setOrigin(0.5, 0.86);
        fa.create(3380, 213, 'bolaRisco').setOrigin(0.5, 0.86);
        mi.create(3580, 232, 'bolaRisco').setOrigin(0.5, 0.86);
        mi.create(3780, 232, 'bolaRisco').setOrigin(0.5, 0.86); //

        re.create(3980, 250, 'bolaRisco').setOrigin(0.5, 0.86);
        re.create(4180, 250, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(4380, 268, 'bolaRiscoBranco').setOrigin(0.5, 0.86);
        dó.create(4380, 268, 'risco'); // segunda linha
        //

        sol.create(4780, 195, 'bolaRisco').setOrigin(0.5, 0.86);
        sol.create(4980, 195, 'bolaRisco').setOrigin(0.5, 0.86);
        fa.create(5180, 213, 'bolaRisco').setOrigin(0.5, 0.86);
        fa.create(5380, 213, 'bolaRisco').setOrigin(0.5, 0.86); //

        mi.create(5580, 232, 'bolaRisco').setOrigin(0.5, 0.86);
        mi.create(5780, 232, 'bolaRisco').setOrigin(0.5, 0.86);
        re.create(5980, 250, 'bolaRiscoBranco').setOrigin(0.5, 0.86); //

        sol.create(6380, 195, 'bolaRisco').setOrigin(0.5, 0.86);
        sol.create(6580, 195, 'bolaRisco').setOrigin(0.5, 0.86);
        fa.create(6780, 213, 'bolaRisco').setOrigin(0.5, 0.86);
        fa.create(6980, 213, 'bolaRisco').setOrigin(0.5, 0.86); //

        mi.create(7180, 232, 'bolaRisco').setOrigin(0.5, 0.86);
        mi.create(7380, 232, 'bolaRisco').setOrigin(0.5, 0.86);
        re.create(7580, 250, 'bolaRiscoBranco').setOrigin(0.5, 0.86); // terceira linha
        //

        dó.create(7980, 268, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(7980, 268, 'risco');
        dó.create(8180, 268, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(8180, 268, 'risco');
        sol.create(8380, 195, 'bolaRisco').setOrigin(0.5, 0.86);
        sol.create(8580, 195, 'bolaRisco').setOrigin(0.5, 0.86); //

        la.create(8780, 176, 'bolaRisco').setOrigin(0.5, 0.86);
        la.create(8980, 176, 'bolaRisco').setOrigin(0.5, 0.86);
        sol.create(9180, 195, 'bolaRiscoBranco').setOrigin(0.5, 0.86); //

        fa.create(9580, 213, 'bolaRisco').setOrigin(0.5, 0.86);
        fa.create(9780, 213, 'bolaRisco').setOrigin(0.5, 0.86);
        mi.create(9980, 232, 'bolaRisco').setOrigin(0.5, 0.86);
        mi.create(10180, 232, 'bolaRisco').setOrigin(0.5, 0.86); //

        re.create(10380, 250, 'bolaRisco').setOrigin(0.5, 0.86);
        re.create(10580, 250, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(10780, 268, 'bolaRiscoBranco').setOrigin(0.5, 0.86);
        dó.create(10780, 268, 'risco'); //
        // part 2 vruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuum
        //

        dó.create(12780, 268, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(12780, 268, 'risco');
        dó.create(12980, 268, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(12980, 268, 'risco');
        sol.create(13180, 195, 'bolaRisco').setOrigin(0.5, 0.86);
        sol.create(13380, 195, 'bolaRisco').setOrigin(0.5, 0.86); //

        la.create(13580, 176, 'bolaRisco').setOrigin(0.5, 0.86);
        la.create(13780, 176, 'bolaRisco').setOrigin(0.5, 0.86);
        sol.create(13980, 195, 'bolaRiscoBranco').setOrigin(0.5, 0.86); //

        fa.create(14380, 213, 'bolaRisco').setOrigin(0.5, 0.86);
        fa.create(14580, 213, 'bolaRisco').setOrigin(0.5, 0.86);
        mi.create(14780, 232, 'bolaRisco').setOrigin(0.5, 0.86);
        mi.create(14980, 232, 'bolaRisco').setOrigin(0.5, 0.86); //

        re.create(15180, 250, 'bolaRisco').setOrigin(0.5, 0.86);
        re.create(15380, 250, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(15580, 268, 'bolaRiscoBranco').setOrigin(0.5, 0.86);
        dó.create(15580, 268, 'risco'); // segunda linha
        //

        sol.create(15980, 195, 'bolaRisco').setOrigin(0.5, 0.86);
        sol.create(16180, 195, 'bolaRisco').setOrigin(0.5, 0.86);
        fa.create(16380, 213, 'bolaRisco').setOrigin(0.5, 0.86);
        fa.create(16580, 213, 'bolaRisco').setOrigin(0.5, 0.86); //

        mi.create(16780, 232, 'bolaRisco').setOrigin(0.5, 0.86);
        mi.create(16980, 232, 'bolaRisco').setOrigin(0.5, 0.86);
        re.create(17180, 250, 'bolaRiscoBranco').setOrigin(0.5, 0.86); //

        sol.create(17580, 195, 'bolaRisco').setOrigin(0.5, 0.86);
        sol.create(17780, 195, 'bolaRisco').setOrigin(0.5, 0.86);
        fa.create(17980, 213, 'bolaRisco').setOrigin(0.5, 0.86);
        fa.create(18180, 213, 'bolaRisco').setOrigin(0.5, 0.86); //

        mi.create(18380, 232, 'bolaRisco').setOrigin(0.5, 0.86);
        mi.create(18580, 232, 'bolaRisco').setOrigin(0.5, 0.86);
        re.create(18780, 250, 'bolaRiscoBranco').setOrigin(0.5, 0.86); // terceira linha
        //

        dó.create(19180, 268, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(19180, 268, 'risco');
        dó.create(19380, 268, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(19380, 268, 'risco');
        sol.create(19580, 195, 'bolaRisco').setOrigin(0.5, 0.86);
        sol.create(19780, 195, 'bolaRisco').setOrigin(0.5, 0.86); //

        la.create(19980, 176, 'bolaRisco').setOrigin(0.5, 0.86);
        la.create(20180, 176, 'bolaRisco').setOrigin(0.5, 0.86);
        sol.create(20380, 195, 'bolaRiscoBranco').setOrigin(0.5, 0.86); //

        fa.create(20780, 213, 'bolaRisco').setOrigin(0.5, 0.86);
        fa.create(20980, 213, 'bolaRisco').setOrigin(0.5, 0.86);
        mi.create(21180, 232, 'bolaRisco').setOrigin(0.5, 0.86);
        mi.create(21380, 232, 'bolaRisco').setOrigin(0.5, 0.86); //

        re.create(21580, 250, 'bolaRisco').setOrigin(0.5, 0.86);
        re.create(21780, 250, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(21980, 268, 'bolaRiscoBranco').setOrigin(0.5, 0.86);
        dó.create(21980, 268, 'risco'); // 
        // part 3 vruuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuum
        //

        fim += 2000;
        dó.create(fim, 268, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(fim, 268, 'risco'), fim += 200;
        dó.create(fim, 268, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(fim, 268, 'risco'), fim += 200;
        sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200; //

        la.create(fim, 176, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        la.create(fim, 176, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        sol.create(fim, 195, 'bolaRiscoBranco').setOrigin(0.5, 0.86), fim += 400; //

        fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200; //

        re.create(fim, 250, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        re.create(fim, 250, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        dó.create(fim, 268, 'bolaRiscoBranco').setOrigin(0.5, 0.86);
        dó.create(fim, 268, 'risco'), fim += 400; // segunda linha
        //

        sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200; //

        mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        re.create(fim, 250, 'bolaRiscoBranco').setOrigin(0.5, 0.86), fim += 400; //

        sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200; //

        mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        re.create(fim, 250, 'bolaRiscoBranco').setOrigin(0.5, 0.86), fim += 400; // terceira linha
        //

        dó.create(fim, 268, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(fim, 268, 'risco'), fim += 200;
        dó.create(fim, 268, 'bolaRisco').setOrigin(0.5, 0.86);
        dó.create(fim, 268, 'risco'), fim += 200;
        sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        sol.create(fim, 195, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200; //

        la.create(fim, 176, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        la.create(fim, 176, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        sol.create(fim, 195, 'bolaRiscoBranco').setOrigin(0.5, 0.86), fim += 400; //

        fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        fa.create(fim, 213, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200;
        mi.create(fim, 232, 'bolaRisco').setOrigin(0.5, 0.86), fim += 200; //

        re.create(fim, 250, 'bolaRisco').setOrigin(0.5, 0.86), fim += 300;
        re.create(fim, 250, 'bolaRisco').setOrigin(0.5, 0.86), fim += 300;
        dó.create(fim, 268, 'bolaRiscoBranco').setOrigin(0.5, 0.86);
        dó.create(fim, 268, 'risco'), fim += 400; //  configs

        dó.setVelocityX(-267);
        sol.setVelocityX(-267);
        la.setVelocityX(-267);
        fa.setVelocityX(-267);
        mi.setVelocityX(-267);
        re.setVelocityX(-267); // pontuação

        scoreText = _this.add.text(16, 16, 'score: 0', {
          fontSize: '32px',
          fill: '#000'
        });
        multiText = _this.add.text(16, 38, 'score: 0', {
          fontSize: '32px',
          fill: '#000'
        }); // teclas

        var cursors = _this.input.keyboard.createCursorKeys(); // interações


        _this.physics.add.overlap(player, dó, key_Q);

        _this.physics.add.overlap(player, re, key_W);

        _this.physics.add.overlap(player, mi, key_E);

        _this.physics.add.overlap(player, fa, key_R);

        _this.physics.add.overlap(player, sol, key_T);

        _this.physics.add.overlap(player, la, key_Y);

        _this.physics.add.overlap(dó, inimigo, perderStrike);

        _this.physics.add.overlap(re, inimigo, perderStrike);

        _this.physics.add.overlap(mi, inimigo, perderStrike);

        _this.physics.add.overlap(fa, inimigo, perderStrike);

        _this.physics.add.overlap(sol, inimigo, perderStrike);

        _this.physics.add.overlap(la, inimigo, perderStrike);

        _this.physics.add.collider(deletador, dó, deletarNota);

        _this.physics.add.collider(deletador, re, deletarNota);

        _this.physics.add.collider(deletador, mi, deletarNota);

        _this.physics.add.collider(deletador, fa, deletarNota);

        _this.physics.add.collider(deletador, sol, deletarNota);

        _this.physics.add.collider(deletador, la, deletarNota);
      }, 7880);
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return MusicaStar;
}(Phaser.Scene);

exports.MusicaStar = MusicaStar;

function perderStrike(nota, inimigo) {
  if (nota.acertou != true) {
    nota.setTintFill(0xFF2D00);
    scoreMulti = 1;
    multiText.setText("Multiplicador = ".concat(scoreMulti, "X"));
  }
}

function hitNote(nota) {
  if (nota.acertou != true) {
    scoreMulti++;
    scoreMulti > 10 ? scoreMulti = 10 : '';
    score += 100 * scoreMulti;
    scoreText.setText("Score = ".concat(score));
    multiText.setText("Multiplicador = ".concat(scoreMulti, "X"));
    nota.setTintFill(0x59FF00);
  }

  nota.acertou = true; // nota.disableBody(true, true)	
}

function deletarNota(deletador, nota) {
  nota.destroy();
  console.log('nota destruída');
}

function key_Q(player, nota) {
  key == 81 ? hitNote(nota) : '';
}

function key_W(player, nota) {
  key == 87 ? hitNote(nota) : '';
}

function key_E(player, nota) {
  key == 69 ? hitNote(nota) : '';
}

function key_R(player, nota) {
  key == 82 ? hitNote(nota) : '';
}

function key_T(player, nota) {
  key == 84 ? hitNote(nota) : '';
}

function key_Y(player, nota) {
  key == 89 ? hitNote(nota) : '';
}
},{"../CST":"src/CST.js"}],"src/scenes/MenuOptionsScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuOptionsScene = void 0;

var _CST = require("../CST");

var _MenuScene = require("../scenes/MenuScene");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuOptionsScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MenuOptionsScene, _Phaser$Scene);

  function MenuOptionsScene() {
    _classCallCheck(this, MenuOptionsScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuOptionsScene).call(this, {
      key: _CST.CST.SCENES.OPTIONS
    }));
  }

  _createClass(MenuOptionsScene, [{
    key: "create",
    value: function create() {
      var _this = this;

      var menuSFX = this.sound.add('menuSFX');
      var menuSFX_click = this.sound.add('menuSFX_click');
      var imageFullscreen = this.add.image(600, 3000, 'true');

      if (localStorage.getItem('fscreen') == 'true') {
        imageFullscreen = this.add.image(600, 200, 'true');
      } else if (localStorage.getItem('fscreen') == 'false') {
        imageFullscreen = this.add.image(600, 200, 'false');
      } else {
        localStorage.setItem('fscreen', false);
        imageFullscreen = this.add.image(600, 200, 'true');
      } //


      var fullscreen = this.add.image(600, 100, 'fullscreen');
      (0, _MenuScene.MenuitemAnimation)(fullscreen, 600, 100, menuSFX, menuSFX_click); // on click down function

      fullscreen.on('pointerup', function () {
        var fscreen = localStorage.getItem('fscreen');

        if (fscreen == 'false') {
          localStorage.setItem('fscreen', 'true');
          imageFullscreen.destroy();
          imageFullscreen = _this.add.image(600, 200, 'true');
        } else if (fscreen == 'true') {
          imageFullscreen.destroy();
          imageFullscreen = _this.add.image(600, 200, 'false');
          localStorage.setItem('fscreen', 'false');
        }
      });
      var imageAA = this.add.image(600, 3000, 'true');

      if (localStorage.getItem('AA') == 'true') {
        imageAA = this.add.image(600, 400, 'true');
      } else if (localStorage.getItem('AA') == 'false') {
        imageAA = this.add.image(600, 400, 'false');
      } else {
        localStorage.setItem('AA', true);
        imageAA = this.add.image(600, 400, 'true');
      }

      var AA_Button = this.add.image(600, 300, 'AA'); // on click up function

      (0, _MenuScene.MenuitemAnimation)(AA_Button, 600, 300, menuSFX, menuSFX_click);
      AA_Button.on('pointerup', function () {
        var AA = localStorage.getItem('AA');

        if (AA == 'false') {
          localStorage.setItem('AA', 'true');
          imageAA.destroy();
          imageAA = _this.add.image(600, 400, 'true');
        } else if (AA == 'true') {
          imageAA.destroy();
          imageAA = _this.add.image(600, 400, 'false');
          localStorage.setItem('AA', 'false');
        }
      });
      var back_button = this.add.image(1050, 520, 'back');
      (0, _MenuScene.MenuitemAnimation)(back_button, 1050, 520, menuSFX, menuSFX_click); // on click up function

      back_button.on('pointerup', function () {
        _this.scene.start(_CST.CST.SCENES.MENU);
      });
      var apply_button = this.add.image(150, 520, 'apply');
      (0, _MenuScene.MenuitemAnimation)(apply_button, 150, 520, menuSFX, menuSFX_click);
      apply_button.on('pointerup', function () {
        location.reload();
      });
    } // < -- Create

  }]);

  return MenuOptionsScene;
}(Phaser.Scene);

exports.MenuOptionsScene = MenuOptionsScene;
},{"../CST":"src/CST.js","../scenes/MenuScene":"src/scenes/MenuScene.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _MusicaStar = require("./scenes/MusicaStar");

var _MenuOptionsScene = require("./scenes/MenuOptionsScene");

/** @type {import("../typings/phaser")} */
var AAconfig = localStorage.getItem('AA'); // Se o valor de AA for igual a true desativa o PixelArt, se não ativa. Por padrão PixelArt é desativado

if (AAconfig == 'true') {
  AAconfig = false;
} else if (AAconfig == 'false') {
  AAconfig = true;
} else {
  AAconfig = false;
}

var fullscreen = localStorage.getItem('fscreen');

if (fullscreen == 'true') {
  fullscreen = Phaser.Scale.WIDTH_CONTROLS_HEIGHT;
} else {
  fullscreen = '';
}

var game = new Phaser.Game({
  width: 1200,
  height: 600,
  scale: {
    mode: fullscreen
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
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _MenuOptionsScene.MenuOptionsScene, _MusicaStar.MusicaStar],
  render: {
    pixelArt: AAconfig
  }
});
},{"./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/MusicaStar":"src/scenes/MusicaStar.js","./scenes/MenuOptionsScene":"src/scenes/MenuOptionsScene.js"}],"../../../Users/Eo/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59752" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../Users/Eo/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map