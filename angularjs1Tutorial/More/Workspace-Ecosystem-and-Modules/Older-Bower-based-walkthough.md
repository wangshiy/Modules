# Set up an AngularJS Application with Bower

* * * * * * * * * * * * * * * * * * * * * * * *

Important: these instructions are left over from an older era, when a dependency
management tool called Bower was popular for web application library retrieval.
Bower Has fallen largely by the wayside, replaced by NPM.

* * * * * * * * * * * * * * * * * * * * * * * *


We are about to create a new Angular application from scratch,
in an empty directory, installing and configuring the necessary tools as we go.

Note: Be sure to stop the curriculum web server if it's still running. Even though
it's on a different port, leaving it running sometimes conflicts with the web
server we're about to start using.

Make a new directory:

    mkdir sandbox
    cd sandbox

Initialize git:

    git init

Add a README.md file that contains something like the following:

    Demos and examples from the Angular Bootcamp class.

Make the first commit:

    git add .
    git commit -m 'Initial commit.'


Context:

Angular is part of a large complex ecosystem. Real apps will involve roaming the
internet for add-ons. Not unusual to have 20-30 libs for a typical app. Where to
get these libraries? How to get all this code on your machine for client-side
development?

Bad Old Days: Manually wander the internet, grabbing libs, and their
dependencies, and manually organize library path, etc. Terrible.

Now: We use dependency management tools like NPM and bower.

Diagram: Dependency Management Tools
<https://docs.google.com/spreadsheets/d/1ZetGdZx9ZXJ0cWDaSia_rbdDz2twPrAg8oIjGPSLPFc/edit#gid=0>

Explain what npm is and what it's used for. Even though we're not writing a node
app, we're using node for all the tooling, so we use npm to fetch and manage
those tools.

Initialize npm:

    npm init

Provide name, description, etc. Use mostly defaults. Avoid spaces except in
author and description.

Creates package.json. Show created file to class and explain contents.

Commit changes.

We're about to install several modules with npm, and we don't want them added to
source control, so create a `.gitignore` to ignore the `node_modules` directory:

    node_modules/

Explain what bower is and what it's used for. Also explain why we're using two
different dependency/package managers, especially the differences between bower
and npm handling of nested dependencies.

bower vs npm:

- The reason many projects use both is that they use Bower for front-end
  packages and npm for developer tools like Yeoman, Grunt, Gulp, JSHint,
  CoffeeScript, etc.

- What Bower is not - Just like npm, Bower's focus is on installing assets.
  Unlike npm, it is agnostic as it pertains to how the assets are
  included/required modularly in code. Npm dictates that packages follow the
  commonJS specification while Bower does not make any assumptions about how the
  assets being packaged are written or included. This also separates Bower from
  other current offerings that enforce a modular specification like AMD (e.g.
  Jam) or commonJS (e.g. browserify).

- Bower is created solely for the front-end and is optimized with that in mind.
  The biggest difference is that npm does nested dependency tree (size heavy)
  while Bower requires a flat dependency tree (puts the burden of dependency
  resolution on the user). A nested dependency tree means that your dependencies
  can have its own dependencies which can have their own, and so on. This is
  really great on the server where you don't have to care much about space and
  latency. It lets you not have to care about dependency conflicts as all your
  dependencies use e.g. their own version of Underscore. This obviously doesn't
  work that well on the front-end. Imagine a site having to download three
  copies of jQuery.

Summary: We use npm for dev environment and bower for client-side dependencies
(things that run in the browser).

It's possible to have dependency management within dependency management, from
the server level down to the local project. For example:

- rpm / deb
- maven
- npm
- bower

<img src="package-manager-inception.png">


Install bower:

    npm install bower --save

XXX: Shouldn't everything we install with `npm` use `--save-dev` instead of
`--save`? We don't use npm for anything except dev tools.

npm troubleshooting notes:

- Many problems can be solved with `npm cache clean`
- Harder problems can be solved by deleting the local `node_modules` directory
  and re-running `npm install`
- Even harder: `rm -rf $HOME/.npm`
- Some problems are a result of mixing `sudo` installation commands with
  non-`sudo` installation commands, which mangles permissions on `node_modules`
  and the npm cache. Blowing away the directories above and/or `chown`ing as
  necessary will often help.

From
<http://codebetter.com/glennblock/2012/02/27/my-tale-of-npm-woe-when-all-else-fails-clear-you-cache/>
:

> Moral of the story, when something seems fishy with a module you are
> installing, you've tried everything and nothing else seems to work, clear your
> cache! It might save you from switching professions.

Show changes to `package.json` -- now includes `bower` in dependency list -- and
creation of `node_modules` directory.

Installing a single dependency actually installs many other nested dependencies
under `node_modules`. Show how many files, directories this actually creates
under `node_modules`:

    find . | wc -l

Commit changes.

Delete `node_modules` and re-install with `npm install`. XXX: This can take a
long time -- only demonstrate when the network connection is fast and reliable.

Install additional tools:

    npm install gulp gulp-connect --save

Now we want to initialize client-side dependencies, for which we use bower.

Install bower so it can easily be used from the command line:

    npm install -g bower

Explain this installation vs the in-project installation. Mention dangers of
using `npm install -g ...`, and encourage using global installs only when really
necessary. Do as much as possible locally. Exceptions: tools like bower, gulp,
karma.

Initialize bower:

    bower init

(May have to add `--config.interactive` flag for git bash on Windows.)

Note that this looks a lot like `npm init`. Dependency management tools crib
from each other, albeit imperfectly.

- Don't set currently installed components as dependencies
- Do add commonly ignored files to ignore list
- Do mark package as private, and explain why -- protects you from accidentally
  publishing private projects XXX: Though it has no apparent effect on
  `bower.json`, `.bowerrc`, or any other files we can currently find. Does this
  actually do anything?

Show `bower.json`. There are no dependencies yet, like a fresh `package.json`
created by npm.


Use bower to install angular (and remember the dependency in `bower.json`):

    bower install angular --save

Point out that this creates the `bower_components` directory in wrong place. We
want bower modules to be visible to the web browser, but `node_modules` to be
inaccessible, so they can't both be sitting in the same place. Bower modules
have to live somewhere within the web root, not at the top level of the project
directory.

Remove the `bower_components` directory, since it's not where we want it to be.

Fix the problem by creating `.bowerrc` file with the following contents:

    {
      "directory": "www/bower_components"
    }

(This is a JSON file, so the double quotes are important, even around the
"directory" key.)

Run bower install again to (re)install Angular, but this time in the right
directory.

    bower install

Note that we don't need to explicitly create `www/bower_components` -- bower
will do that for us automatically.

Now add the bower modules directory (formerly `bower_components`, now
`www/bower_components`) to `.gitignore,` and explain why:

    node_modules/
    www/bower_components/

Discussion re: checking in dependencies:
<http://addyosmani.com/blog/checking-in-front-end-dependencies/>

Reasonable strategy: Ignore installed dependencies for source control, but
include them in project backups. That way you can always retrieve a module if it
ever disappears from the internet.

Explain that bower isn't just for JavaScript modules, but for any kind of web
asset, like the Bootstrap CSS framework.

Install Bootstrap with bower:

    bower install bootstrap --save

Show that these are now listed in `bower.json` and installed in
`www/bower_components`. Note that installing Bootstrap also installed jQuery,
but didn't nest jQuery under the `bootstrap` folder, since bower has a flat
dependency model.

We're about to start configuring and using gulp, so globally install gulp to
make it easier to use from the command line:

    npm install -g gulp

Explain what gulp is and what it's used for. We're only using it to launch the
local development web server, but it (or similar tools like Grunt) can be used
for much more.

Diagram: Typical Angular App Build Process

Create `gulpfile.js` with the following contents:

XXX: Removed live reload, and the associated gulp.watch() task. Live reload
doesn't work with Cloud9, and doesn't work consistently on students' local
machines.

    var gulp    = require('gulp'),
        connect = require('gulp-connect');

    gulp.task('connect', function () {
      connect.server({
        root: 'www'
      });
    });

    gulp.task('default', ['connect']);


Create `www/index.html`:

    <!doctype html>
    <html lang="en" ng-app>

      <head>
        <title>Angular Demo App</title>
        <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
      </head>

      <body>

        <p>Message: {{ 'Hello ' + 'World' }}</p>

        <script src="bower_components/angular/angular.js"></script>
      </body>

    </html>


Use gulp to start the local web server:

    gulp connect

...or just `gulp`, since the default task should start the local web server.

Browse to the appropriate URL (<http://localhost:8080/> for local workspaces, or
the Cloud9 URL for Cloud9 workspaces) and make sure the web page is visible,
with the Angular expression rendered properly.

At this point, we have a working Angular application, ready to have examples
added to it.

OPTIONAL: Install and configure Karma

    npm install karma --save-dev

    npm install karma-jasmine karma-chrome-launcher --save-dev

    npm install -g karma-cli

    karma init

(Don't actually start karma yet, since there's no app and there aren't any
tests.)

Set up basic routing. Start with a "menu" route that will let us jump to each
topic.

