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
      files: [
              {
                expand: true,     // Enable dynamic expansion.
                src: ['src/js/*.js'], // Actual pattern(s) to match.
                dest: 'dist/js/',   // Destination path prefix.
                ext: '.min.js',   // Dest filepaths will have this extension.
                extDot: 'first'   // Extensions in filenames begin after the first dot
              },
            ],
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['img/*.{png,jpg,gif}'],
          dest: 'images/build/'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};
