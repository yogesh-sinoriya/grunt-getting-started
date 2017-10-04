Grunt : Getting Started
========================

#### Before start task scheduler, Let’s talk about tasks. 
Tasks are the operations to perform. When we automate that, That's called task scheduler.  

### Why use a task runner?
#### In one word: automation. 
>The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes.

[![N|Solid](http://www.chloechen.io/wp-content/uploads/2014/11/logo.png)](https://gruntjs.com/)



>Grunt is a JavaScript task runner, a tool used to automatically perform frequently used tasks such as minification, compilation, unit testing, linting, etc. It uses a command-line interface to run custom tasks defined in a file (known as a Gruntfile). Grunt was created by Ben Alman and is written in Node.js. It is distributed via npm.
Presently, there are 6000+ plugins available in the Grunt ecosystem

### Why use Grunt?
The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort. If someone hasn't already built what you need, authoring and publishing your own Grunt plugin to npm.

### Getting started
Grunt and Grunt plugins are installed and managed via npm, the Node.js package manager.
#### Installing the CLI
```sh
npm install -global grunt 
```

> Note that installing grunt-cli does not install the Grunt task runner! The job of the Grunt CLI is simple: run the version of Grunt which has been installed next to a Gruntfile.

### How the CLI works
>Each time grunt is run, it looks for a locally installed Grunt using node's require() system. Because of this, you can run grunt from any subfolder in your project.
If a locally installed Grunt is found, the CLI loads the local installation of the Grunt library, applies the configuration from your Gruntfile, and executes any tasks you've requested for it to run. To really understand what is happening



* [Step 1] - npm init (Fill inputs accordingly point main to  index.html )
* [Step 2] - create index.html, gruntfile.js clone sample project from this link
* [Step 3] - npm install grunt grunt-contrib-less grunt-contrib-coffee grunt-contrib-connect grunt-contrib-watch grunt-parallel --save-dev 
Or
Onp install
* [Step 4] -$  grunt server
    

### Tutorial Video : [video 1](https://www.youtube.com/watch?v=lGMmkQEJZxU), [video 2](https://www.youtube.com/watch?v=Dr0tZjUUqyo), [video 3](https://www.youtube.com/watch?v=SL6uYHsl2Ic&t=255s).


Single line definition :
Grunt is a simple task runner, it run the task with the help there plugins. 

First we need to configure the plugin and start using it.

### Gruntfile.js

``` module.exports = function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        plugin_name:{
            compile:{
                files:{
                    'public/js/site.js':'coffee/site.coffee'
                }
            }       
        }
    });
   grunt.loadNpmTasks('grunt-plugin_name');
   grunt.registerTask('default',[‘plugin_name']);
}
```