(function(exports) {

  // Return an object, both functions are named properties thereof!!
  exports.isEven = function(value) {
    return ((value%2 == 0)?true:false);
    }
  exports.overTen = function(value) {
    return (value > 10);
    }
})(this.showMe = {});

print(showMe.isEven(8));
print(showMe.isEven(9));
print(showMe.overTen(9));
print(showMe.overTen(12));

