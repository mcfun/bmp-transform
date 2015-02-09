'use srict';

var fs = require('fs');
var app = exports = module.exports = {}; // jshint ignore: line

/**
 * Reads a bitmap file and returns the bitmap buffer.
 * @param  {String} fileName File directory and file name to read bitmap from.
 * @return {buffer}          Buffer after file read.
 */

app.readBmp = function(fileName) {
	return fs.readFileSync(fileName);
};

/**
 * Writes a buffer to a file.
 * @param  {String} fileDirName Directory location and file name to write to.
 * @param  {Buffer} buf         Bitmap buffer information to write to the file.
 */

app.writeFile = function(fileDirName, buf) {
	fs.writeFile(fileDirName, buf, function(err, data) {
		if (err) {throw err;}
		return data;
	});
};

module.exports.app = app;