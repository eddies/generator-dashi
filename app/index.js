'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    
    // "slugify" appname
    this.appname = _.kebabCase(this.appname);
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(
      'Welcome to the delicious ' + chalk.red('Dashi') + ' generator!'
    );

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { appname: this.appname }
      );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        { appname: this.appname }
      );
      
      this.fs.copyTpl(
        this.templatePath('_index.html'),
        this.destinationPath('app/index.html'),
        { appname: this.appname }
      );
      
      this.fs.copy(
        this.templatePath('about.html'),
        this.destinationPath('app/about.html')
      );
      
      this.fs.copy(
        this.templatePath('demo-vc.html'),
        this.destinationPath('app/demo-vc.html')
      );
      
      this.fs.copy(
        this.templatePath('main.css'),
        this.destinationPath('app/styles/main.css')
      );
      
      // using #template for now because #copyTpl is throwing a
      //   "Uncaught SyntaxError: Unexpected token %="
      // when it comes across "<%%=".  
      this.template(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
      
      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md')
      );
    },
    
    scriptfiles: function () {
      this.fs.copy(
        this.templatePath('scripts'),
        this.destinationPath('app/scripts/')
      );
    },
    
    datafiles: function () {
      this.fs.copy(
        this.templatePath('data'),
        this.destinationPath('app/data/')
      );
    },
    
    testfiles: function () {
      this.fs.copy(
        this.templatePath('test'),
        this.destinationPath('test/')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('gitattributes'),
        this.destinationPath('.gitattributes')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('travis.yml'),
        this.destinationPath('.travis.yml')
      );
    }
  },

  install: function () {
    if (!this.options['skip-install']) {
      this.installDependencies({
        // run `grunt wiredep` after installing bower dependencies
        callback: function () {
              this.spawnCommand('grunt', ['wiredep']);
            }.bind(this) // bind the callback to the parent scope
      });
    }
  }
});
