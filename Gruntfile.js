
//--when not recognized by windows powershell
//path=%PATH%;%APPDATA%\npm


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/SPCustomForm.js'],
        dest: 'dist/js/SPCustomForm.js',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dynamic_mappings: {
        // Grunt will search for "**/*.js" under "lib/" when the "uglify" task
        // runs and build the appropriate src-dest file mappings then, so you
        // don't need to update the Gruntfile when files are added or removed.
        files: [{
          expand: true, // Enable dynamic expansion.
          cwd: 'src/js/',
          src: ['*.js'], // Actual pattern(s) to match.
          dest: 'dist/js/', // Destination path prefix.
          ext: '.min.js', // Dest filepaths will have this extension.
          extDot: 'first' // Extensions in filenames begin after the first dot
        }],
      },
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');


  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};
