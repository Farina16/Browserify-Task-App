<div align="center">
<img src="http://browserify.org/images/browserify.png" alt="Browserify" align="center" width="450px" />
</div>
<br/>

## Getting started

If you're new to browserify, check out the <a href="https://github.com/browserify/browserify-handbook" target="_blank">browserify handbook</a> and the resources on <a href="http://browserify.org/" target="_blank">browserify.org</a>.

## Installation

With npm do:

```bash
npm install -g browserify

OR

npm install -g browserify --save-dev
```

## Usage

```angular2html

Usage: browserify [entry files] {OPTIONS}

Standard Options:

    --outfile, -o  Write the browserify bundle to this file.
                   If unspecified, browserify prints to stdout.

    --require, -r  A module name or file to bundle.require()
                   Optionally use a colon separator to set the target.

      --entry, -e  An entry point of your app

     --ignore, -i  Replace a file with an empty stub. Files can be globs.

    --exclude, -u  Omit a file from the output bundle. Files can be globs.

   --external, -x  Reference a file from another bundle. Files can be globs.

  --transform, -t  Use a transform module on top-level files.

    --command, -c  Use a transform command on top-level files.

  --standalone -s  Generate a UMD bundle for the supplied export name.
                   This bundle works with other module systems and sets the name
                   given as a window global if no module system is found.

       --debug -d  Enable source maps that allow you to debug your files
                   separately.

       --help, -h  Show this message
      
```

```bash
$ browserify --help
```
OR

```bash
$ ./node_modules/.bin/browserify --help
```

## Build

```bash
$ browserify src/js/app.js -o src/js/app.bundle.js
```
OR

```bash
$ ./node_modules/.bin/browserify src/js/app.js -o src/js/app.bundle.js
```

## Run browserify

```bash
$ npm start
```

OR

```bash
$ ./node_modules/.bin/http-server
```
