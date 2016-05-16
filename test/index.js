// Dependencies
var assert = require('assert');
var nconf = require('nconf');
var toml = require('toml');
var fs = require('fs');
var nconfToml = require('..');

/**
 * Test reading a configuration.
 */
function testRead () {
  // Add the test toml file.
  nconf.add('test', {
    type: 'file',
    file: 'test/fixtures/test.toml',
    format: nconfToml
  });

  // Retrieve the owner:organization setting.
  var org = nconf.get('owner:organization');

  // Perform the assert.
  assert.equal(org, 'GitHub');
}

/**
 * Test writing a configuration.
 */
function testWrite () {
  // Set the writing location.
  nconf.use('test', {
    file: 'test/fixtures/test-write.toml',
    format: nconfToml,
    type: 'file'
  });

  // Set the configurations.
  nconf.set('name', 'Avian');
  nconf.set('dessert:name', 'Ice Cream');
  nconf.set('dessert:flavor', 'chocolate');

  // Save the file.
  nconf.save(function (err) {
    if (err) {
      console.error(err.message);
      return;
    }
    // Ensure the file was written correctly.
    var txt = fs.readFileSync('test/fixtures/test-write.toml', 'utf8');
    var obj = toml.parse(txt);
    assert.equal(obj.name || '"name" is missing.', 'Avian');
  });
}

testRead();
testWrite();
