![Qualy Presenter](https://raw.githubusercontent.com/Qualy-org/qualy-presenter/master/src/img/qualy-presenter.png)

This is a boilerplate to use [Reveal.JS](http://lab.hakim.se/reveal-js/) easily with [Gulp](http://gulpjs.com/), [Pug](https://pugjs.org) and [Stylus](http://learnboost.github.io/stylus/).

To know more about Reveal.js and how to use, [read the docs here](https://github.com/hakimel/reveal.js).

## Getting Started

### Demo

You can see the demo [here](http://qualy-org.github.io/qualy-presenter/)

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

```sh
# Clone this repository
$ git clone git@github.com:Qualy-org/qualy-presenter.git new_project
$ cd new_project

# install dependencies
$ npm install
# run tasks and serve
$ npm start
```

With the commands above, you have everything to start.

```sh
├── Readme.md
├── build
│   ├── css
│   │   └── main.css
│   │   └── theme.css
│   ├── img
│   ├── index.html
│   └── js
│       ├── main.js
│       └── vendor
├── gulp
│   ├── index.js
│   ├── paths.js
│   └── tasks
├── gulpfile.js
├── package.json
└── src
    ├── img
    ├── js
    │   ├── main.js
    │   └── vendor
    ├── slides
    ├── styl
    │   ├── highlight-themes
    │   ├── reveal-themes
    │   ├── vendor
    │   ├── main.styl
    │   └── theme.styl
    └── templates
        ├── inc
        │   ├── head.pug
        │   └── scripts.pug
        └── index.pug
```

### How to Use

- Write your slides in `src/slides` folder in separated files using the [pug syntax](https://pugjs.org) and add them on `templates/index.pug`.

- If you want to add another scripts and css use the `templates/inc/` folder and call them in the  `templates/index.pug`.

- Look for different themes on [src/styl/reveal-themes](https://github.com/Qualy-org/qualy-presenter/tree/master/src/styl/reveal-themes) and call them on [src/styl/theme.styl](https://github.com/Qualy-org/qualy-presenter/blob/master/src/styl/theme.styl).

- For highlight themes you can see on [src/styl/highlight-themes](https://github.com/Qualy-org/qualy-presenter/blob/master/src/styl/highlight-themes/).

### How to use Speaker Notes

![Speaker Notes](https://raw.githubusercontent.com/Qualy-org/qualy-presenter/master/src/img/speaker-notes.png)

Just add `data-notes` to the section of the slide, like the code bellow:

```js
- var notes = 'You can enter anything you want here. Just add data-notes to the section.'

section(data-notes=notes)
  img(src="img/qualy-presenter.png", alt="")
  p
    a(href="https://github.com/Qualy-org/qualy-presenter") Look the code on Github <3
```

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
npm run deploy
```

### Tasks

- `gulp`: Initialize watch for changes and a server(localhost:3000)
- `gulp js`: execute js files
- `gulp notes`: copy speaker notes
- `gulp stylus`: compile stylus files
- `gulp imagemin`:compress image files
- `gulp watch`: call for watch files
- `gulp pug`: compile pug files
- `gulp deploy-pages`: deploy compiled files at `build` to `github` on branch `gh-pages`.

### Examples

Some presentations using the boilerplate:

- [Criando Experiências com SVG - SEMCOMP 15](http://willianjusten.com.br/semcomp-2015/#/)
- [Passos para se ter um projeto com qualidade - Imasters 15](http://willianjusten.com.br/imasters-2015/#/)
- [CSS loves Math - Meetup CSS SP](https://willianjusten.com.br/meetup-css-sp)
- [JS loves Music - Front in Sampa 16](https://willianjusten.com.br/frontinsampa-16/)

### License

This boilerplate is free and open source software, distributed under the The MIT License. So feel free to use this to create your site without linking back to me or using a disclaimer.

If you’d like to give me credit somewhere on your blog or tweet a shout out to [@willian_justen](https://twitter.com/willian_justen), that would be pretty sweet.
