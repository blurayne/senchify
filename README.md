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


Update your npm
`$ sudo npm install -g npm`
 
Uninstall non-ES6 jasmine (if installed)
`$ sudo npm uninstall -g jasmine # Uninstall`
 
Install ES6 Jasmine
`$ sudo npm install -g jasmine-es6`
 
Install Babel
`$ sudo npm install -g jasmine babel-cli babel-core` 
