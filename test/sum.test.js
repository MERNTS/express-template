// npm test

const sum = require('../sum')

test('adds 2+2', ()=>{
	expect(sum(2,2)).toBe(4);
});