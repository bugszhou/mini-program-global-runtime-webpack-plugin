"use strict";

const webpack = require("webpack");
const RuntimeModule = webpack.RuntimeModule;
const Template = webpack.Template;

class MiniProgramGlobalProperty extends RuntimeModule {
  globalObject = "global";

  constructor(globalObject) {
    super("global");

    this.globalObject = this.globalObject || globalObject;
  }

  /**
   * @returns {string} runtime code
   */
  generate() {
    return Template.asString([
      "if (typeof my !== 'undefined' && my) {",
      Template.indent("return my;"),
      "}",
      "if (typeof wx !== 'undefined' && wx) {",
      Template.indent([
        `${this.globalObject}.App=App;`,
        `${this.globalObject}.Behavior=Behavior;`,
        `${this.globalObject}.Component=Component;`,
        `${this.globalObject}.Page=Page;`,
        `${this.globalObject}.getApp=getApp;`,
      ]),
      "}",
      `${this.globalObject}.clearInterval=clearInterval;`,
      `${this.globalObject}.clearTimeout=clearTimeout;`,
      `${this.globalObject}.setInterval=setInterval;`,
      `${this.globalObject}.setTimeout=setTimeout;`,
      `${this.globalObject}.Infinity=Infinity`,
      `${this.globalObject}.Array=Array;`,
      `${this.globalObject}.ArrayBuffer=ArrayBuffer;`,
      `${this.globalObject}.Boolean=Boolean;`,
      `${this.globalObject}.DataView=DataView;`,
      `${this.globalObject}.Date=Date;`,
      `${this.globalObject}.Error=Error;`,
      `${this.globalObject}.EvalError=typeof EvalError !== 'undefined'? EvalError : null;`,
      `${this.globalObject}.Float32Array=Float32Array;`,
      `${this.globalObject}.Float64Array=Float64Array;`,
      `${this.globalObject}.Int8Array=Int8Array;`,
      `${this.globalObject}.Int16Array=Int16Array;`,
      `${this.globalObject}.Int32Array=Int32Array;`,
      `${this.globalObject}.JSON=JSON;`,
      `${this.globalObject}.Map=Map;`,
      `${this.globalObject}.Math=Math;`,
      `${this.globalObject}.NaN=NaN;`,
      `${this.globalObject}.Number=Number;`,
      `${this.globalObject}.Object=Object;`,
      `${this.globalObject}.Promise=Promise;`,
      `${this.globalObject}.RangeError=RangeError;`,
      `${this.globalObject}.ReferenceError=ReferenceError;`,
      `${this.globalObject}.Reflect= typeof Reflect !== 'undefined'? Reflect : {}`,
      `${this.globalObject}.RegExp=RegExp;`,
      `${this.globalObject}.Set=typeof Set !== 'undefined'? Set : null;`,
      `${this.globalObject}.String=String;`,
      `${this.globalObject}.Symbol=typeof Symbol !== 'undefined'? Symbol : null;`,
      `${this.globalObject}.SyntaxError=SyntaxError;`,
      `${this.globalObject}.TypeError=TypeError;`,
      `${this.globalObject}.URIError=typeof URIError !== 'undefined'? URIError : null;`,
      `${this.globalObject}.Uint8Array=Uint8Array;`,
      `${this.globalObject}.Uint8ClampedArray=typeof Uint8ClampedArray !== 'undefined'? Uint8ClampedArray : null;`,
      `${this.globalObject}.Uint16Array=Uint16Array;`,
      `${this.globalObject}.Uint32Array=Uint32Array;`,
      `${this.globalObject}.WeakMap=typeof WeakMap !== 'undefined'? WeakMap : null;`,
      `${this.globalObject}.WeakSet= typeof WeakSet !== 'undefined'? WeakSet : null;`,
      `${this.globalObject}.console=console;`,
      `${this.globalObject}.decodeURI=decodeURI;`,
      `${this.globalObject}.decodeURIComponent=decodeURIComponent;`,
      `${this.globalObject}.encodeURI=encodeURI;`,
      `${this.globalObject}.encodeURIComponent=encodeURIComponent;`,
      `${this.globalObject}.escape=escape;`,
      `${this.globalObject}.isFinite=isFinite;`,
      `${this.globalObject}.isNaN=isNaN;`,
      `${this.globalObject}.parseFloat=parseFloat;`,
      `${this.globalObject}.parseInt=parseInt;`,
      `${this.globalObject}.unescape=unescape;`,
      `${this.globalObject}.Function=Function;`,
      `${this.globalObject}.setImmediate=typeof setImmediate !== 'undefined'? setImmediate : null;`,
    ]);
  }
}

module.exports = MiniProgramGlobalProperty;
