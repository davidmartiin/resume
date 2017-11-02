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
                    files: ['scss/*.scss'],
                    tasks: ['sass'],
                    options: {
                        spawn: false,
                    }
                }
            }
        },
        autoprefixer: {
            dist:{
                files: {
                    'style.css':'style.css'
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
                    dest: 'img/compressed/'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    "style.css": 'scss/style.scss'
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['watch']);
}
