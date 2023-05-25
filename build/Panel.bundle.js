/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 507:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/@pixi/react/dist/index.es.js
var index_es = __webpack_require__(8810);
// EXTERNAL MODULE: ./node_modules/pixi.js/lib/index.mjs + 65 modules
var lib = __webpack_require__(4007);
;// CONCATENATED MODULE: ./src/components/baraja/Carta.jsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["x", "y", "width", "fontSize"],
  _excluded2 = ["x", "y", "width", "fontSize"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var getOrderZIndex = function getOrderZIndex(id) {
  switch (id) {
    case "bg-border":
      return 1;
    case "bg-card":
      return 2;
    case "rarity":
      return 3;
    case "logo":
      return 4;
    case "img":
      return 5;
    case "text":
      return 6;
    default:
      return 0;
  }
};
var Carta = function Carta(_ref) {
  var id = _ref.id,
    image = _ref.image,
    position = _ref.position,
    name = _ref.name,
    alpha = _ref.alpha,
    angle = _ref.angle,
    anchor = _ref.anchor,
    zIndex = _ref.zIndex,
    scale = _ref.scale,
    clickStart = _ref.clickStart,
    clickEnd = _ref.clickEnd,
    mouseMove = _ref.mouseMove,
    passRef = _ref.passRef,
    visibleText = _ref.visibleText;
  var _useState = (0,react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    imgSprt = _useState2[0],
    setImgSprt = _useState2[1];
  var _useState3 = (0,react.useState)({
      x: 0,
      y: 0,
      width: 80,
      fontSize: 8
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    propsText = _useState4[0],
    setPropsText = _useState4[1];
  var referenciaSprite = (0,react.useRef)(null);
  var arrayTextures = (0,react.useRef)([]);
  var textCard = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var arrayPropsCard = Object.entries(image);
    arrayTextures.current = [];
    arrayPropsCard.forEach(function (item, index) {
      var _item = _slicedToArray(item, 2),
        key = _item[0],
        value = _item[1];
      if (key === "text") {
        textCard.current = value;
        return;
      }
      // Cargamos las texturas desde las url
      lib/* Assets.load */.deM.load(value).then(function (texture) {
        var newTexture = {
          id: key,
          texture: texture
        };
        if (!newTexture) return;
        // Obtenemos un array con las texturas
        arrayTextures.current = [].concat(_toConsumableArray(arrayTextures.current), [newTexture]);
        arrayTextures.current.length === 5 && setImgSprt(arrayTextures.current);
      })["catch"](function (err) {
        return console.log(err);
      });
    });
    passRef(referenciaSprite.current);
    setPropsText(function (_ref2) {
      var x = _ref2.x,
        y = _ref2.y,
        width = _ref2.width,
        fontSize = _ref2.fontSize,
        prev = _objectWithoutProperties(_ref2, _excluded);
      return _objectSpread({
        x: scale.x * -32 / 0.14,
        y: 15,
        width: scale.x * 75 / 0.16,
        fontSize: scale.x * 8 / 0.16
      }, prev);
    });
    // Calculamos las proporciones del texto y las seteamos
  }, [image]);
  (0,react.useEffect)(function () {
    setPropsText(function (_ref3) {
      var x = _ref3.x,
        y = _ref3.y,
        width = _ref3.width,
        fontSize = _ref3.fontSize,
        prev = _objectWithoutProperties(_ref3, _excluded2);
      return _objectSpread({
        x: scale.x * -32 / 0.14,
        y: 15,
        width: scale.x * 75 / 0.16,
        fontSize: scale.x * 8 / 0.16
      }, prev);
    });
    passRef(referenciaSprite.current);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(index_es/* Container */.W2, {
    position: position,
    zIndex: zIndex,
    sortableChildren: true,
    interactive: true,
    id: id,
    angle: angle,
    pointerdown: clickStart,
    pointerup: clickEnd,
    pointermove: mouseMove
    // onclick={dblClick}
    ,
    cursor: "pointer",
    anchor: anchor
  }, imgSprt && imgSprt.map(function (_ref4, index) {
    var id = _ref4.id,
      texture = _ref4.texture;
    var zIndex = getOrderZIndex(id);
    return /*#__PURE__*/react.createElement(index_es/* Sprite */.jy, {
      name: name,
      texture: texture,
      ref: id === 0 ? referenciaSprite : null,
      key: index,
      alpha: alpha,
      scale: scale,
      zIndex: zIndex,
      anchor: anchor,
      angle: angle
    });
  }), /*#__PURE__*/react.createElement(index_es/* Text */.xv, {
    text: textCard.current,
    zIndex: 9,
    width: propsText.width,
    x: propsText.x,
    y: propsText.y,
    angle: angle,
    visible: visibleText,
    style: new lib/* TextStyle */.pn8({
      fontFamily: ["Roboto", "Source Sans Pro", "Helvetica", "sans-serif"],
      fontSize: propsText.fontSize,
      fill: ["#e4e3e8", "#fdfcff"],
      stroke: "#eef1f5",
      align: "center",
      wordWrap: true,
      wordWrapWidth: 50
    })
  })));
};
;// CONCATENATED MODULE: ./src/assets/sound/card-deleted.mp3
const card_deleted_namespaceObject = __webpack_require__.p + "3b1ea68024fac3f5b99d.mp3";
;// CONCATENATED MODULE: ./src/assets/sound/last-card-deleted.mp3
const last_card_deleted_namespaceObject = __webpack_require__.p + "ca4cb0d16b32b5e78ffc.mp3";
;// CONCATENATED MODULE: ./src/assets/sound/rebote.mp3
const rebote_namespaceObject = __webpack_require__.p + "2eff2fac550b8bdb3e61.mp3";
;// CONCATENATED MODULE: ./src/components/baraja/Baraja.jsx
function Baraja_typeof(obj) { "@babel/helpers - typeof"; return Baraja_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Baraja_typeof(obj); }
var Baraja_excluded = ["rot", "anchor", "x", "y"],
  Baraja_excluded2 = ["x", "y"],
  _excluded3 = ["x", "y", "rot", "anchor"],
  _excluded4 = ["x", "y"],
  _excluded5 = ["id"];
function Baraja_toConsumableArray(arr) { return Baraja_arrayWithoutHoles(arr) || Baraja_iterableToArray(arr) || Baraja_unsupportedIterableToArray(arr) || Baraja_nonIterableSpread(); }
function Baraja_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Baraja_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Baraja_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Baraja_arrayLikeToArray(arr); }
function Baraja_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Baraja_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Baraja_ownKeys(Object(source), !0).forEach(function (key) { Baraja_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Baraja_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Baraja_defineProperty(obj, key, value) { key = Baraja_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Baraja_toPropertyKey(arg) { var key = Baraja_toPrimitive(arg, "string"); return Baraja_typeof(key) === "symbol" ? key : String(key); }
function Baraja_toPrimitive(input, hint) { if (Baraja_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Baraja_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Baraja_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Baraja_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function Baraja_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Baraja_slicedToArray(arr, i) { return Baraja_arrayWithHoles(arr) || Baraja_iterableToArrayLimit(arr, i) || Baraja_unsupportedIterableToArray(arr, i) || Baraja_nonIterableRest(); }
function Baraja_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Baraja_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Baraja_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Baraja_arrayLikeToArray(o, minLen); }
function Baraja_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Baraja_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Baraja_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var TWEEN = __webpack_require__(8250);
var PROPS_CARTA = {
  scale: {
    x: 0.2,
    y: 0.2
  },
  desplazamiento_y: 20
};

// Función para reproducir el sonido de los efectos de las cartas
var initSoundDeletedCard = function initSoundDeletedCard(selecTrack) {
  var audioSelected = "";
  switch (selecTrack) {
    case 0:
      audioSelected = last_card_deleted_namespaceObject;
      break;
    case 1:
      audioSelected = card_deleted_namespaceObject;
      break;
    case 2:
      audioSelected = rebote_namespaceObject;
  }
  var audio = new Audio(audioSelected);
  audio.volume = 0.2;
  audio.muted = false;
  audio.play();
};
var Baraja = function Baraja(_ref) {
  var pos = _ref.pos;
  var _useContext = (0,react.useContext)(contextBaraja),
    cartasBaraja = _useContext.cartasBaraja,
    setCartasBaraja = _useContext.setCartasBaraja;
  var _useState = (0,react.useState)([]),
    _useState2 = Baraja_slicedToArray(_useState, 2),
    cartasSprite = _useState2[0],
    setCartasSprite = _useState2[1];
  var _useContext2 = (0,react.useContext)(contextBaraja),
    selectedCard = _useContext2.selectedCard,
    setSelectedCard = _useContext2.setSelectedCard;
  var isDragging = (0,react.useRef)(false);
  var isRetorning = (0,react.useRef)(false);
  var initialProps = (0,react.useRef)(null);
  var referenciaSprite = (0,react.useRef)(null);
  var positionPointer = (0,react.useRef)({
    x: 0,
    y: 0
  });
  var alpha = (0,react.useRef)(1);
  var app = (0,index_es/* useApp */.Y0)();
  var createDataSprite = function createDataSprite(data) {
    console.log("🚀 ~ file: Baraja.jsx:56 ~ createDataSprite ~ data:", data);
    return data.map(function (_ref2, index) {
      var img = _ref2.img;
      return {
        id: index,
        img: img,
        scale: PROPS_CARTA.scale,
        rot: 0,
        zIndex: 0,
        anchor: {
          x: 0.4,
          y: 0.8
        },
        select: false
      };
    });
  };
  var reDistribution = function reDistribution(arrayIn) {
    var xBar = pos.x;
    var yBar = pos.y;
    var initialAngle = arrayIn.length === 1 ? 0 : Math.trunc(arrayIn.length / 2) * -0.3;
    var angle = initialAngle;
    var newCartasSprite = arrayIn.map(function (carta, index) {
      var rot = carta.rot,
        anchor = carta.anchor,
        x = carta.x,
        y = carta.y,
        rest = Baraja_objectWithoutProperties(carta, Baraja_excluded);
      if (index === 0) {
        angle = initialAngle;
      } else {
        angle = angle + 0.4;
      }
      xBar = xBar + 45;
      return Baraja_objectSpread({
        rot: angle,
        anchor: {
          x: 0.5,
          y: 0.6
        },
        x: xBar,
        y: yBar
      }, rest);
    });
    return newCartasSprite;
  };
  var showSelectedCard = function showSelectedCard() {
    var idCarta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var arraySprite = arguments.length > 1 ? arguments[1] : undefined;
    if (isRetorning.current) return;
    if (!arraySprite || !arraySprite[idCarta]) return;
    // Se trata de actualizar el estado de las cartas para que se muestren seleccionadas
    // la que se selecciona se eleva y las demás se bajan. Las de la izquierda se bajan hacia la izquierda
    // y las de la derecha hacia la derecha.
    var newCartasSprite = arraySprite.slice();
    newCartasSprite[idCarta].select = true;
    newCartasSprite[idCarta].zIndex = newCartasSprite.length;
    newCartasSprite[idCarta].scale = {
      x: PROPS_CARTA.scale.x + 0.045,
      y: PROPS_CARTA.scale.y + 0.045
    };

    // Seteamos la carta seleccionada en el estado global
    setSelectedCard(newCartasSprite[idCarta]);

    // A ambos lados se situan con un Zindex decreciente
    var zIndexMax = newCartasSprite.length;

    //Dividimos array desde la carta selecionada a izquierda y derecha
    var indexCenter = newCartasSprite.findIndex(function (carta) {
      return carta.id === idCarta;
    });
    var cardsLeft = [];
    var cardsRight = [];
    if (indexCenter !== 0) {
      if (indexCenter === newCartasSprite.length - 1) {
        cardsLeft = Baraja_toConsumableArray(newCartasSprite.slice(0, indexCenter));
        cardsRight = [];
      } else {
        cardsLeft = Baraja_toConsumableArray(newCartasSprite.slice(0, indexCenter));
        cardsRight = Baraja_toConsumableArray(newCartasSprite.slice(indexCenter + 1));
      }
    } else {
      cardsLeft = [];
      cardsRight = Baraja_toConsumableArray(newCartasSprite.slice(indexCenter + 1));
    }
    var numCartsLeft = cardsLeft.length;
    var newZIndex = zIndexMax - numCartsLeft;
    for (var index = 0; index < numCartsLeft; index++) {
      cardsLeft[index].select = false;
      cardsLeft[index].zIndex = newZIndex;
      cardsLeft[index].scale = PROPS_CARTA.scale;
      newZIndex++;
    }
    var numCartsRight = cardsRight.length;
    newZIndex = zIndexMax - 1;
    for (var _index = 0; _index < numCartsRight; _index++) {
      cardsRight[_index].select = false;
      cardsRight[_index].zIndex = newZIndex;
      cardsRight[_index].scale = PROPS_CARTA.scale;
      newZIndex--;
    }
    newCartasSprite = [].concat(Baraja_toConsumableArray(cardsLeft), [newCartasSprite[idCarta]], Baraja_toConsumableArray(cardsRight));
    alpha.current = 1;
    return newCartasSprite;
  };

  //* ====================================  EFECTO RETORNO CON LIBRERÍA TWEEN ====================

  var initReturn = function initReturn() {
    var _initialProps$current = initialProps.current,
      x = _initialProps$current.x,
      y = _initialProps$current.y,
      props = Baraja_objectWithoutProperties(_initialProps$current, Baraja_excluded2);
    var tween = new TWEEN.Tween({
      x: cartasSprite[initialProps.current.id].x,
      y: cartasSprite[initialProps.current.id].y
    }).to({
      x: x,
      y: y
    }, 1200).easing(TWEEN.Easing.Elastic.Out).onUpdate(function (_ref3) {
      var x = _ref3.x,
        y = _ref3.y;
      var newCartasSprite = cartasSprite.map(function (carta) {
        if (carta.id === initialProps.current.id) {
          var newCarta = Baraja_objectSpread({
            x: Math.trunc(x),
            y: Math.trunc(y)
          }, props);
          return newCarta;
        } else {
          return carta;
        }
      });
      setCartasSprite(newCartasSprite);
    }).start().onStart(function () {
      isRetorning.current = true;
    }).onComplete(function () {
      isRetorning.current = false;
    });
  };
  var animate = function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  };
  var effectReturnCarta = function effectReturnCarta() {
    initReturn();
    animate();
  };
  //* ====================================  FIN EFECTO RETORNO CON LIBRERÍA TWEEN ====================

  var onStart = function onStart(e) {
    var _e$target;
    if (isRetorning.current) return;
    if (cartasSprite[(_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.id].zIndex !== cartasSprite.length) return;
    isDragging.current = true;
    initialProps.current = cartasSprite[e.target.id];
    referenciaSprite.current = e.target;
    var newCartasSprite = cartasSprite.map(function (carta) {
      if (carta.id === initialProps.current.id) {
        var x = carta.x,
          y = carta.y,
          rot = carta.rot,
          anchor = carta.anchor,
          props = Baraja_objectWithoutProperties(carta, _excluded3);
        var newCart = Baraja_objectSpread({
          rot: 0,
          x: Math.trunc(e.data.global.x),
          y: Math.trunc(e.data.global.y),
          anchor: 0.5
        }, props);
        return newCart;
      } else {
        return carta;
      }
    });
    setCartasSprite(newCartasSprite);
  };
  var onMove = function onMove(e) {
    e.stopPropagation();
    if (isRetorning.current) return;
    if (!initialProps.current || !referenciaSprite.current) {
      initialProps.current = cartasSprite[e.target.id];
      referenciaSprite.current = e.target;
    }
    if (isDragging.current) {
      var _initialProps$current3, _initialProps$current4;
      var newCartasSprite = cartasSprite.map(function (carta) {
        var _initialProps$current2;
        if (carta.id === ((_initialProps$current2 = initialProps.current) === null || _initialProps$current2 === void 0 ? void 0 : _initialProps$current2.id)) {
          var x = carta.x,
            y = carta.y,
            props = Baraja_objectWithoutProperties(carta, _excluded4);
          var newCart = Baraja_objectSpread({
            x: Math.trunc(e.data.global.x),
            y: Math.trunc(e.data.global.y)
          }, props);
          return newCart;
        } else {
          return carta;
        }
      });

      // //* EFECTO DE DESVANECIMIENTO
      if (Math.abs(((_initialProps$current3 = initialProps.current) === null || _initialProps$current3 === void 0 ? void 0 : _initialProps$current3.y) - newCartasSprite[initialProps.current.id].y) > 300 || Math.abs(((_initialProps$current4 = initialProps.current) === null || _initialProps$current4 === void 0 ? void 0 : _initialProps$current4.x) - newCartasSprite[initialProps.current.id].x) > 300) {
        alpha.current = 0.5;
      } else {
        alpha.current = 1;
      }
      setCartasSprite(newCartasSprite);
    }
    //================================    ************************************************************  ================================
    //================================    MANEJO DE LAS CARTAS CUANDO NO SE ENCUENTRAN DRAG AND DROP    ================================
    //================================    ************************************************************  ================================
    else {
      var _e$target2, _e$target3, _e$target4, _positionPointer$curr, _e$target5, _referenciaSprite$cur, _referenciaSprite$cur2, _referenciaSprite$cur3, _positionPointer$curr2, _e$target6, _referenciaSprite$cur4, _referenciaSprite$cur5, _referenciaSprite$cur6, _e$target16, _positionPointer$curr3, _e$target17, _referenciaSprite$cur8, _referenciaSprite$cur9, _positionPointer$curr4, _e$target18, _referenciaSprite$cur10, _referenciaSprite$cur11;
      // Modificamos la referencia a las coordenadas del ratón.
      positionPointer.current = {
        x: Math.trunc(e.data.global.x),
        y: Math.trunc(e.data.global.y)
      };

      //Si estamos en la carta inicial y nos desplazamos hacia la derecha no hacemos nada
      if (((_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.id) === 0 && positionPointer.current.x < ((_e$target3 = e.target) === null || _e$target3 === void 0 ? void 0 : _e$target3.x) - 50) return;

      //================================   NOS DESPLAZAMOS HACIA LA DERECHA    ================================
      if (positionPointer.current.x > ((_e$target4 = e.target) === null || _e$target4 === void 0 ? void 0 : _e$target4.x) + 30 && ((_positionPointer$curr = positionPointer.current) === null || _positionPointer$curr === void 0 ? void 0 : _positionPointer$curr.y) < ((_e$target5 = e.target) === null || _e$target5 === void 0 ? void 0 : _e$target5.y) + ((_referenciaSprite$cur = referenciaSprite.current) === null || _referenciaSprite$cur === void 0 ? void 0 : _referenciaSprite$cur.height) * (1 - ((_referenciaSprite$cur2 = referenciaSprite.current) === null || _referenciaSprite$cur2 === void 0 ? void 0 : (_referenciaSprite$cur3 = _referenciaSprite$cur2.anchor) === null || _referenciaSprite$cur3 === void 0 ? void 0 : _referenciaSprite$cur3.y)) &&
      //Valor de y de la carta levantada
      ((_positionPointer$curr2 = positionPointer.current) === null || _positionPointer$curr2 === void 0 ? void 0 : _positionPointer$curr2.y) > ((_e$target6 = e.target) === null || _e$target6 === void 0 ? void 0 : _e$target6.y) - ((_referenciaSprite$cur4 = referenciaSprite.current) === null || _referenciaSprite$cur4 === void 0 ? void 0 : _referenciaSprite$cur4.height) * ((_referenciaSprite$cur5 = referenciaSprite.current) === null || _referenciaSprite$cur5 === void 0 ? void 0 : (_referenciaSprite$cur6 = _referenciaSprite$cur5.anchor) === null || _referenciaSprite$cur6 === void 0 ? void 0 : _referenciaSprite$cur6.y) //Valor de y de la carta levantada
      ) {
        var _e$target7, _e$target8, _e$target9, _referenciaSprite$cur7, _e$target10, _e$target12, _e$target13;
        //Si estamos en la carta final habilitamos la zona para que se seleccione en caso de que no esté seleccionada
        var checkIdFinal = cartasSprite[cartasSprite.length - 1].id;
        if (checkIdFinal === ((_e$target7 = e.target) === null || _e$target7 === void 0 ? void 0 : _e$target7.id) && positionPointer.current.x > ((_e$target8 = e.target) === null || _e$target8 === void 0 ? void 0 : _e$target8.x) && positionPointer.current.x < ((_e$target9 = e.target) === null || _e$target9 === void 0 ? void 0 : _e$target9.x) + ((_referenciaSprite$cur7 = referenciaSprite.current) === null || _referenciaSprite$cur7 === void 0 ? void 0 : _referenciaSprite$cur7.width) && cartasSprite[(_e$target10 = e.target) === null || _e$target10 === void 0 ? void 0 : _e$target10.id].zIndex !== cartasSprite.length) {
          var _e$target11;
          setCartasSprite(showSelectedCard((_e$target11 = e.target) === null || _e$target11 === void 0 ? void 0 : _e$target11.id, cartasSprite));
        } else if (cartasSprite[(_e$target12 = e.target) === null || _e$target12 === void 0 ? void 0 : _e$target12.id].zIndex === cartasSprite.length && checkIdFinal === ((_e$target13 = e.target) === null || _e$target13 === void 0 ? void 0 : _e$target13.id)) {
          var _e$target14;
          setCartasSprite(showSelectedCard((_e$target14 = e.target) === null || _e$target14 === void 0 ? void 0 : _e$target14.id, cartasSprite));
        } else {
          var _e$target15;
          // Avanzamos una carta a la derecha
          setCartasSprite(showSelectedCard(((_e$target15 = e.target) === null || _e$target15 === void 0 ? void 0 : _e$target15.id) + 1, cartasSprite));
        }
      }

      //================================    MANEJO DE LAS CARTAS CUANDO NOS DESPLAZAMOS HACIA LA IZQUIERDA    ================================
      else if (positionPointer.current.x < ((_e$target16 = e.target) === null || _e$target16 === void 0 ? void 0 : _e$target16.x) - 30 && ((_positionPointer$curr3 = positionPointer.current) === null || _positionPointer$curr3 === void 0 ? void 0 : _positionPointer$curr3.y) < ((_e$target17 = e.target) === null || _e$target17 === void 0 ? void 0 : _e$target17.y) + ((_referenciaSprite$cur8 = referenciaSprite.current) === null || _referenciaSprite$cur8 === void 0 ? void 0 : _referenciaSprite$cur8.height) / ((_referenciaSprite$cur9 = referenciaSprite.current) === null || _referenciaSprite$cur9 === void 0 ? void 0 : _referenciaSprite$cur9.anchor.y) && ((_positionPointer$curr4 = positionPointer.current) === null || _positionPointer$curr4 === void 0 ? void 0 : _positionPointer$curr4.y) > ((_e$target18 = e.target) === null || _e$target18 === void 0 ? void 0 : _e$target18.y) - ((_referenciaSprite$cur10 = referenciaSprite.current) === null || _referenciaSprite$cur10 === void 0 ? void 0 : _referenciaSprite$cur10.height) + (1 - ((_referenciaSprite$cur11 = referenciaSprite.current) === null || _referenciaSprite$cur11 === void 0 ? void 0 : _referenciaSprite$cur11.anchor.y))) {
        var _e$target19, _e$target20, _e$target21, _referenciaSprite$cur12, _e$target22, _e$target24, _e$target25;
        var checkIdInitial = cartasSprite[0].id;
        if (checkIdInitial === ((_e$target19 = e.target) === null || _e$target19 === void 0 ? void 0 : _e$target19.id) && positionPointer.current.x < ((_e$target20 = e.target) === null || _e$target20 === void 0 ? void 0 : _e$target20.x) && positionPointer.current.x > ((_e$target21 = e.target) === null || _e$target21 === void 0 ? void 0 : _e$target21.x) - ((_referenciaSprite$cur12 = referenciaSprite.current) === null || _referenciaSprite$cur12 === void 0 ? void 0 : _referenciaSprite$cur12.width) / 2 && cartasSprite[(_e$target22 = e.target) === null || _e$target22 === void 0 ? void 0 : _e$target22.id].zIndex !== cartasSprite.length) {
          var _e$target23;
          setCartasSprite(showSelectedCard((_e$target23 = e.target) === null || _e$target23 === void 0 ? void 0 : _e$target23.id, cartasSprite));
        } else if (cartasSprite[(_e$target24 = e.target) === null || _e$target24 === void 0 ? void 0 : _e$target24.id].zIndex === cartasSprite.length && checkIdInitial === ((_e$target25 = e.target) === null || _e$target25 === void 0 ? void 0 : _e$target25.id)) {
          var _e$target26;
          setCartasSprite(showSelectedCard((_e$target26 = e.target) === null || _e$target26 === void 0 ? void 0 : _e$target26.id, cartasSprite));
        } else {
          var _e$target27;
          setCartasSprite(showSelectedCard(((_e$target27 = e.target) === null || _e$target27 === void 0 ? void 0 : _e$target27.id) - 1, cartasSprite));
        }
      }
    }
  };
  var getNewReferenceSprite = function getNewReferenceSprite(idCartas) {
    return app.stage.getChildByName("carta" + idCartas, true).parent;
  };
  //? Borrado de cartas del array

  var onDeleteCard = function onDeleteCard(idCarta) {
    //! DELETING CARDS  //

    if (cartasSprite.length === 1) {
      setCartasSprite([]);
      initSoundDeletedCard(0);
    } else {
      // Creamos una copia del array de cartas
      var newCartasSprite = Baraja_toConsumableArray(cartasSprite);
      // creamos nuevo array de cartas sin la carta que se ha eliminado
      newCartasSprite = newCartasSprite.filter(function (carta) {
        return carta.id !== initialProps.current.id;
      });
      borrarCartaBarajaEstadoGlobal(initialProps.current.id);
      // reasignamos los id de las cartas
      var newCartas = newCartasSprite.map(function (_ref4, index) {
        var id = _ref4.id,
          props = Baraja_objectWithoutProperties(_ref4, _excluded5);
        return Baraja_objectSpread({
          id: index
        }, props);
      });

      // recolocamos las cartas
      var newArrayCartasRedistribuidas = reDistribution(newCartas);

      // Obtenemos el id de la última carta del array
      var chekMaxId = newArrayCartasRedistribuidas[newArrayCartasRedistribuidas.length - 1].id;

      // comprobamos si la carta que se ha eliminado es la última del array
      if (chekMaxId === initialProps.current.id - 1) {
        setCartasSprite(showSelectedCard(chekMaxId, newArrayCartasRedistribuidas));
        referenciaSprite.current = getNewReferenceSprite(chekMaxId);
      } else {
        // Si no es la última carta del array, seleccionamos la carta con el mismo id que la que se ha eliminado

        setCartasSprite(showSelectedCard(initialProps.current.id, newArrayCartasRedistribuidas));
        referenciaSprite.current = getNewReferenceSprite(initialProps.current.id);
      }
      initSoundDeletedCard(1);
    }
  };
  var borrarCartaBarajaEstadoGlobal = function borrarCartaBarajaEstadoGlobal(idCarta) {
    var newCartasBaraja = cartasBaraja.filter(function (carta) {
      return carta.id !== idCarta;
    });
    setCartasBaraja(newCartasBaraja);
  };
  var onEnd = function onEnd() {
    var _initialProps$current5, _initialProps$current6, _initialProps$current7, _initialProps$current8;
    isDragging.current = false;
    if (isRetorning.current) return;
    if (Math.abs(((_initialProps$current5 = initialProps.current) === null || _initialProps$current5 === void 0 ? void 0 : _initialProps$current5.y) - cartasSprite[(_initialProps$current6 = initialProps.current) === null || _initialProps$current6 === void 0 ? void 0 : _initialProps$current6.id].y) > 300 || Math.abs(((_initialProps$current7 = initialProps.current) === null || _initialProps$current7 === void 0 ? void 0 : _initialProps$current7.x) - cartasSprite[(_initialProps$current8 = initialProps.current) === null || _initialProps$current8 === void 0 ? void 0 : _initialProps$current8.id].x) > 300) {
      onDeleteCard();
    } else {
      // Retornamos la carta a su posición inicial con el efecto de rebote y sonido
      effectReturnCarta();
      initSoundDeletedCard(2);
    }
    alpha.current = 1;
  };
  (0,react.useEffect)(function () {
    if (cartasBaraja.length === 0) {
      setCartasSprite([]);
      return;
    }
    var cartaSpriteInitial = createDataSprite(cartasBaraja);
    var newArray = reDistribution(cartaSpriteInitial);
    setCartasSprite(showSelectedCard(0, newArray));
  }, []);
  (0,react.useEffect)(function () {
    if (cartasBaraja.length === 0) {
      setCartasSprite([]);
      return;
    }
    var cartaSpriteInitial = createDataSprite(cartasBaraja);
    var newArray = reDistribution(cartaSpriteInitial);
    setCartasSprite(showSelectedCard(0, newArray));
  }, [cartasBaraja === null || cartasBaraja === void 0 ? void 0 : cartasBaraja.length]);
  var passRef = function passRef(ref) {
    referenciaSprite.current = ref;
  };

  // const onHandleClick = (e) => {
  // 	console.log("onHandleClick", e.detail);

  // 	if (e.detail === 2) {
  // 		onDeleteCard();
  // 		console.log("onHandleClick", cartasSprite);
  // 	}
  // };

  return /*#__PURE__*/react.createElement(react.Fragment, null, cartasSprite && cartasSprite.map(function (_ref5, index) {
    var _initialProps$current9;
    var id = _ref5.id,
      img = _ref5.img,
      x = _ref5.x,
      y = _ref5.y,
      anchor = _ref5.anchor,
      zIndex = _ref5.zIndex,
      rot = _ref5.rot,
      scale = _ref5.scale,
      select = _ref5.select;
    return /*#__PURE__*/react.createElement(Carta, {
      id: id,
      key: index,
      image: img,
      position: {
        x: x,
        y: select ? y - 30 : y
      },
      angle: rot,
      alpha: ((_initialProps$current9 = initialProps.current) === null || _initialProps$current9 === void 0 ? void 0 : _initialProps$current9.id) === id ? alpha.current : 1,
      anchor: anchor,
      zIndex: zIndex,
      scale: scale,
      clickStart: onStart,
      clickEnd: onEnd
      // dblClick={onHandleClick}
      ,
      mouseMove: onMove,
      name: "carta" + id,
      passRef: passRef,
      visibleText: (selectedCard === null || selectedCard === void 0 ? void 0 : selectedCard.id) === id ? true : false
    });
  }));
};
;// CONCATENATED MODULE: ./src/components/baraja/data.js
var mockData = [{
  "bg-border": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/01_borde_eea64181d3.png",
  "bg-card": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/bg_blue_generic_04ef5399a0.png",
  rarity: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/frame_rare_74268217ef.png",
  logo: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/Logo_Suja_1f96e7632f.png",
  img: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/1_card_34a46d66e3.png",
  text: "SIN POCIONES"
}, {
  "bg-border": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/01_borde_eea64181d3.png",
  "bg-card": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/bg_blue_generic_04ef5399a0.png",
  rarity: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/frame_rare_74268217ef.png",
  logo: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/Logo_Suja_1f96e7632f.png",
  img: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/manoscabeza_9a405db572.png",
  text: "A LO LOCO"
}, {
  "bg-border": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/01_borde_eea64181d3.png",
  "bg-card": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/bg_blue_generic_04ef5399a0.png",
  rarity: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/frame_legendary_c2e11d5b53.png",
  logo: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/Logo_Suja_1f96e7632f.png",
  img: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/pistola_cbb26eb1dc.png",
  text: "ONLY GUNS"
}, {
  "bg-border": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/01_borde_eea64181d3.png",
  "bg-card": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/1_bg_suja_a3031ebcc0.png",
  rarity: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/frame_legendary_c2e11d5b53.png",
  logo: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/Logo_Suja_1f96e7632f.png",
  img: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/objetossuelo_4cf65d7326.png",
  text: "TIRA OBJETOS AL SUELO "
}, {
  "bg-border": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/01_borde_eea64181d3.png",
  "bg-card": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/1_bg_suja_a3031ebcc0.png",
  rarity: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/frame_legendary_c2e11d5b53.png",
  logo: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/Logo_Suja_1f96e7632f.png",
  img: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/saludo_d0db60bdf3.png",
  text: "DI HOLA"
}, {
  "bg-border": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/01_borde_eea64181d3.png",
  "bg-card": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/1_bg_suja_a3031ebcc0.png",
  rarity: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/frame_legendary_c2e11d5b53.png",
  logo: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/Logo_Suja_1f96e7632f.png",
  img: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/cancelaultima_e4b61f0f7f.png",
  text: "NO PUEDES AVANZAR"
}, {
  "bg-border": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/01_borde_eea64181d3.png",
  "bg-card": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/1_bg_suja_a3031ebcc0.png",
  rarity: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/frame_legendary_c2e11d5b53.png",
  logo: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/Logo_Suja_1f96e7632f.png",
  img: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/emotes_329856a1af.png",
  text: "USA TUS EMOJIS"
}, {
  "bg-border": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/01_borde_eea64181d3.png",
  "bg-card": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/1_bg_suja_a3031ebcc0.png",
  rarity: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/frame_legendary_c2e11d5b53.png",
  logo: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/Logo_Suja_1f96e7632f.png",
  img: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/jugarjuntos_a19a3c129e.png",
  text: "ELIGE COMPAÑERO DE ARMAS"
}, {
  "bg-border": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/01_borde_eea64181d3.png",
  "bg-card": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/1_bg_suja_a3031ebcc0.png",
  rarity: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/frame_legendary_c2e11d5b53.png",
  logo: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/Logo_Suja_1f96e7632f.png",
  img: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/pico_00614f7b5d.png",
  text: "PUEDES UTILIZAR EL PICO"
}, {
  "bg-border": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/01_borde_eea64181d3.png",
  "bg-card": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/1_bg_suja_a3031ebcc0.png",
  rarity: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/frame_legendary_c2e11d5b53.png",
  logo: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/Logo_Suja_1f96e7632f.png",
  img: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/singafas_5b6c9d1dd9.png",
  text: "SIN GAFAS"
}, {
  "bg-border": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/01_borde_eea64181d3.png",
  "bg-card": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/1_bg_suja_a3031ebcc0.png",
  rarity: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/frame_legendary_c2e11d5b53.png",
  logo: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/Logo_Suja_1f96e7632f.png",
  img: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/dedicarkill_54513ef5df.png",
  text: "DEDICA UN KILL"
}, {
  "bg-border": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/01_borde_eea64181d3.png",
  "bg-card": "https://bridder-strapi.s3.eu-central-1.amazonaws.com/1_bg_suja_a3031ebcc0.png",
  rarity: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/frame_legendary_c2e11d5b53.png",
  logo: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/Logo_Suja_1f96e7632f.png",
  img: "https://bridder-strapi.s3.eu-central-1.amazonaws.com/silencio_1f496c0edf.png",
  text: "SILENCIO"
}];
;// CONCATENATED MODULE: ./src/components/cardStore/CardDetail.jsx
function CardDetail_toConsumableArray(arr) { return CardDetail_arrayWithoutHoles(arr) || CardDetail_iterableToArray(arr) || CardDetail_unsupportedIterableToArray(arr) || CardDetail_nonIterableSpread(); }
function CardDetail_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CardDetail_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function CardDetail_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return CardDetail_arrayLikeToArray(arr); }
function CardDetail_slicedToArray(arr, i) { return CardDetail_arrayWithHoles(arr) || CardDetail_iterableToArrayLimit(arr, i) || CardDetail_unsupportedIterableToArray(arr, i) || CardDetail_nonIterableRest(); }
function CardDetail_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CardDetail_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CardDetail_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CardDetail_arrayLikeToArray(o, minLen); }
function CardDetail_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function CardDetail_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function CardDetail_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var CardDetail_getOrderZIndex = function getOrderZIndex(id) {
  switch (id) {
    case "bg-border":
      return 1;
    case "bg-card":
      return 2;
    case "rarity":
      return 3;
    case "logo":
      return 4;
    case "img":
      return 5;
    case "text":
      return 6;
    default:
      return 0;
  }
};
var CardDetail = function CardDetail(_ref) {
  var id = _ref.id,
    image = _ref.image,
    name = _ref.name,
    scale = _ref.scale,
    position = _ref.position,
    comprarCarta = _ref.comprarCarta;
  var _useContext = (0,react.useContext)(contextBaraja),
    tiendaCartas = _useContext.tiendaCartas;
  var _useState = (0,react.useState)(scale),
    _useState2 = CardDetail_slicedToArray(_useState, 2),
    scaleUpdate = _useState2[0],
    setScaleUpdate = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = CardDetail_slicedToArray(_useState3, 2),
    imgSprt = _useState4[0],
    setImgSprt = _useState4[1];
  var _useState5 = (0,react.useState)({
      x: 0,
      y: 0,
      width: 80,
      fontSize: 8
    }),
    _useState6 = CardDetail_slicedToArray(_useState5, 2),
    propsText = _useState6[0],
    setPropsText = _useState6[1];
  var arrayTextures = (0,react.useRef)([]);
  var textCard = (0,react.useRef)(null);
  var cargarImagenUrl = function cargarImagenUrl() {
    var arrayPropsCard = Object.entries(image);
    arrayTextures.current = [];
    arrayPropsCard.forEach(function (item, index) {
      var _item = CardDetail_slicedToArray(item, 2),
        key = _item[0],
        value = _item[1];
      if (key === "text") {
        textCard.current = value;
        return;
      }
      // Cargamos las texturas desde las url
      lib/* Assets.load */.deM.load(value).then(function (texture) {
        var newTexture = {
          id: key,
          texture: texture
        };
        if (!newTexture) return;
        // Obtenemos un array con las texturas
        arrayTextures.current = [].concat(CardDetail_toConsumableArray(arrayTextures.current), [newTexture]);
        arrayTextures.current.length === 5 && setImgSprt(arrayTextures.current);
      })["catch"](function (err) {
        return console.log(err);
      });
    });
    // setPropsText(({ x, y, width, fontSize, ...prev }) => ({
    // 	x: (scale.x * -32) / 0.14,
    // 	y: 15,
    // 	width: (scale.x * 75) / 0.16,
    // 	fontSize: (scale.x * 8) / 0.16,
    // 	...prev,
    // }));
    // Calculamos las proporciones del texto y las seteamos
  };

  (0,react.useEffect)(function () {
    cargarImagenUrl();
    return function () {
      setImgSprt(null);
      textCard.current = null;
    };
  }, []);
  (0,react.useEffect)(function () {
    cargarImagenUrl();
    return function () {
      setImgSprt(null);
      textCard.current = null;
    };
  }, [tiendaCartas === null || tiendaCartas === void 0 ? void 0 : tiendaCartas.length]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(index_es/* Container */.W2, {
    position: position
    // zIndex={zIndex}
    ,
    sortableChildren: true,
    interactive: true,
    id: id
    // pointerdown={(e) => console.log("down", e.detail)}
    // pointerup={clickEnd}
    // pointermove={mouseMove}
    ,
    pointerover: function pointerover(e) {
      return setScaleUpdate(0.16);
    },
    pointerout: function pointerout(e) {
      return setScaleUpdate(0.15);
    },
    onclick: function onclick(e) {
      return e.detail === 2 ? comprarCarta(e.target.id) : null;
    },
    cursor: "pointer"

    // anchor={anchor}
  }, imgSprt && imgSprt.map(function (_ref2, index) {
    var id = _ref2.id,
      texture = _ref2.texture;
    var zIndex = CardDetail_getOrderZIndex(id);
    return /*#__PURE__*/react.createElement(index_es/* Sprite */.jy, {
      name: name,
      texture: texture,
      ref: id === 0 ? referenciaSprite : null,
      key: index,
      scale: scaleUpdate
      // zIndex={zIndex}
      // anchor={anchor}
    });
  }), /*#__PURE__*/react.createElement(index_es/* Text */.xv, {
    text: textCard.current
    // zIndex={9}
    // width={propsText.width}
    ,
    x: 20,
    y: 15
    // // visible={visibleText}
    ,
    style: new lib/* TextStyle */.pn8({
      fontFamily: ["Roboto", "Source Sans Pro", "Helvetica", "sans-serif"],
      fontSize: 10,
      fill: ["#e4e3e8", "#fdfcff"],
      stroke: "#eef1f5",
      align: "center",
      wordWrap: true,
      wordWrapWidth: 50
    })
  })));
};
;// CONCATENATED MODULE: ./src/components/cardStore/CardStoreList.jsx
function CardStoreList_typeof(obj) { "@babel/helpers - typeof"; return CardStoreList_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, CardStoreList_typeof(obj); }
function CardStoreList_slicedToArray(arr, i) { return CardStoreList_arrayWithHoles(arr) || CardStoreList_iterableToArrayLimit(arr, i) || CardStoreList_unsupportedIterableToArray(arr, i) || CardStoreList_nonIterableRest(); }
function CardStoreList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CardStoreList_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function CardStoreList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function CardStoreList_toConsumableArray(arr) { return CardStoreList_arrayWithoutHoles(arr) || CardStoreList_iterableToArray(arr) || CardStoreList_unsupportedIterableToArray(arr) || CardStoreList_nonIterableSpread(); }
function CardStoreList_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CardStoreList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CardStoreList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CardStoreList_arrayLikeToArray(o, minLen); }
function CardStoreList_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function CardStoreList_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return CardStoreList_arrayLikeToArray(arr); }
function CardStoreList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function CardStoreList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function CardStoreList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? CardStoreList_ownKeys(Object(source), !0).forEach(function (key) { CardStoreList_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : CardStoreList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function CardStoreList_defineProperty(obj, key, value) { key = CardStoreList_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function CardStoreList_toPropertyKey(arg) { var key = CardStoreList_toPrimitive(arg, "string"); return CardStoreList_typeof(key) === "symbol" ? key : String(key); }
function CardStoreList_toPrimitive(input, hint) { if (CardStoreList_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (CardStoreList_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function ordenarSprites(tiendaCartas, columnas, ancho, alto) {
  var filaHeight = alto;
  var columnaWidth = ancho * columnas;
  var newArrayPosTienda = [];
  if (tiendaCartas.length === 0) return;
  var x = 0;
  var y = 0;
  tiendaCartas.forEach(function (carta, index) {
    var cartaNew = CardStoreList_objectSpread({}, carta);
    cartaNew.pos = [x, y];
    newArrayPosTienda = [].concat(CardStoreList_toConsumableArray(newArrayPosTienda), [cartaNew]);
    x += ancho;
    if (x >= columnaWidth) {
      x = 0;
      y += filaHeight;
    }
  });
  return newArrayPosTienda;
}
var CardStoreList = function CardStoreList(_ref) {
  var pos = _ref.pos;
  var _useContext = (0,react.useContext)(contextBaraja),
    tiendaCartas = _useContext.tiendaCartas,
    setTiendaCartas = _useContext.setTiendaCartas,
    cartasCompradas = _useContext.cartasCompradas,
    setCartasCompradas = _useContext.setCartasCompradas;
  var _useState = (0,react.useState)({
      width: 0,
      height: 0
    }),
    _useState2 = CardStoreList_slicedToArray(_useState, 2),
    areaStore = _useState2[0],
    setAreaStore = _useState2[1];
  var containerTienda = (0,react.useRef)(null);
  var enableFirstRender = (0,react.useRef)(true);
  var app = (0,index_es/* useApp */.Y0)();
  var eliminarCartaTienda = function eliminarCartaTienda(id) {
    // eliminamos la carta de la tienda
    var newCartas = tiendaCartas.filter(function (carta) {
      return carta.id !== id;
    });
    setTiendaCartas(newCartas);
  };
  var comprarCarta = function comprarCarta(id) {
    eliminarCartaTienda(id);
    // añadimos la carta a la zona de cartas compradas
    var carta = tiendaCartas.find(function (carta) {
      return carta.id === id;
    });
    var cartasCompradasNew = [].concat(CardStoreList_toConsumableArray(cartasCompradas), [carta]);
    setCartasCompradas(cartasCompradasNew);
  };
  var draw = function draw(g) {
    g === null || g === void 0 ? void 0 : g.beginFill(0xff0000);
    g === null || g === void 0 ? void 0 : g.drawRoundedRect(0, 0, areaStore === null || areaStore === void 0 ? void 0 : areaStore.width, areaStore === null || areaStore === void 0 ? void 0 : areaStore.height, 15);
    g === null || g === void 0 ? void 0 : g.endFill();
  };

  // useEffect(() => {
  // 	setTiendaCartas(ordenarSprites(tiendaCartas, 3, 90, 125));
  // 	enableFirstRender.current = false;
  // }, []);

  (0,react.useEffect)(function () {
    if ((tiendaCartas === null || tiendaCartas === void 0 ? void 0 : tiendaCartas.length) === 0) return;
    setTiendaCartas(ordenarSprites(tiendaCartas, 3, 95, 130));
  }, [tiendaCartas === null || tiendaCartas === void 0 ? void 0 : tiendaCartas.length]);
  return /*#__PURE__*/react.createElement(index_es/* Container */.W2, {
    position: [pos[0], pos[1] - 200],
    ref: containerTienda
  }, enableFirstRender && /*#__PURE__*/react.createElement(index_es/* Graphics */.TC, {
    draw: draw
  }), tiendaCartas && tiendaCartas.map(function (_ref2, index) {
    var id = _ref2.id,
      img = _ref2.img,
      scale = _ref2.scale,
      pos = _ref2.pos;
    return /*#__PURE__*/react.createElement(CardDetail, {
      id: id,
      key: index,
      image: img,
      scale: scale,
      name: "carta" + id,
      position: pos,
      comprarCarta: comprarCarta
    });
  }));
};
;// CONCATENATED MODULE: ./src/components/cardStore/CardStore.jsx
function CardStore_slicedToArray(arr, i) { return CardStore_arrayWithHoles(arr) || CardStore_iterableToArrayLimit(arr, i) || CardStore_unsupportedIterableToArray(arr, i) || CardStore_nonIterableRest(); }
function CardStore_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function CardStore_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CardStore_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CardStore_arrayLikeToArray(o, minLen); }
function CardStore_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function CardStore_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function CardStore_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var draw = function draw(g) {
  g === null || g === void 0 ? void 0 : g.beginFill(0x000000, 0.5);
  g === null || g === void 0 ? void 0 : g.drawRoundedRect(0, 0, 50, 50, 15);
  g === null || g === void 0 ? void 0 : g.endFill();
};
var CardStore = function CardStore() {
  var _useContext = (0,react.useContext)(contextBaraja),
    tiendaCartas = _useContext.tiendaCartas;
  var _useState = (0,react.useState)([0, window.innerHeight / 2 - 50]),
    _useState2 = CardStore_slicedToArray(_useState, 2),
    position = _useState2[0],
    setPosition = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = CardStore_slicedToArray(_useState3, 2),
    showStore = _useState4[0],
    setShowStore = _useState4[1];
  var _useState5 = (0,react.useState)("default"),
    _useState6 = CardStore_slicedToArray(_useState5, 2),
    cursor = _useState6[0],
    setCursor = _useState6[1];
  var containerRef = (0,react.useRef)(null);
  var isDragging = (0,react.useRef)(false);
  var graphicRef = (0,react.useRef)(null);
  var app = (0,index_es/* useApp */.Y0)();
  var checkBounds = function checkBounds(e) {
    var widthStage = app.screen.width;
    var heightStage = app.screen.height;
    var _containerRef$current = containerRef.current.getBounds(),
      x = _containerRef$current.x,
      y = _containerRef$current.y,
      width = _containerRef$current.width,
      height = _containerRef$current.height;
    var pointerX = e.data.global.x;
    var pointerY = e.data.global.y;

    //Controlamos si el boton o su contenedor se sale de la pantalla en el eje X
    if (x < 0) {
      setPosition([0, y]);
      return;
    }
    if (x + width > widthStage) {
      setPosition([widthStage - width - 10, y]);
      return;
    }
    if (y < 0) {
      setPosition([x, height]);
      return;
    }
    if (y + height > heightStage) {
      setPosition([x, y - height]);
      return;
    }
    setPosition([pointerX - graphicRef.current.width / 2, pointerY - graphicRef.current.height / 2]);
  };
  var handelPointerDown = function handelPointerDown(e) {
    isDragging.current = true;
    setCursor("grabbing");
  };
  var handelPointerUp = function handelPointerUp(e) {
    isDragging.current = false;
    setCursor("grab");
  };
  var mouseMove = function mouseMove(e) {
    if (!(isDragging !== null && isDragging !== void 0 && isDragging.current)) return;
    checkBounds(e);
    setCursor("grabb");
  };
  (0,react.useEffect)(function () {
    setPosition([0, window.innerHeight / 2 - 50]);
  }, [tiendaCartas === null || tiendaCartas === void 0 ? void 0 : tiendaCartas.length]);
  return /*#__PURE__*/react.createElement(index_es/* Container */.W2, {
    cursor: cursor,
    ref: containerRef,
    position: position,
    sortChildren: true
  }, /*#__PURE__*/react.createElement(index_es/* Graphics */.TC, {
    draw: draw,
    ref: graphicRef
  }), /*#__PURE__*/react.createElement(index_es/* Sprite */.jy, {
    interactive: true,
    cursor: cursor
    // pointerdown={handelPointerDown}
    // pointerup={handelPointerUp}
    // pointermove={mouseMove}
    ,
    onclick: function onclick(e) {
      e.stopPropagation();
      setShowStore(!showStore);
    },
    image: "logo192.png",
    x: 1,
    scale: 0.25
  }), showStore && /*#__PURE__*/react.createElement(CardStoreList, {
    pos: [60, 0]
  }));
};
;// CONCATENATED MODULE: ./src/components/purchasedCards/PurchasedDetail.jsx
function PurchasedDetail_toConsumableArray(arr) { return PurchasedDetail_arrayWithoutHoles(arr) || PurchasedDetail_iterableToArray(arr) || PurchasedDetail_unsupportedIterableToArray(arr) || PurchasedDetail_nonIterableSpread(); }
function PurchasedDetail_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PurchasedDetail_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function PurchasedDetail_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return PurchasedDetail_arrayLikeToArray(arr); }
function PurchasedDetail_slicedToArray(arr, i) { return PurchasedDetail_arrayWithHoles(arr) || PurchasedDetail_iterableToArrayLimit(arr, i) || PurchasedDetail_unsupportedIterableToArray(arr, i) || PurchasedDetail_nonIterableRest(); }
function PurchasedDetail_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PurchasedDetail_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PurchasedDetail_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PurchasedDetail_arrayLikeToArray(o, minLen); }
function PurchasedDetail_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function PurchasedDetail_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function PurchasedDetail_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var PurchasedDetail_getOrderZIndex = function getOrderZIndex(id) {
  switch (id) {
    case "bg-border":
      return 1;
    case "bg-card":
      return 2;
    case "rarity":
      return 3;
    case "logo":
      return 4;
    case "img":
      return 5;
    case "text":
      return 6;
    default:
      return 0;
  }
};
var PurchasedDetail = function PurchasedDetail(_ref) {
  var id = _ref.id,
    image = _ref.image,
    name = _ref.name,
    scale = _ref.scale,
    position = _ref.position,
    anyadirCartaBaraja = _ref.anyadirCartaBaraja;
  console.log("🚀 ~ file: PurchasedDetail.jsx:27 ~ PurchasedDetail ~ scale:", scale);
  var _useContext = (0,react.useContext)(contextBaraja),
    cartasCompradas = _useContext.cartasCompradas;
  var _useState = (0,react.useState)(scale),
    _useState2 = PurchasedDetail_slicedToArray(_useState, 2),
    scaleFocus = _useState2[0],
    setScaleFocus = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = PurchasedDetail_slicedToArray(_useState3, 2),
    imgSprt = _useState4[0],
    setImgSprt = _useState4[1];
  var _useState5 = (0,react.useState)({
      x: 0,
      y: 0,
      width: 80,
      fontSize: 8
    }),
    _useState6 = PurchasedDetail_slicedToArray(_useState5, 2),
    propsText = _useState6[0],
    setPropsText = _useState6[1];
  var arrayTextures = (0,react.useRef)([]);
  var textCard = (0,react.useRef)(null);
  var cargarImagenUrl = function cargarImagenUrl() {
    var arrayPropsCard = Object.entries(image);
    arrayTextures.current = [];
    arrayPropsCard.forEach(function (item, index) {
      var _item = PurchasedDetail_slicedToArray(item, 2),
        key = _item[0],
        value = _item[1];
      if (key === "text") {
        textCard.current = value;
        return;
      }
      // Cargamos las texturas desde las url
      lib/* Assets.load */.deM.load(value).then(function (texture) {
        var newTexture = {
          id: key,
          texture: texture
        };
        if (!newTexture) return;
        // Obtenemos un array con las texturas
        arrayTextures.current = [].concat(PurchasedDetail_toConsumableArray(arrayTextures.current), [newTexture]);
        arrayTextures.current.length === 5 && setImgSprt(arrayTextures.current);
      })["catch"](function (err) {
        return console.log(err);
      });
    });

    // setPropsText(({ x, y, width, fontSize, ...prev }) => ({
    // 	x: (scale.x * -32) / 0.14,
    // 	y: 15,
    // 	width: (scale.x * 75) / 0.16,
    // 	fontSize: (scale.x * 8) / 0.16,
    // 	...prev,
    // }));
    // Calculamos las proporciones del texto y las seteamos
  };

  (0,react.useEffect)(function () {
    cargarImagenUrl();
    return function () {
      setImgSprt(null);
      textCard.current = null;
    };
  }, []);
  (0,react.useEffect)(function () {
    cargarImagenUrl();
    return function () {
      setImgSprt(null);
      textCard.current = null;
    };
  }, [cartasCompradas === null || cartasCompradas === void 0 ? void 0 : cartasCompradas.length]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(index_es/* Container */.W2, {
    position: position
    // zIndex={zIndex}
    ,
    sortableChildren: true,
    interactive: true,
    id: id
    // pointerdown={(e) => console.log("down", e.detail)}
    // pointerup={clickEnd}
    // pointermove={mouseMove}
    ,
    pointerover: function pointerover() {
      return setScaleFocus({
        x: 0.16,
        y: 0.16
      });
    },
    pointerout: function pointerout() {
      return setScaleFocus({
        x: 0.14,
        y: 0.14
      });
    },
    onclick: function onclick(e) {
      return e.detail === 2 ? anyadirCartaBaraja(e.target.id) : null;
    },
    cursor: "pointer",
    scale: scaleFocus
    // anchor={anchor}
  }, imgSprt && imgSprt.map(function (_ref2, index) {
    var id = _ref2.id,
      texture = _ref2.texture;
    var zIndex = PurchasedDetail_getOrderZIndex(id);
    return /*#__PURE__*/react.createElement(index_es/* Sprite */.jy, {
      name: name,
      texture: texture,
      ref: id === 0 ? referenciaSprite : null,
      key: index,
      scale: scale
    });
  }), /*#__PURE__*/react.createElement(index_es/* Text */.xv, {
    text: textCard.current
    // zIndex={9}
    // width={propsText.width}
    ,
    x: 20,
    y: 15
    // // visible={visibleText}
    ,
    style: new lib/* TextStyle */.pn8({
      fontFamily: ["Roboto", "Source Sans Pro", "Helvetica", "sans-serif"],
      fontSize: 10,
      fill: ["#e4e3e8", "#fdfcff"],
      stroke: "#eef1f5",
      align: "center",
      wordWrap: true,
      wordWrapWidth: 50
    })
  })));
};
;// CONCATENATED MODULE: ./src/components/purchasedCards/PurchasedCardsList.jsx
function PurchasedCardsList_typeof(obj) { "@babel/helpers - typeof"; return PurchasedCardsList_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PurchasedCardsList_typeof(obj); }
function PurchasedCardsList_toConsumableArray(arr) { return PurchasedCardsList_arrayWithoutHoles(arr) || PurchasedCardsList_iterableToArray(arr) || PurchasedCardsList_unsupportedIterableToArray(arr) || PurchasedCardsList_nonIterableSpread(); }
function PurchasedCardsList_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PurchasedCardsList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PurchasedCardsList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PurchasedCardsList_arrayLikeToArray(o, minLen); }
function PurchasedCardsList_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function PurchasedCardsList_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return PurchasedCardsList_arrayLikeToArray(arr); }
function PurchasedCardsList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function PurchasedCardsList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function PurchasedCardsList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PurchasedCardsList_ownKeys(Object(source), !0).forEach(function (key) { PurchasedCardsList_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PurchasedCardsList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function PurchasedCardsList_defineProperty(obj, key, value) { key = PurchasedCardsList_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function PurchasedCardsList_toPropertyKey(arg) { var key = PurchasedCardsList_toPrimitive(arg, "string"); return PurchasedCardsList_typeof(key) === "symbol" ? key : String(key); }
function PurchasedCardsList_toPrimitive(input, hint) { if (PurchasedCardsList_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (PurchasedCardsList_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





function PurchasedCardsList_ordenarSprites(cartasCompradas, ancho, alto) {
  var gap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
  var newArrayCartasCompradas = [];
  var x = 10;
  var y = 20;
  cartasCompradas.forEach(function (carta, index) {
    var cartaNew = PurchasedCardsList_objectSpread({}, carta);
    cartaNew.pos = [x, y];
    cartaNew.scale = 1.2;
    newArrayCartasCompradas.push(cartaNew);
    x += ancho + gap;
  });
  return newArrayCartasCompradas;
}
var PurchasedCardsList = function PurchasedCardsList(_ref) {
  var pos = _ref.pos;
  var _useContext = (0,react.useContext)(contextBaraja),
    cartasCompradas = _useContext.cartasCompradas,
    setCartasCompradas = _useContext.setCartasCompradas,
    cartasBaraja = _useContext.cartasBaraja,
    setCartasBaraja = _useContext.setCartasBaraja;
  (0,react.useEffect)(function () {
    setCartasCompradas(PurchasedCardsList_ordenarSprites(cartasCompradas, 100, 110, 5));
  }, [cartasCompradas.length]);
  var anyadirCartaBaraja = function anyadirCartaBaraja(id) {
    var carta = cartasCompradas.find(function (carta) {
      return carta.id === id;
    });
    var index = cartasCompradas.indexOf(carta);
    var newCartas = PurchasedCardsList_toConsumableArray(cartasCompradas);
    newCartas.splice(index, 1);
    setCartasCompradas(newCartas);
    var cartasBarajasNew = [].concat(PurchasedCardsList_toConsumableArray(cartasBaraja), [carta]);
    setCartasBaraja(cartasBarajasNew);
  };
  (0,react.useEffect)(function () {
    if ((cartasCompradas === null || cartasCompradas === void 0 ? void 0 : cartasCompradas.length) === 0) return;
    setCartasCompradas(PurchasedCardsList_ordenarSprites(cartasCompradas, 100, 110, 9));
  }, [cartasCompradas === null || cartasCompradas === void 0 ? void 0 : cartasCompradas.length]);
  return /*#__PURE__*/react.createElement(index_es/* Container */.W2, null, cartasCompradas && cartasCompradas.map(function (_ref2, index) {
    var id = _ref2.id,
      img = _ref2.img,
      scale = _ref2.scale,
      pos = _ref2.pos;
    return /*#__PURE__*/react.createElement(PurchasedDetail, {
      id: id,
      key: index,
      image: img,
      scale: scale,
      name: "carta" + id,
      position: pos,
      anyadirCartaBaraja: anyadirCartaBaraja
    });
  }));
};
;// CONCATENATED MODULE: ./src/components/purchasedCards/PurchasedCards.jsx





var PurchasedCards_draw = function draw(g) {
  g === null || g === void 0 ? void 0 : g.beginFill(0x021f0, 0.4);
  g === null || g === void 0 ? void 0 : g.drawRoundedRect(100, 10, window.innerWidth / 2, window.innerHeight / 5, 15);
  g === null || g === void 0 ? void 0 : g.endFill();
};
var PurchasedCards = function PurchasedCards() {
  var _useContext = (0,react.useContext)(contextBaraja),
    cartasCompradas = _useContext.cartasCompradas;
  var mask = (0,react.useRef)(null);
  return /*#__PURE__*/react.createElement(index_es/* Container */.W2, {
    sortChildren: true
  }, /*#__PURE__*/react.createElement(index_es/* Container */.W2, {
    sortChildren: true
  }, cartasCompradas && /*#__PURE__*/react.createElement(PurchasedCardsList, null)));
};
;// CONCATENATED MODULE: ./src/components/twitchCard/ExtTwitch.jsx
var ExtTwitch_excluded = ["children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ExtTwitch_slicedToArray(arr, i) { return ExtTwitch_arrayWithHoles(arr) || ExtTwitch_iterableToArrayLimit(arr, i) || ExtTwitch_unsupportedIterableToArray(arr, i) || ExtTwitch_nonIterableRest(); }
function ExtTwitch_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ExtTwitch_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ExtTwitch_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ExtTwitch_arrayLikeToArray(o, minLen); }
function ExtTwitch_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ExtTwitch_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ExtTwitch_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ExtTwitch_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ExtTwitch_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function ExtTwitch_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







lib/* settings.PREFER_ENV */.Xdb.PREFER_ENV = lib/* ENV.WEBGL2 */.ViN.WEBGL2;
var getSize = function getSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};
var initialSize = getSize();
var getPositionBaraja = function getPositionBaraja() {
  var _getSize = getSize(),
    width = _getSize.width,
    height = _getSize.height;
  return {
    x: width / 3,
    y: height / 3 * 2.5
  };
};
var options = {
  backgroundColor: "0x8fd7c500",
  raf: false,
  autoDensity: true,
  antialias: true
};
var contextBaraja = /*#__PURE__*/(0,react.createContext)();
// CONTEXT BRIDGE para poder usar el contexto Pixi
// the context bridge:
var ContextBridge = function ContextBridge(_ref) {
  var children = _ref.children,
    Context = _ref.Context,
    render = _ref.render;
  return /*#__PURE__*/React.createElement(Context.Consumer, null, function (value) {
    return render( /*#__PURE__*/React.createElement(Context.Provider, {
      value: value
    }, children));
  });
};
var Stage = function Stage(_ref2) {
  var children = _ref2.children,
    props = ExtTwitch_objectWithoutProperties(_ref2, ExtTwitch_excluded);
  return /*#__PURE__*/React.createElement(ContextBridge, {
    Context: contextBaraja,
    render: function render(children) {
      return /*#__PURE__*/React.createElement(index_es/* Stage */.Hf, props, children);
    }
  }, children);
};
var ExtTwitch = function ExtTwitch() {
  var _useState = (0,react.useState)(null),
    _useState2 = ExtTwitch_slicedToArray(_useState, 2),
    selectedCard = _useState2[0],
    setSelectedCard = _useState2[1];
  var _useState3 = (0,react.useState)(mockData),
    _useState4 = ExtTwitch_slicedToArray(_useState3, 2),
    tiendaCartas = _useState4[0],
    setTiendaCartas = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = ExtTwitch_slicedToArray(_useState5, 2),
    cartasCompradas = _useState6[0],
    setCartasCompradas = _useState6[1];
  var _useState7 = (0,react.useState)([]),
    _useState8 = ExtTwitch_slicedToArray(_useState7, 2),
    cartasBaraja = _useState8[0],
    setCartasBaraja = _useState8[1];
  var containerBarajaRef = (0,react.useRef)(null);
  var createDataSprite = function createDataSprite(data) {
    return data.map(function (data, index) {
      return {
        id: index,
        img: data,
        scale: 0.15,
        pos: [0, 0]
      };
    });
  };

  // POSIBLE SITIO PARA RECIBIR LA DATA (FETCH)
  (0,react.useEffect)(function () {
    setTiendaCartas(createDataSprite(mockData));
  }, []);
  return /*#__PURE__*/React.createElement(contextBaraja.Provider, {
    value: {
      selectedCard: selectedCard,
      setSelectedCard: setSelectedCard,
      tiendaCartas: tiendaCartas,
      setTiendaCartas: setTiendaCartas,
      cartasCompradas: cartasCompradas,
      setCartasCompradas: setCartasCompradas,
      cartasBaraja: cartasBaraja,
      setCartasBaraja: setCartasBaraja
    }
  }, /*#__PURE__*/React.createElement(Stage, _extends({}, initialSize, {
    options: options
  }), /*#__PURE__*/React.createElement(index_es/* Container */.W2, {
    sortableChildren: true,
    interactive: true,
    ref: containerBarajaRef
  }, /*#__PURE__*/React.createElement(PurchasedCards, null), /*#__PURE__*/React.createElement(CardStore, null), /*#__PURE__*/React.createElement(Baraja, {
    pos: getPositionBaraja()
  }))));
};
;// CONCATENATED MODULE: ./src/components/App/App.js


var App = function App() {
  /*#__PURE__*/react.createElement(ExtTwitch, null);
};
/* harmony default export */ const App_App = (App);
;// CONCATENATED MODULE: ./src/Panel.js



var root = client.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react.createElement(App_App, null));

/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(3935);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("Panel." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e9ba00c125d32ff61429")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "extension-cards-react:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			894: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateextension_cards_react"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkextension_cards_react"] = self["webpackChunkextension_cards_react"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [114,961], () => (__webpack_require__(507)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;