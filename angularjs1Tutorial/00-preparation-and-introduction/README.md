# Angular Boot Camp - Learning Materials

http://angularbootcamp.com/

## Welcome

Welcome to the Oasis Digital Angular Bootcamp

While we wait for others to arrive you can get a jumpstart by entering this URL
in your browser to download the class materials:

https://angularbootcamp.com/learn.zip

1. Extract the zip
2. Open it in your IDE of choice
3. Start a server pointing at the "root", the directory containing
   all the 00- 01- etc directories.
   We recommend using Node (described later down this file.
4. Point browser at your local web server
5. For bonus features install Node - http://nodejs.org

Open this file (README.md) for more details.

-----------------------------------------------------------------------------------

## "Learn" - the first part of the class

This is a standalone, ready to use set of files, sufficient for the
first portion of the class. The only tools truly necessary for this
portion are a text editor and a Web server. See the readme file inside
for instructions on how to launch a Web server, or use any Web server
you have handy.

## Development Web Server Needed

You need to serve these files via a Web server; for certain exercises,
it will not work acceptably to load them directly from "file" URLs. You
might already have a Web server on your machine that can be used, or
your IDE might contain a Web server.

**Important**: Serve the "learn" directory as your "web root". You will
not need to restart your Web server as we move from one step to the
next, and each example will be able to see the shared library files and
data files.

## Recommended: Download and install Node

Here's the most recommended approach, because it is more compatible with
how single-page-app development is typically done as projects grow.

https://nodejs.org/en/

Installers are available therefore Windows and Mac; on Linux you can
probably obtain it using your package manager easily.

Node should include NPM, its package manager.

Then CD to the directories where the learn.zip contents reside (the directories
that contains the 00- 01- etc directories) and run:

```
npm install
npm start
```

This starts live-server, which conveniently includes "live reload" in the box. It will
automatically inject pages it serves with a bit of JavaScript to access
a web socket to automatically reload the page from the files change.
This means you will not have to click refresh in the browser.

This is a very minimal use of Node/NPM; in later work, we will see more
of how to use it effectively and idiomatically in an AngularJS project.

## Recommended: Visual Studio Code

As of early 2017, Visual Studio Code appears to have the most complete
developer assistance. This uses TypeScript d.ts files, even though
AngularJS 1.x is not written in TypeScript and neither are any of these
examples.

# Cloud9 Backup Plan

If you have great difficulty getting this running on your own computer,
you can get started on Cloud9. See the file `README_ONLINE_CLOUD9.md`.

# Welcome to Angular Boot Camp Agenda

The agenda varies over time; your instructor will adjust it to match
the needs of the class and the ongoing changes in the AngularJS
ecosystem. Here is a rough idea of the overall agenda:

* Basics of AngularJS - core vocabulary to build components
* Structuring an AngularJS application
* Development / build tooling
* Advanced and varied features (that are okay to learn later)
* Examples, details, surrounding ecosystem

## Workshops

The instructor may have changes to the workshops, as our curriculum is
under continuous improvement and is adjusted for the needs of each
class.
