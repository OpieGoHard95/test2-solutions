var values = [{first: 3, second: "people"}, {first: 5, second: "animals"}];

print(values.reduce(function(sum, entry) {
	return sum + entry.first;
  },0));
