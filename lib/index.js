const MiniProgramGlobalRuntimeModule = require("./module/MiniProgramGlobalRuntimeModule");
const MiniProgramGlobalProperty = require("./module/MiniProgramGlobalProperty");

class MiniProgramGlobalRuntimeWebpackPlugin {
  reBuildGlobal = true;

  constructor(options = {}) {
    if (options && options.reBuildGlobal === false) {
      this.reBuildGlobal = false;
    }
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(
      "MiniProgramGlobalRuntimeWebpackPlugin",
      (compilation) => {
        compilation.hooks.additionalTreeRuntimeRequirements.tap(
          "RuntimePlugin",
          (chunk) => {
            compilation.addRuntimeModule(
              chunk,
              new MiniProgramGlobalRuntimeModule(
                compiler.options.output.globalObject,
              ),
            );

            if (this.reBuildGlobal) {
              compilation.addRuntimeModule(
                chunk,
                new MiniProgramGlobalProperty(
                  compiler.options.output.globalObject,
                ),
              );
            }
          },
        );
      },
    );
  }
}

module.exports = MiniProgramGlobalRuntimeWebpackPlugin;
