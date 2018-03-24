module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            target: {
                files: {
                    'dist/css-mint.min.css': ['dist/css-mint.css']
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/css-mint.css': 'src/index.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/*.scss', 'src/**/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false,
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass', 'cssmin']);
};
