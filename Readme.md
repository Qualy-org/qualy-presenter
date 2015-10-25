# Reveal.js Boilerplate

This is a boilerplate to use [Reveal.JS](http://lab.hakim.se/reveal-js/) easily with [Gulp](http://gulpjs.com/), [Jade](http://jade-lang.com/) and [Stylus](http://learnboost.github.io/stylus/).

To know more about Reveal.js and how to use, [read the docs here](https://github.com/hakimel/reveal.js).


## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

```sh
# Clone this repository
$ git clone git://github.com/willianjusten/reveal-boilerplate.git new_project
$ cd new_project

# install dependencies
$ npm install
# run tasks and serve
$ gulp
```

With the commands above, you have everything to start.

```sh
new_project -
	/build -
		/css
			main.css
		/js
		    /vendor
			main.js
		index.html
	/src -
		/js
		/slides
		/styl
			/highlight-themes
			/reveal-themes
			/vendor
			main.styl
		/templates
			/inc
				head.jade
				scripts.jade
	.gitignore	
	gulpfile.js
	package.json
	Readme.md
```

### How to Use

- Write your slides in `src/slides` folder in separated files using the [jade syntax](http://jade-lang.com/) and add them on `templates/index.jade`.

- If you want to add another scripts and css use the `templates/inc/` folder and call them in the  `templates/index.jade`.

- Look for different themes on [src/styl/reveal-themes](https://github.com/willianjusten/reveal-boilerplate/tree/master/src/styl/reveal-themes) and call them on [src/styl/main.styl](https://github.com/willianjusten/reveal-boilerplate/blob/master/src/styl/main.styl). 

- For highlight themes you can see on [src/styl/highlight-themes](https://github.com/willianjusten/reveal-boilerplate/blob/master/src/styl/highlight-themes/).

### How to use with git and deploy to Github Pages

When you clone this repo, every git information will be downloaded to. So, you have to remove all my git stuff to create yours.

```sh
# Inside of your project runs to remove git folder.
rm -Rf .git
```

Next, initialize your git repository:

```sh
# init the repo
git init
```

Commit all files:

```sh
# add all files to commit
git add .
# create a commit
git commit -m "Initial commit"
```

The first deploy needs to be manual:

```sh
# creates a gh-pages branch
git checkout -b gh-pages

# push and track the gh-pages branch
git push --set-upstream origin gh-pages
```

To do next deploys, you just have to run with gulp:

```sh
# will create a .publish folder with build content
# and push to gh-pages branch.
gulp deploy-pages
```

### Tasks

- `gulp`: Initialize watch for changes and a server(localhost:3000)
- `gulp js`: execute js files
- `gulp notes`: copy speaker notes
- `gulp stylus`: compile stylus files
- `gulp imagemin`:compress image files
- `gulp watch`: call for watch files
- `gulp jade`: compile jade files
- `gulp deploy-pages`: deploy compiled files at `build` to `github` on branch `gh-pages`.