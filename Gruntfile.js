module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'public/javascripts/app.min.js'
            },
            registration: {
                src: 'client/scripts/controllers/registration.js',
                dest: 'public/javascripts/controllers/registration.min.js'
            },
            home: {
                src: 'client/scripts/controllers/home.js',
                dest: 'public/javascripts/controllers/home.min.js'
            },
            usersController: {
                src: 'client/scripts/controllers/neighborsController.js',
                dest: 'public/javascripts/controllers/neighborsController.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css",
                    "bootstrap/dist/css/bootstrap.css",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                "dest": "public/vendor/"
            },
            styles: {
                expand: true,
                cwd: "client/",
                src: [
                    "stylesheets/style.css"
                ],
                "dest": "public/"
            },
            views: {
                expand: true,
                cwd: "client",
                src: [
                    "views/routes/home.html",
                    "views/routes/registration.html",
                    "views/routes/neighbors.html",
                    "views/routes/loggedin.html",
                    "views/routes/events.html",
                    "views/routes/sale.html",
                    "views/routes/about.html"
                ],
                "dest": "public/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};