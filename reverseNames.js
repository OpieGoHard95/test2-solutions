print(
  "Hopper, Grace Marie\nMcCarthy, John L.\nRitchie, Dennis P."
    .replace(/([\w ]+), ([\w ]+) ([A-Z]\.)/g, "$2 $3 $1"));
