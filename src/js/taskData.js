
'use strict';

var STORE_NAME = "tasks";

exports.save = function(tasks) {
    localStorage.setItem(STORE_NAME, JSON.stringify(tasks));
};

exports.load = function() {
    var tasks = localStorage.getItem(STORE_NAME);
    if(tasks) {
        return JSON.parse(tasks);
    }
    return [];
};

exports.clear = function() {
    localStorage.removeItem(STORE_NAME);
};