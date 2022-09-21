import 'mocha';
import { assert } from 'chai';

import { formatBytes } from '../src/index';
import npmPackage from '../src/index';

describe('Formater', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a formatBytes property', () => {
    assert.property(npmPackage, 'formatBytes');
  });
});

describe('formatBytes Function', () => {
  it('should be a function', () => {
    assert.isFunction(formatBytes);
  });

  it('should return "0 Byte" with bytes parameter equal to 0', () => {
    const expected = '0 Byte';
    const actual = formatBytes(0);
    assert.equal(actual, expected);
  });
});
