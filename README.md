# generator-dashi [![Build Status](https://travis-ci.org/eddies/generator-dashi.svg?branch=master)](https://travis-ci.org/eddies/generator-dashi)

*dashi: data made delicious*

Dashi is dashboard for interactive data visualizations, using [dc.js](https://dc-js.github.io/dc.js/) and [AdminLTE](https://github.com/almasaeed2010/AdminLTE).

![dashi-screenshot](https://cloud.githubusercontent.com/assets/149985/7650129/0b713a28-fb26-11e4-8fb0-936c2a5a17f4.png)

generator-dashi is a Yeoman generator for creating Dashi applications. 

Assuming you have Yeoman installed, you can just run `yo dashi` and
generator-dashi will 

* stub out a new Dashi application
* sort out all the JavaScript dependencies
* drop some git config files in place 
* set up some convenient [Grunt](http://gruntjs.com/) tasks to support 
  * live reloading in your browser as you edit 
  * publish your app to GitHub Pages, with all the supporting files concatenated and minified.

## Getting Started

### Prerequisites

 * [npm](https://www.npmjs.com/)
 * [yeoman](http://yeoman.io/)
 * [bower](http://bower.io/)
 * [grunt](http://gruntjs.com/)
 
In order to use generator-dashi, you need to have [Yeoman](http://yeoman.io) installed. In order to install Yeoman, you'll need to have [npm](https://npmjs.org) installed. Don't worry, it only *seems* like it's turtles all the way down.

The only tricky bit is getting npm installed. npm is installed as part of Node.js. However, instructions for installing Node vary by operating system and/or package manager. 

For example, if you're using [Homebrew](http://brew.sh/) on OS X, the following will take care of installing npm:
 
> ```bash
brew install node --without-npm
echo prefix=~/.node >> ~/.npmrc
curl -L https://www.npmjs.com/install.sh | sh
```

> Finally, add `~/.node/bin` to your PATH (e.g., add `export PATH="$HOME/.node/bin:$PATH"` to your `.bashrc`)

However, most Mac or Windows users will probably want to install Node via one of the installers from [nodejs.org](https://nodejs.org/).

Most Linux users will probably want to use their systems own package manager to install Node. Have a look at [Installing Node.js via package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager). As of this writing (2015-05-04), the current version of Node.js is 0.12.2. 

Once [npm](https://npmjs.org) is installed, go ahead and install the Yeoman toolset:

```bash
npm install -g yo bower grunt-cli
```

### Installation
To install generator-dashi from npm, run:

```bash
npm install -g generator-dashi
```

Finally, initiate the generator:

```bash
yo dashi
```

Be patient, this can take a bit while npm is fetching dependencies. The whole install 
seems to take about two minutes for me.

## Next steps
Now, just add data to taste.

### Some useful commands:
```bash
grunt serve
```

will serve up your Dashi app and support live reloading in your browser. 

Next, you'll probably want to start editing `app/index.html` and `app/main.js` 
to customize your app.

```bash
grunt
```

will package everything up, concat and minify your css, javascript, etc., run your tests, and 
drop everything in your `dist/` directory. 

```bash
grunt gh-pages
```

will push the contents of `dist/` to your gh-pages branch, letting you host your
Dashi app on GitHub (if you're using GitHub, of course).

## License
Apache License, Version 2.0

## Maintainers
### Development
During development you'll want to symlink your local development copy of 
generator-dashi (so that `yo dashi` uses your local development copy and not
the npm released version). From within the root of your development copy of
generator-dashi (i.e. `cd /home/eddies/generator-dashi`):

```bash
npm link
```
### Dependencies
To check if there are newer versions of dependencies, regardless of package.json constraints, use
[npm-check-updates](https://github.com/tjunnone/npm-check-updates):

Install with `npm install -g npm-check-updates` and then to check, use `npm-check-updates`.

For bower-managed dependencies, use `bower list`.
### Releases
Firstly, you'll need to have a user account on [npm](https://npmjs.org). Then, 
assuming you're ready to release version number "x.y.z":

```bash
npm version x.y.z -m "Version %s"
git push && git push --tags
npm publish
```
