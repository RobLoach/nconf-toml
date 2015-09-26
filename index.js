var toml = require('toml');
var tomlify = require('tomlify-j0.4');

exports.stringify = function (obj, options) {
  return tomlify(obj, null, 2);
};

exports.parse = toml.parse;
