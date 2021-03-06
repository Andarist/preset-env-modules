module.exports = function(context) {
  const env = context.cache(() => process.env.BABEL_ENV);

  const targets = env === 'esmodules' ?
    {esmodules: true} :
    {browsers: ['last 2 versions', 'ie >= 11', 'safari >= 7']};

  return {
    presets: [
      [
        '@babel/env', {
          targets: targets,
          modules: false,
          loose: true,
          debug: true,
        }
      ],
    ],
    plugins: [
      ['inline-replace-variables', {
        "__MODULES_SUPPORTED__": env === 'esmodules' ? 'yes' : 'no'
      }]
    ]
  };
};