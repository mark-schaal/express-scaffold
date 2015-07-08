'use strict'

var path = require('path');

module.exports = function(grunt) {  
	grunt.initConfig({
		jasmine_node: {
			options: {
				forceExit: false,
				match: '.',
				matchall: false,
				extensions: 'js',
				specNameMatcher: 'spec'
			},
			all: ['tests/']
		},
		sass: {
			dist: {
				options: {
					includePaths: require('node-refills').includePaths
				},
				files: {
					'public/stylesheets/style.css' : 'public/scss/style.scss'
				}
			}
		},
		express: {
			options: {
				port: 4000,
				hostname: '127.0.0.1'
			},
			livereload: {
				options: {
					server: path.resolve('./app.js'),
					livereload: true,
					serverreload: true,
					bases: [path.resolve('./public')]
				}
			}
		},
		watch: {
			css: {
				files: ['**/*.scss'],
				tasks: ['sass', 'concat', 'cssmin']
			},
			js: {
				files: ['public/vendors/**/*.js','public/javascripts/*.js','public/javascripts/**/*.js'],
				tasks: ['concat', 'uglify', 'jshint']
			}
		},
		jshint: {
			all: {
				src: 'public/javascripts/main.js'
			}
		},
		concat: {
			js_vendor: {
				src: ['public/vendors/jQuery/**/*.js','public/vendors/**/*.js'],
				dest: 'public/dist/vendors.js'
			},
			js_core: {
				src: ['public/javascripts/*.js','public/javascripts/**/*.js'],
				dest: 'public/dist/main.js'
			},
			css_vendor: {
				src: ['public/vendors/**/*.css'],
				dest: 'public/dist/vendors.css'
			},
			css_core: {
				src: ['public/stylesheets/*.css'],
				dest: 'public/dist/main.css'
			}
		},
		uglify: {
			dist: {
				src: 'public/dist/main.js',
				dest: 'public/dist/main.min.js'
			}
		},
		cssmin: {
			css: {
				src: 'public/dist/main.css',
				dest: 'public/dist/main.min.css'
			}
		},
		concurrent: {
			default: ['express', 'watch', 'jshint'],
			options: {
				logConcurrentOutput: true,
				limit: 4
			}
		}
	});
	require('load-grunt-tasks')(grunt);
	grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin', 'concurrent:default'])
}