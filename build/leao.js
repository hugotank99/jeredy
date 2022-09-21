"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leao = void 0;
var felinos_1 = require("./felinos");
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leao.prototype.emitirSom = function (sound) {
        console.log("o le\u00E3o emiti ".concat(sound));
    };
    Leao.prototype.caca = function (presa, QuatDePresas, tipoDePresa) {
        if (tipoDePresa != undefined) {
            console.log("Le\u00E3o esta ca\u00E7ando um/a ".concat(tipoDePresa));
        }
        var numPresas = (QuatDePresas = undefined) ? 1 : QuatDePresas;
        console.log("O le\u00E3o esta ca\u00E7ando o numero de presas ".concat(numPresas, " ").concat(presa));
    };
    return Leao;
}(felinos_1.Felino));
exports.Leao = Leao;
