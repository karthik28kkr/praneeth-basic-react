module.exports = function override(config, env) {
    // Add Babel plugin
    const babelLoader = config.module.rules.find(rule =>
      rule.oneOf && rule.oneOf.find(loader => loader.loader && loader.loader.includes('babel-loader'))
    );
    
    if (babelLoader) {
      const loader = babelLoader.oneOf.find(loader => loader.loader && loader.loader.includes('babel-loader'));
      loader.options.plugins = (loader.options.plugins || []).concat(
        "@babel/plugin-proposal-private-property-in-object"
      );
    }
  
    return config;
  };
  