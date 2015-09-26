# nconf-toml [![NPM version](https://img.shields.io/npm/v/nconf-toml.svg)](https://www.npmjs.org/package/nconf-toml)

[![Build Status](https://img.shields.io/travis/RobLoach/nconf-toml/master.svg)](https://travis-ci.org/RobLoach/nconf-toml)
[![Dependency Status](https://david-dm.org/RobLoach/nconf-toml.png)](https://david-dm.org/RobLoach/nconf-toml)

[TOML](http://github.com/toml-lang/toml) format plugin for [nconf](http://npm.im/nconf).

## Install

    npm install --save nconf nconf-toml

## Usage

``` javascript
var nconf = require('nconf')

nconf.file({
  file: '/path/to/some/file.toml',
  format: require('nconf-toml')
})
```

Or to add general TOML file support

``` javascript
var nconf = require('nconf')

nconf.formats.yaml = require('nconf-toml')

// and then you can do

nconf.file({ file: '/path/to/some/file.toml', format: nconf.formats.toml })
```

## License

MIT
