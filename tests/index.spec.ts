import 'mocha';
import { assert } from 'chai';

import { formatBytes } from '../src/index';
import npmPackage from '../src/index';

import SCENARIOS from './index.scenarios'

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
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return "${scenario.output}" with "${scenario.input.bytes}" bytes and "${scenario.input.decimals}" decimals`, () => {
      const expected = scenario.output;
      const actual = formatBytes(scenario.input.bytes, scenario.input.decimals);
      assert.equal(actual, expected);
    });

  }
});
