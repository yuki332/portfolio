//common module declaration
var
  path = require('path'),
  config = {
    src: './src',
    styles: './src/_stylus',
    scripts: './src/scripts',
    images: './src/_img',
    www: './www'
  };


  module .exports = {
    //path declaration

    common:{
      src: config.src,
      www: config.www,
      first: config.first,
      htmls: path.join(config.src, '**/*.html'),
      styles: path.join(config.styles, '**/*!(_)*'),
      scripts: path.join(scripts.scripts, '**/*!(_)*'),
      images: path.join(config.images, '**/*')
    },

    //paths for ./src/*/**.* files
    src: {
      html: path.join(config.src, '**/*.html'),
      styles: config.styles,
      scripts: config.scripts,
      images: config.images
    },

    //path fro bundle
    www:{
      root: path.join(config.www, '/'),
      destHtml: path.join(config.www, '/'),
      destCss: path.join(config.www, '/css'),
      destJs: path.join(config.www, '/js'),
      destImg: path.join(config.www, '/img')
    }
  };
