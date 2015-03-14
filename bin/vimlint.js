'use strict';
/*jshint node: true */

var command = require('../lib/command');

var program = command.parser.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}

command.lintFiles(program.args, function (errs) {
  if (errs) {
    errs.forEach(function (err) {
      console.error(err);
    });
  }
});