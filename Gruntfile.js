var path = require('path');

module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dev: {
        options: {
          sassDir:   'src/sass',
          cssDir:    'app/css',
          debugInfo: true
        }
      }
    },

    plato: {
      dist: {
        files: {
          'plato': ['src/js/**/*.js']
        }
      }
    },

    jshint: {
      options: {
        curly:          true,
        eqeqeq:         true,
        immed:          true,
        latedef:        true,
        newcap:         true,
        noarg:          true,
        sub:            true,
        undef:          true,
        boss:           true,
        eqnull:         true,
        node:           true,
        jquery:         true,
        globals:        {
          angular: true
        },
        ignores:        ['app/js/vendor/**/*.js']
      },
      dev:     {
        files: {
          src:     ['Gruntfile.js', 'src/js/**/*.js', 'app/js/*.js']
        }
      },
      dist:    {
        files: {
          src: ['Gruntfile.js', 'src/js/**/*.js', 'app/js/*.js']
        },
        options: {
          reporter:       'checkstyle',
          reporterOutput: 'dist/jshint.xml'
        }
      }
    },

    concat: {
      app:         {
        src:  ['src/js/app.js'],
        dest: 'app/js/app.js'
      },
      directives:  {
        src:  ['src/js/directives.js'],
        dest: 'app/js/directives.js'
      },
      filters:     {
        src:  ['src/js/filters.js'],
        dest: 'app/js/filters.js'
      },
      controllers: {
        src:  ['src/js/controllers/*.js'],
        dest: 'app/js/controllers.js'
      },
      services:    {
        src:  ['src/js/services/*.js'],
        dest: 'app/js/services.js'
      }
    },

    watch: {
      vendor_js: {
        files: ['app/js/vendor/**/*.js']
      },
      our_js:      {
        files: ['src/js/**/*.js', 'Gruntfile.js'],
        tasks: ['jshint', 'concat']
      },
      app:     {
        files:   ['app/**'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['src/sass/**/*.scss'],
        tasks: ['compass:dev']
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'app'
        }
      }
    },

    zip: {
      'app': {
        cwd:  'app/', /* directory to snag stuff from */
        src:  ['app/**'],
        dest: 'dist/admin-dist.zip'
      }
    }
  });

  grunt.registerTask('default', ['jshint:dev', 'concat', 'connect', 'watch']);

  grunt.registerTask('build', ['jshint:dist', 'plato']);

  grunt.registerTask('dist', ['compass:dev', 'zip']);
};