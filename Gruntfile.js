module.exports = function (grunt) {
  'use strict';

  config();
  tasks();

  function config() {
    var config = require('load-grunt-config')(grunt);
    grunt.initConfig(config);
  }

  function tasks() {
    grunt.registerTask('build', ['connect:server', 'watch:elm']);
  }
}