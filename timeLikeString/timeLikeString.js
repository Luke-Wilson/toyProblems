function solution(hour) {
  hour = hour.toString();
  var [newHours, mins] = [hour.slice(0, hour.length-2), hour.slice(hour.length-2)];
  if (newHours.length > 2 || newHours.length === 0) {
    throw Error;
  }
  return newHours+":"+mins;
}

console.log(solution(18000));
