'use strict'
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            name:"small",
            width: 320,
          },
          {
            name:"medium",
            width: 640
          },{
            name:"large", 
            width: 1024, 
          }
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'framework/css/img_src/',
          dest: 'framework/css/img/'
        }]
      }
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};