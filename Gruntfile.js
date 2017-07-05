module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
                dest: 'js/production.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.registerTask('default', ['concat', 'uglify']);
}
