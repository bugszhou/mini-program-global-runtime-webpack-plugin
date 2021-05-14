"use strict";

const webpack = require("webpack");
const RuntimeModule = webpack.RuntimeModule;
const Template = webpack.Template;

class MiniProgramGlobalProperty extends RuntimeModule {
  constructor(globalObject) {
    super("global");

    this.globalObject = globalObject || "global";
  }

  /**
   * @returns {string} runtime code
   */
  generate() {
    return Template.asString([
      `try {`,
      Template.indent([
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
        `${this.globalObject}.Boolean=Boolean;`,
        `${this.globalObject}.Date=Date;`,
        `${this.globalObject}.Error=Error;`,
        `${this.globalObject}.JSON=JSON;`,
        `${this.globalObject}.Math=Math;`,
        `${this.globalObject}.NaN=NaN;`,
        `${this.globalObject}.Number=Number;`,
        `${this.globalObject}.Object=Object;`,
        `${this.globalObject}.RegExp=RegExp;`,
        `${this.globalObject}.String=String;`,
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
        `${this.globalObject}.RangeError=RangeError;`,
        `${this.globalObject}.ReferenceError=ReferenceError;`,
        `${this.globalObject}.SyntaxError=SyntaxError;`,
        `${this.globalObject}.TypeError=TypeError;`,
        `${this.globalObject}.Promise=typeof Promise !== 'undefined'? Promise : null;`,
        `${this.globalObject}.Map=typeof Map !== 'undefined'? Map : null;`,
        `${this.globalObject}.ArrayBuffer=typeof ArrayBuffer !== 'undefined'? ArrayBuffer : null;`,
        `${this.globalObject}.Float32Array=typeof Float32Array !== 'undefined'? Float32Array : null;`,
        `${this.globalObject}.Float64Array=typeof Float64Array !== 'undefined'? Float64Array : null;`,
        `${this.globalObject}.Int8Array=typeof Int8Array !== 'undefined'? Int8Array : null;`,
        `${this.globalObject}.Int16Array=typeof Int16Array !== 'undefined'? Int16Array : null;`,
        `${this.globalObject}.Int32Array=typeof Int32Array !== 'undefined'? Int32Array : null;`,
        `${this.globalObject}.Uint8Array=typeof Uint8Array !== 'undefined'? Uint8Array : null;`,
        `${this.globalObject}.Uint16Array=typeof Uint16Array !== 'undefined'? Uint16Array : null;`,
        `${this.globalObject}.Uint32Array=typeof Uint32Array !== 'undefined'? Uint32Array : null;`,
        `${this.globalObject}.DataView=typeof DataView !== 'undefined'? DataView : null;`,
        `${this.globalObject}.EvalError=typeof EvalError !== 'undefined'? EvalError : null;`,
        `${this.globalObject}.Reflect= typeof Reflect !== 'undefined'? Reflect : {}`,
        `${this.globalObject}.Set=typeof Set !== 'undefined'? Set : null;`,
        `${this.globalObject}.Symbol=typeof Symbol !== 'undefined'? Symbol : null;`,
        `${this.globalObject}.URIError=typeof URIError !== 'undefined'? URIError : null;`,
        `${this.globalObject}.Uint8ClampedArray=typeof Uint8ClampedArray !== 'undefined'? Uint8ClampedArray : null;`,
        `${this.globalObject}.WeakMap=typeof WeakMap !== 'undefined'? WeakMap : null;`,
        `${this.globalObject}.WeakSet= typeof WeakSet !== 'undefined'? WeakSet : null;`,
        `${this.globalObject}.setImmediate=typeof setImmediate !== 'undefined'? setImmediate : null;`,
      ]),
      "} catch (e) {",
      Template.indent([
        // This works if the window reference is available
        "if (typeof global === 'object') {",
        Template.indent("return global;"),
        "}",
        "return {}",
      ]),
      "}",
    ]);
  }
}

module.exports = MiniProgramGlobalProperty;
