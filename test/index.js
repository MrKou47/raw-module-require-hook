const chai = require('chai');
const hook = require('../src');
const { expect } = chai;

describe('Test hook', () => {
  it('test require html file', () => {
    hook({ extensions: ['.html']});
    expect(require('../assets/test.html')).equal('<div>test html</div>');
  });

  it('test require txt file', () => {
    hook({ extensions: ['txt']});
    expect(require('../assets/test.txt')).equal('test txt file.');
  });
});
