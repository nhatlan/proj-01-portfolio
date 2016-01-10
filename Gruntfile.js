'use strict'
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      img: {
        options: {
          engine: 'gm',
          sizes: [{
            name:"small",
            width: 360,
          },
          {
            name:"medium",
            width: 640, 
          },
          {
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
      },
      cover: {
        options: {
          engine: 'gm',
          newsFileOnly: true, 
          sizes: [{
            name:"portrait-extra-small",
            width: 320,
            height: 480, 
            aspectRatio: false, 
            gravity: "Center", 
          },
          {
            name:"portrait-small",
            width: 360,
            height: 640,
            aspectRatio: false, 
            gravity: "Center", 
          },
          {
            name:"portrait-medium",
            width: 768,
            height: 1024,
            aspectRatio: false, 
            gravity: "Center", 
          },
          {
            name:"portrait-large",
            width: 980,
            height: 1280,
            aspectRatio: false, 
            gravity: "Center", 
          },
          {
            name:"landscape-small", 
            width: 360,
            aspectRatio: true, 
          },
          {
            name:"landscape-medium", 
            width: 640,
            aspectRatio: true, 
          },
          {
            name:"landscape-large", 
            width: 1024,
            aspectRatio: true, 
          },
          {
            name:"landscape_extra-large", 
            width: 1920,
            aspectRatio: true, 
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
          cwd: 'framework/css/img_cover_src/',
          dest: 'framework/css/img_cover/'
        }]
      }
    },
  }

  );
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images:img', 'responsive_images:cover']);

};