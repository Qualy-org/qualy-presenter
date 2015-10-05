'use strict';

var gulp  = require('gulp')
    ,fs     = require('fs')
    ,path   = require('path')
    ,tasks  = fs.readdirSync('./gulp/tasks/');

tasks.forEach(function (task) {
    require(path.join(__dirname, 'tasks', task));
});
