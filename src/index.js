class BuildTimePlugin {
  apply(compiler) {
    // 在构建完成后的回调函数中输出构建时间信息
    compiler.hooks.done.tap('BuildTimePlugin', (stats) => {
      const buildTime = new Date().toLocaleTimeString();
      console.log("hello,kaka's app Build completed at:", buildTime);
    });
  }
}

module.exports = BuildTimePlugin;
