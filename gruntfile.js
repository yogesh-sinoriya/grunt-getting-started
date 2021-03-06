module.exports = function(grunt) {
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		coffee:{
			compile:{
				files:{
					'public/js/site.js':'coffee/site.coffee'
				}
			}
		},
		less:{
			compile:{
				files:{
					'public/css/site.css':'less/site.less'
				}
			}
		},

		watch:{
			options:{livereload:true},
			coffee:{
				files:'coffee/*.coffee',
				tasks:'coffee'
			},
			less:{
				files:'less/*.less',
				tasks:'less'
			},
			html: {
        files: './index.html',
		    tasks:true
      }
		},
		connect:{
			server:{
				options:{
					port:9000,
					hostname:'localhost',
				  base: '.',
					livereload:true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-parallel');

	grunt.registerTask('default',['coffee','less']);
	grunt.registerTask('server',['connect','watch']);
}