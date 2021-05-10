'use strict';
var needles = require('needle-string');

/**
 * Expose `plugin`.
 */
module.exports = plugin;

/**
 * Metalsmith plugin that sets a `rootPath` variable on each file's metadata.
 * This allows you to find relative paths in your templates easily.
 *
 * @return {Function}
 */
function plugin() {
	return function (files, metalsmith, done) {
		Object.keys(files).forEach(function (file) {
			setImmediate(done);

			var pathslash = process.platform === 'win32' ? '\\' : '/';
			var rootPath = '';

			var levels = needles(file, pathslash);
			for (var i = 0; i < levels; i++) {
				rootPath += '../';
			}
			files[file].rootPath = rootPath;
		});
	};
}

