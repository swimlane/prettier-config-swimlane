const { validate } = require('jsonschema');
const configSchema = require('./schema');
const prettierConfig = require('../../lib/prettier.config');

describe('Prettier configuration', () => {
  it('should match the prettier schema', () => {
    const { valid } = validate(prettierConfig, configSchema);
    expect(valid).toBe(true, 'Configuration does not match schema.');
  });
});