function findMultiples(integer, limit) {
  var result =[integer];
  var m = 2;
  var num = integer*m;
  while(num<=limit){
    result.push(num);
    m++;
    num = integer*m;
  }
  return result;
}