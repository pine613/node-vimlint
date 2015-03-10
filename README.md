node-vimlint
------------

[![npm version](https://badge.fury.io/js/vimlint.svg)](http://badge.fury.io/js/vimlint)
[![Build Status](https://travis-ci.org/pine613/node-vimlint.svg?branch=master)](https://travis-ci.org/pine613/node-vimlint)
[![Code Climate](https://codeclimate.com/github/pine613/node-vimlint/badges/gpa.svg)](https://codeclimate.com/github/pine613/node-vimlint)
[![Test Coverage](https://codeclimate.com/github/pine613/node-vimlint/badges/coverage.svg)](https://codeclimate.com/github/pine613/node-vimlint)<br />
[![Dependency Status](https://david-dm.org/pine613/node-vimlint.svg)](https://david-dm.org/pine613/node-vimlint)
[![devDependency Status](https://david-dm.org/pine613/node-vimlint/dev-status.svg)](https://david-dm.org/pine613/node-vimlint#info=devDependencies)


Validate `.vimrc`, `.vim` files with [vimlint](https://github.com/syngan/vim-vimlint).

## Getting Started

This library requires `sh` and Vim.

```sh
$ npm install vimlint --save
```

## References
### vimlint(path, cb)

- path: `string` ... Target .vim file path (not `Array`)
- cb: `function` ... Callback function
   - err: `object` ... Error object
   - stdout: `string` ... Log string of vimlint
   - stderr: `string` ... Error string of vimlint

```js
var vimlint = require('vimlint')

vimlint('testfile.vim', function (err, stdout, stderr) {
  if (stdout) { process.stdout.write(stdout); }
  if (stderr) { process.stderr.write(stderr); }
  
  if (err) {
    console.log('ERROR', err);
  }
  
  else {
    console.log('OK');
  }
});
```

## Additional Notes
This library **doesn't work** on Windows. It works on Linux, Mac OS X, or other *nix OSs.

## Acknowledgement
This library uses following software to validate `.vim` files. Thank you.

 - [syngan](https://github.com/syngan) / [vim-vimlint](https://github.com/syngan/vim-vimlint)
 - [ynkdir](https://github.com/ynkdir) / [vim-vimlparser](https://github.com/ynkdir/vim-vimlparser)

## License
MIT License<br />
Copyright (c) 2015 Pine Mizune