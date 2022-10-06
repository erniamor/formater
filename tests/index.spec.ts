import 'mocha';
import { assert } from 'chai';

import npmPackage from '../src/index';
import { formatBytes } from '../src/index';

describe('Formater', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });
  it('should have a formatBytes property', () => {
    assert.property(npmPackage, 'formatBytes');
  });

  describe('formatBytes', () => {
    it('should be a function', () => {
      assert.isFunction(formatBytes);
    });
  });

});
