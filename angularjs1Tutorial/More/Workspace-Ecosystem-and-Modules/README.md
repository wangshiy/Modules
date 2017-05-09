# Workspace, Ecosystem, and Module Loader Discussion

You have seen examples of working application environments, builds processes, etc:

* "Taste of A2" step - SystemJS
* "Build Process Gulp" - Gulp

There are many different ways to implement project tooling that work well with
AngularJS; but relatively few examples have been kept up-to-date since the peak
of AngularJS interest around 2015. Since then, most projects still rely on
techniques popular in the 2014/2015 era. Newer tooling tends to focus on Angular
2 and beyond.

As of 2017, the easiest toolset to get started with AngularJS is:

https://github.com/tolyo/angularjs-brunch-es6-seed

A very deep and sophisticated approach is also worthy of consideration; the
following project stacks several technologies on top of AngularJS, to yield a
development experience much more like that of Angular 2:

https://github.com/ngParty/ng-metadata

it replaces the boilerplate in the work above, with decorators
similar to Angular 2.

## Future notes

One weakness of the Brunch based starter linked above is that it does not
include an automatic AngularJS DI Annotation step; that is easily added using
the following.

https://www.npmjs.com/package/ng-annotate-brunch
