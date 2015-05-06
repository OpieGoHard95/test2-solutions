var myValues = ["Eenie1", "Miney2", "Mo3", "Alls4", "Well5", "That6", "Ends7", "Well8", "Huh9"];

var regex = /[4-8]/;

myValues.forEach(function(value) {
  if (regex.test(value))
    print(value);
  });
