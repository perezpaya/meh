var assert = require('assert')
require('./lib')

describe('Array', function(){
  describe('#equals()', function(){
    it('should return false when the arrays are different', function(){
		assert.equal([0,1,3].equals([0,1,3]), true);
		assert.equal([0,[1,2,3],3].equals([0,[1,2,3],3]), true);
		assert.equal([0,3,1].equals([0,1,3]), false);
		assert.equal([1,3,2].equals([1,4,2]), false);
		assert.equal([0,1].equals([0]), false);
		assert.equal([0].equals([0,1]), false);
		assert.equal([0].equals(0), false);
		assert.equal(['a'].equals('a'), false);
    });
  });
});

describe('String', function (){
	describe('#format()', function (){
		it('should return formated string by {params}', function (){
			assert.equal('hey how are you', '{hey} how are {you}'.format({
				hey: 'hey',
				you: 'you'
			}));
			assert.equal('hey how are you', '{0} {1} {2} {3}'.format('hey', 'how', 'are', 'you'));
			assert.equal('hey how are you', '{0} {1} {2} {3}'.format(['hey', 'how', 'are', 'you']));
		});
	});
});