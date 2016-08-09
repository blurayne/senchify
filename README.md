# Senchify

## Abstract
Analyse Sencha/Ext.js files for dependencies using esprima. 

Final goal will be to implement a gulp plugin not only to replacy 'extify' but safely resolve Ext.JS dependencies and load orders. Additinally do some linting on require or mixin properties.

What should be possible – example:
`Senchify.parseBasePackage('<Ext.JS source directory>') 
Senchify.parseBasePackage('<Custom framework source directory>')
Senchify.parsePackage('<Your module based content>')
Senchify.getPackageFileOrder()`
 

So far this is just a starting point. 

# Prerequisites

We use ES6 in this project so better setup the following:

## Install node 6.x

From the official node documentation:
`$ sudo apt-get remove nodejs nodejs-dev npm
 $ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    * $ sudo apt-get install -y nodejs`

## Update npm

`$ sudo npm install -g npm`

## Use Gulp 4

We're using gulp4 which is currently not release:

Install the latest Gulp CLI tools globally and ensure there is no gulp 4 globally installed
`$ npm uninstall -g gulp
$ sudo npm install -g gulp-cli`

If gulp 4 still does not work use (or fix your symlinks – thanks to node)
`$(npm bin)/gulp`

## Use ES6 Jasmine

Uninstall non-ES6 jasmine (if installed)
`$ sudo npm uninstall -g jasmine # Uninstall`
 
Install ES6 Jasmine
`$ sudo npm install -g jasmine-es6`
 
## Use Babel
 
Install Babel
`$ sudo npm uninstall -g babel`
`$ sudo npm install -g babel-cli babel-core`
 
 
 
