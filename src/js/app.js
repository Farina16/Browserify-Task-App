'use strict';

var $ = require('jquery');

var tasks = require('./tasks');

function addTask() {
    tasks.add();
}

function saveTask() {
    tasks.save();
}

function deleteAllTask() {
    tasks.clear();
}

function deleteOneTask(evt) {
    tasks.delete(evt);
}

function cancelTask() {
    tasks.cancel();
}

function registerHandler() {
    $('#add-task').on("click", addTask);
    $('#delete-all-tasks').on("click", deleteAllTask);
    $('#cancel-task').on("click", cancelTask);
    $('#task-list').on("click", ".delete-task",deleteOneTask);
    $('#save-task').on("click", saveTask);
}

registerHandler();
console.log("Sda");
tasks.render();
console.log(tasks);