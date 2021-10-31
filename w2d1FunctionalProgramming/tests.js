
  describe("sum", function() {
    it("sums up the values in array", function() {
      assert.equal(sum([1,2,3,4]), 10);
    });
  });
  describe("multiply",function(){
    it("return product of numbers in the array",function(){
      assert.equal(multiply([1,2,3,4]),24);
    });
  });
describe("reverse",function(){
  it("return the reverse of the string",function(){
    assert.equal(reverse("samson"),"nosmas");
  });
});
describe("findLongestWords",function(){
  it("returns array of words greater than give i ",function(){
    assert.deepEqual(findLongestWords(["samson", "miu", "ahmed"],3),["samson","ahmed"]);
  });
});