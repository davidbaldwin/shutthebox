"use strict";

var shutthebox = require("./shutthebox.js");

exports.test_doitsync = function(test) {
    test.equal(shutthebox.doitsync(1), 1);
    test.done();
};

exports.test_doit = function(test) {
	shutthebox.doitsync(1, function(number) {
		test.equal(number, 1);
		test.done();
	});
};