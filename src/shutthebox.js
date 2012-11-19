"use strict";

exports.doit = function(number, callback) {
    callback(null, 1);
};


exports.doitsync = function(number) {
    return 1;
};

