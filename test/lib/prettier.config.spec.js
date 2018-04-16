const configSchema = require('./schema');

describe('Prettier configuration', () => {
  it('should match the prettier schema', () => {
    console.log(configSchema);
    expect(true).toBe(false);
  });
});