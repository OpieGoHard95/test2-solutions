var values = [{ one: 1, two:2, three:3 }, {one: 2, two: 3, three: 4}];
print(JSON.stringify(values.filter(function(someEntry) {
	if (someEntry.one == 1) 
	  return this;
	})));

