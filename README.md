# generator-dashi [![Build Status](https://secure.travis-ci.org/eddies/generator-dashi.png?branch=master)](https://travis-ci.org/eddies/generator-dashi)

Dashi is dashboard for data visualizations.

generator-dashi is a Yeoman generator for creating Dashi applications. 

Assuming you have Yeoman installed, you can just run `yo dashi` and
generator-dashi will 

* stub out a new Dashi application
* sort out all the JavaScript dependencies
* drop some git config files in place 
* set up some convenient Grunt tasks to support 
  * live reloading in your browser as you edit 
  * publish your app to GitHub Pages, with all the supporting files concatenated and minified.

## Getting Started

### Prerequisites
In order to use generator-dashi, you need to have [Yeoman](http://yeoman.io) installed. In order to install Yeoman, you'll need to have [npm](https://npmjs.org) installed. Don't worry, it only *seems* like it's turtles all the way down.

> If you're a Mac user, using Homebrew, the following will get your pre-reqs sorted out:
> 
> ```bash
brew install node --without-npm
echo prefix=~/.node >> ~/.npmrc
curl -L https://www.npmjs.com/install.sh | sh
```

> Finally, add `~/.node/bin` to your PATH (e.g., add `export PATH="$HOME/.node/bin:$PATH"` to your `.bashrc`)

Now, assuming you have [npm](https://npmjs.org) installed, go ahead and install Yeoman:

```bash
npm install -g yo
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

will package everything up, concat and minify your css, javascript, etc., and 
drop everything in your `dist/` directory. 

```bash
grunt gh-pages
```

will push the contents of `dist/` to your gh-pages branch, letting you host your
Dashi app on GitHub (if you're using GitHub, of course).

## License
Apache License, Version 2.0
