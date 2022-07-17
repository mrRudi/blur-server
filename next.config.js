const LINARIA_EXTENSION = ".linaria.module.css";
const LINARIA_LOADER = "@linaria/webpack5-loader";

function traverse(rules) {
  for (let rule of rules) {
    if (typeof rule.loader === "string" && rule.loader.includes("css-loader")) {
      if (
        rule.options &&
        rule.options.modules &&
        typeof rule.options.modules.getLocalIdent === "function"
      ) {
        let nextGetLocalIdent = rule.options.modules.getLocalIdent;
        rule.options.modules.mode = "local";
        rule.options.modules.auto = true;
        rule.options.modules.exportGlobals = true;
        rule.options.modules.exportOnlyLocals = false;
        rule.options.modules.getLocalIdent = (
          context,
          _,
          exportName,
          options
        ) => {
          if (context.resourcePath.includes(LINARIA_EXTENSION)) {
            return exportName;
          }
          return nextGetLocalIdent(context, _, exportName, options);
        };
      }
    }
    if (typeof rule.use === "object") {
      traverse(Array.isArray(rule.use) ? rule.use : [rule.use]);
    }
    if (Array.isArray(rule.oneOf)) {
      traverse(rule.oneOf);
    }
  }
}

const linariaLoader = (nextConfig, config, options) => {
  config.module.rules.push({
    test: /\.(tsx|ts|js|mjs|jsx)$/,
    include: [options.dir],
    exclude: /node_modules/,
    use: [
      options.defaultLoaders.babel,
      {
        loader: require.resolve(LINARIA_LOADER),
        options: {
          sourceMap: options.dev,
          ...(nextConfig.linaria || {}),
          extension: LINARIA_EXTENSION,
        },
      },
    ],
  });
};

const initialConfig = {
  reactStrictMode: true,
};

module.exports = (nextConfig = {}) => {
  return {
    ...nextConfig,
    ...initialConfig,
    webpack(config, options) {
      traverse(config.module.rules);
      linariaLoader(config, config, options);
      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }
      return config;
    },
  };
};
