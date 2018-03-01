const gulp   = require('gulp')
    , fs     = require('fs')
    , path   = require('path')
    , tasks  = fs.readdirSync('./gulp/tasks/');

tasks.forEach((task) =>
    require(path.join(__dirname, 'tasks', task))
);
