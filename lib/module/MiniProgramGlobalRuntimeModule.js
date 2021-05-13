
"use strict";

const webpack = require("webpack");
const RuntimeGlobals = webpack.RuntimeGlobals;
const RuntimeModule = webpack.RuntimeModule;
const Template = webpack.Template;

class MiniProgramGlobalRuntimeModule extends RuntimeModule {
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
			`${RuntimeGlobals.global} = (function() {`,
			Template.indent([
				"if (typeof globalThis === 'object') return globalThis;",
				`if (typeof ${this.globalObject} === 'object') return ${this.globalObject};`,
				"try {",
				Template.indent(
					// This works in non-strict mode
					// or
					// This works if eval is allowed (see CSP)
					"return this || new Function('return this')();"
				),
				"} catch (e) {",
				Template.indent(
					// This works if the window reference is available
					"if (typeof window === 'object') return window;"
				),
				"}"
				// It can still be `undefined`, but nothing to do about it...
				// We return `undefined`, instead of nothing here, so it's
				// easier to handle this case:
				//   if (!global) { … }
			]),
			"})();"
		]);
	}
}

module.exports = MiniProgramGlobalRuntimeModule;
