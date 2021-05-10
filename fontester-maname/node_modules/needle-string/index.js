'use strict';
module.exports = function (haystack, needle) {
	if (typeof haystack !== 'string' || typeof needle !== 'string') {
		throw new TypeError('needle-string expects string arguments');
	}

	var num = 0;
	var pos = 0;
	var len = needle.length;

	while (num > -1) {
		pos = haystack.indexOf(needle, pos);
		if (pos > -1) {
			num++;
			pos += len;
		} else {
			break;
		}
	}
	return num;
};
