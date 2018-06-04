var assert = require('assert');
var expect = require('chai').expect;
var math =  require('math');
var Number = require('lodash');

describe('Array',function(){
  describe('#indexOf()',function(){
    it('should return -1 when the value is not present',function(){
      assert.equal(-1,[1,2,3].indexOf(4));
    });

  });
});


expect(function(){}).to.not.throw();
expect({a:1}).to.not.have.property('b');
expect([1,2]).to.be.an('array').that.does.not.include(3);
