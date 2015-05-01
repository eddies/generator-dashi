'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
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
        this.templatePath('main.css'),
        this.destinationPath('app/styles/main.css')
      );
      
      this.fs.copy(
        this.templatePath('main.js'),
        this.destinationPath('app/scripts/main.js')
      );
      
      this.fs.copy(
        this.templatePath('demo.csv'),
        this.destinationPath('app/data/demo.csv')
      );
      
      this.fs.copy(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
      
      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md')
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
    }
  },

  install: function () {
    this.installDependencies();
  }
});
