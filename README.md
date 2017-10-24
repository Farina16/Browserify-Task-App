<div align="center">
<img src="https://camo.githubusercontent.com/e19e230a9371a44a2eeb484b83ff4fcf8c824cf7/687474703a2f2f737562737461636b2e6e65742f696d616765732f62726f777365726966795f6c6f676f2e706e67" alt="Browserify" align="center" width="300px" />
</div>
<br/>
<div align="center"><strong>browserify</strong></div>
<div align="center"><strong>Getting started</strong></div>
<div align="center">If you're new to browserify, check out the <a href="https://github.com/browserify/browserify-handbook" target="_blank">browserify handbook</a> and the resources on <a href="http://browserify.org/" target="_blank">browserify.org</a>.
</div>

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

##Build

```bash
$ browserify src/js/app.js -o src/js/app.bundle.js
```
OR

```bash
$ ./node_modules/.bin/browserify src/js/app.js -o src/js/app.bundle.js
```

##Run browserify

```bash
$ npm start
```

OR

```bash
$ ./node_modules/.bin/http-server
```
