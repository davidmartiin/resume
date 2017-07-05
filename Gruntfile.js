module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                },
                css: {
                    files: ['']
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'js/weather.js',
                    'js/script.js'
                ],
                dest: 'js/production.js'
            }
        },
        uglify: {
            build: {
                src: 'js/production.js',
                dest: 'js/production.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/build/'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'style.css': 'scss/style.scss1'
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'watch']);
}
