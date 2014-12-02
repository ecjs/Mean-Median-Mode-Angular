exports.meanFind = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

exports.modeFind = function(array) {
  var count = {};
  var highest = 0;
  var winner = [];
  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    count[num] = (count[num] || 0) + 1;
  }

  for (var prop in count) {
    if (count[prop] >= highest) {
      highest = count[prop];
    }
  }

  for (var property in count) {
    if (count[property] == highest) {
      winner.push(property);
    }
  }
  return winner.toString();
};

exports.medianFind = function(array) {
  var halved = array.length / 2;
  if (array.length % 2 === 0) {
    return (array[halved] + array[halved - 1]) / 2;
  }
  else {
    return array[Math.round(halved) - 1];
  }
};
