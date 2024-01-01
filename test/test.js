console.log = function() {};
const { expect } = require('chai');
const rewire = require('rewire');
const Structured = require('structured');
const fs = require('fs');
const code = fs.readFileSync('breadthFirstTraversal.js', 'utf-8');

describe('breadthFirstTraversal', function() {
  it('should be a function with a `start` parameter', function() {
    // check the arguments and recursive 
    const expected = function() {
      const breadthFirstTraversal = (start) => {
      }
    }

  	const startParamFound = Structured.match(code, expected);
  	expect(startParamFound !== false, 'Check that the `start` parameter is given as the first parameter.').to.equal(true);
	})
});

describe('breadthFirstTraversal', function() {
  it('should run without errors', function() {
		let dft;
    try {
        const moduleImport = rewire('../breadthFirstTraversal.js');
				dft = moduleImport.__get__('breadthFirstTraversal');
    } catch (e) {
        expect(true, 'We\'re unable to find the `breadthFirstTraversal` function. Try checking your code for syntax errors.').to.equal(false);
		}
    
    expect(typeof dft === 'function', `Expected \`breadthFirstTraversal\` to be a function. Instead it is ${typeof dft}`).to.equal(true);

    dft({ data: 'testtesttest', edges: [] });
	})
});