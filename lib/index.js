const RuntimeGlobals = require("webpack").RuntimeGlobals;
const MiniProgramGlobalRuntimeModule = require("./module/MiniProgramGlobalRuntimeModule");
const MiniProgramGlobalProperty = require("./module/MiniProgramGlobalProperty");

class MiniProgramGlobalRuntimeWebpackPlugin {
  constructor(options = {}) {
    this.reBuildGlobal = true;
    if (options && options.reBuildGlobal === false) {
      this.reBuildGlobal = false;
    }
  }

  apply(compiler) {
    compiler.hooks.compilation.tap(
      "MiniProgramGlobalRuntimeWebpackPlugin",
      (compilation) => {
        compilation.hooks.runtimeRequirementInTree
          .for(RuntimeGlobals.global)
          .tap("RuntimePlugin", (chunk) => {
            if (this.reBuildGlobal) {
              compilation.addRuntimeModule(
                chunk,
                new MiniProgramGlobalProperty(
                  compiler.options.output.globalObject,
                  compiler.options.output.chunkLoadingGlobal,
                ),
              );
            }

            compilation.addRuntimeModule(
              chunk,
              new MiniProgramGlobalRuntimeModule(
                compiler.options.output.globalObject,
                compiler.options.output.chunkLoadingGlobal,
              ),
            );
            return true;
          });
      },
    );
  }
}

module.exports = MiniProgramGlobalRuntimeWebpackPlugin;
