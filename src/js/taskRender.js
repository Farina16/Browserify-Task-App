'use strict';

var $ = require('jquery');
var taskElement =
    '<li class="task">' +
        '<input class="complete" type="checkbox"/>' +
        '<input type="text" class="description"/>' +
        '<input type="button" value="Delete" class="delete-task"/>' +
    '</li>';

function taskRender(task) {
    var $task = $(taskElement);
    if(task.complete){
        $task.find(".complete").attr("checked", "checked");
    }
    $task.find(".description").val(task.description);
    return $task;
}

exports.tasksRender = function(tasks) {
    var tasksArray = $.map(tasks, taskRender);

    $("#task-list").empty().append(tasksArray);
}

exports.newTaskRender = function() {
    var $tasklist = $("#task-list");
    $tasklist.append(taskRender({}));

}