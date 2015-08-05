module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            target: {
                files: {
                    'build/css-mint.min.css': ['src/css/normalize.css', 'src/css/buttons.css', 'src/css/footer.css', 'src/css/header.css', 'src/css/navbar.css', 'src/css/panel.css', 'src/css/typography.css', 'src/css/utilities.css']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};
