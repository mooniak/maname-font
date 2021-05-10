var debug = require('debug')('metalsmith-markdown-remarkable'),
    path = require('path'),
    Remarkable = require('remarkable'),
    inspect = require('util').inspect;

module.exports = getPlugin;

/**
 * metalsmith plugin to convert markdown files via Remarkable.
 *
 * @param {String} Remarkable preset (optional)
 * @param {Object} Remarkable options (optional)
 * @return {Function}
 */
function getPlugin(preset, options) {
  debug('plugin initialized with preset %s, options %s', inspect(preset), inspect(options));
  var md = new Remarkable(preset, options);

  var run = function (files, metalsmith, done) {
    Object.keys(files).forEach(function (file) {
      debug('checking file: %s', file);
      if (! isMarkdown(file)) {
        return;
      }

      var data = files[file],
          dirName = path.dirname(file),
          htmlName = path.basename(file, path.extname(file)) + '.html';
      if (dirName !== '.') {
        htmlName = dirName + '/' + htmlName;
      }

      debug('converting file: %s', file);
      var str = md.render(data.contents.toString());
      data.contents = new Buffer(str);

      delete files[file];
      files[htmlName] = data;
    });
    done();
  };

  run.use = function () {
    md.use.apply(md, arguments);
    return run;
  };

  return run;
}

/**
 * Checks if a `file` is markdown.
 *
 * @param {String} file
 * @return {Boolean}
 */
function isMarkdown(file){
  return /\.md|\.markdown/.test(path.extname(file));
}
