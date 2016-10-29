var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  plumber = require('gulp-plumber');


config = {
  shape: {
    id: {
      generator: function (name) {
        return 'icon-' + name.slice(0, -4);
      }
    }
  },
  mode: {
    symbol: {
      example: false,
      inline: true
    }
  },
  svg: {                            // General options for created SVG files
    xmlDeclaration: false,          // Add XML declaration to SVG sprite
    doctypeDeclaration: false,      // Add DOCTYPE declaration to SVG sprite
    namespaceIDs: true,             // Add namespace token to all IDs in SVG shapes
    dimensionAttributes: true       // Width and height attributes on the sprite
  }
};

gulp.task('svg', function () {
  gulp.src('*.svg', {cwd: 'assets/svg'})
  .pipe(plumber())
  .pipe(svgSprite(config))
  .pipe(gulp.dest('build/dist'));
});
