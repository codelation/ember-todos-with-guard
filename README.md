# Ember Todos with Guard

The goal of this project to provide an Ember.js development 
environment where testing and managing resources is easy.

The blog post: <http://81designs.com/2013/01/24/todomvc-with-ember-js-and-guard/>

## Features

* Automatically compile/compress:
    * Handlebars templates
    * JavaScript
    * Compass (SASS) stylesheets
* Automated testing with Jasmine
* JSHint warnings
* Warnings and notifications in Notification Center (OS X)
* Built-in Webrick server
* Tests for Todos.Todo and Todos.TodosController
* Documented with YUIDoc

## Project Dependencies

To get up and running, you'll need 
to get your development environment setup.

### Homebrew, Ruby, and Node.js

I'm guessing most Ember.js developers will already have these installed.

Here's a quick reference for where they can be found, just in case:

* **Homebrew:** [mxcl.github.com/homebrew](http://mxcl.github.com/homebrew)
* **Ruby:** I like [RVM](https://rvm.io)
* **Node.js:** [nodejs.org](http://nodejs.org)

### Qt 4.7 or Above

Required for `jasmine-headless-webkit`.

I'm sure PhantomJS is preferred these days, but I've never had much luck with it for some reason.

Install by running:

```console
$ brew install qt --build-from-source
```

### Required RubyGems

Install by running from the project's root directory:

```console
$ bundle install
```

### JSHint

Install by running:

```console
$ npm install -g jshint
```

### Handlebars Compiler

Install by running:

```console
$ npm install -g handlebars
```

### YUIDoc

Install by running:

```console
$ npm -g install yuidocjs
```

Generate documentation by running 
from the project's root directory:

```console
$ yuidoc app
```

## Ready... Fight!


from the project's root directory, run:

```console
$ guard
```
