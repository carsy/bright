/* global module:false */
/* global require:false */

module.exports = function (grunt) {
  'use strict';

  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // configurable paths
    app: {
      views: 'views',
      scripts: 'scripts',
      images: 'images',
      fonts: 'fonts',
      css: 'styles/css',
      sass: 'styles/scss'
    },
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      all: [
        'Gruntfile.js',
        '<%= app.js %>/*.js'
      ],
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      compass: {
        files: ['<%= app.sass %>/*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      styles: {
        files: ['<%= app.css %>/*.css'],
        tasks: ['autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'index.html',
          '<%= app.views %>/*.html',
          '<%= app.css %>/*.css',
          '<%= app.scripts %>/**/*.js',
          '<%= app.images %>/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: ['.']
        }
      }
    },
    compass: {
      options: {
        sassDir: '<%= app.sass %>',
        cssDir: '<%= app.css %>',
        imagesDir: '<%= app.images %>',
        javascriptDir: '<%= app.scripts %>',
        fontsDir: '<%= app.fonts %>'
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      }
    },
    requirejs: {
      compile: {

        options: {
          appDir: '.',
          baseUrl: '.',
          // dir: 'target/',
          // optimize: 'uglify',
          mainConfigFile: 'scripts/main.js',
          // modules: [{
          //   name: 'MyModule'
          // }],
          logLevel: 0,
          findNestedDependencies: true,
          fileExclusionRegExp: /^\./,
          inlineText: true
        }
      }
    }
  });

  grunt.registerTask('server', function () {
    grunt.task.run([
      'autoprefixer',
      'connect:livereload',
      'compass:server',
      'watch'
    ]);
  });

  grunt.registerTask('build', function () {
    grunt.task.run([]); // TODO: minify all the things: scripts, css, html, images
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'autoprefixer', 'compass']);

};