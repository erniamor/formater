import 'mocha';
import { assert } from 'chai';

import { formatBytes } from '../../src/core/formatBytes';
import SCENARIOS from './formatBytes.scenarios'

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
