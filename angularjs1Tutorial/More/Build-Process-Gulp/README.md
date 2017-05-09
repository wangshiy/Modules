# Build Process Example: Gulp, E2E with Protractor

This is a build process example of moderate complexity.

It uses Gulp to package up an angular application for production
deployment; it is not a fully completed example of such a process, but
it shows enough to understand Gulp. Gulp is generally the most popular
tool used for this purpose, although there are others with various
advantages.

## Old browser support

To support older browsers, this build process processes code through
Babel:

https://babeljs.io/

To understand the results, and see the use of "const" in the source
files, while in `dist/all.js` those are all replaced with "var".

Babel is an excellent tool, but it's also relatively large. projects
that only need ES2015 and nothing else might consider Buble
instead:

https://buble.surge.sh/guide/

## Running

To prepare:

```
npm install
```

To run, use the following in one command prompt:
```
npm start
```

And the following in another:
```
npm run e2e
```
