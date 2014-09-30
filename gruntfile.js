module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({
		connect: {
			server: {
				options: {
					protocol: 'http',
					port: 9001,
					keepalive: true,
					livereload: true
				}
			}
		},
		clean: {
			dist: ['assets/css/'],
		},
		stylus: {
			compile: {
				options: {
					paths: ['assets/css/', 'assets/styl/'],
					compress: false,
					use: [
                        require('jeet')
                    ]
				},
				files: {
					'assets/css/main.css': ['assets/styl/main.styl']
				}
			}
		},
		watch: {
			css: {
				files: ['assets/styl/*.styl'],
				tasks: ['clean', 'stylus'],
				options: {
					livereload: true
				}
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');


	grunt.registerTask('w', ['watch']);
	grunt.registerTask('build', ['clean', 'stylus']);
};