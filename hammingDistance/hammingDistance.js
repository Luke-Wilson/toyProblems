function hammingDistance(a, b) {
  var distance = 0;
  a = a.toString(2);
  b = b.toString(2);

  var long, short;
  a.length > b.length ? [long, short] = [a,b] : [long, short] = [b,a]

  while (short.length < long.length) {
    short = '0' + short;
  }

  for (var i = 0; i < short.length; i++) {
    if (short[i] !== long[i]) {
      distance++;
    }
  }

  return distance;
}


console.log(hammingDistance(25, 87))