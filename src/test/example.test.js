import example from '../main/example';

describe('example', () => {
  it('happy path', () => {
    expect(example()).toBe('foo');
  });
});