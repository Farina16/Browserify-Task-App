'use strict';

var $ = require('jquery');
var taskData = require('./taskData');
var taskRender = require('./taskRender');

exports.add = function() {
    taskRender.newTaskRender();
};

exports.delete = function(evt) {
    var taskTarget = evt.target;
    $(taskTarget).closest(".task").remove();
};

exports.clear = function() {
    taskData.clear();
    exports.render();
};

exports.save = function() {
    var tasks = [];
    $("#task-list").find(".task").each(function (index, task) {
        var $task = $(task);
        tasks.push({
            complete: $task.find(".complete").prop('checked'),
            description: $task.find(".description").val()
        });
    });
    taskData.save(tasks);
};

exports.cancel = function() {
    exports.render();
}

exports.render = function() {
    taskRender.tasksRender(taskData.load());
};