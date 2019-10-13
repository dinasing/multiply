module.exports = function multiply(first, second) {
  var length = (+first) + (+second) > 1000 ? length = 1000 : length = (+first) + (+second);
	var result = Array(length).fill(0);
  first =  first.split('').reverse();
  second = second.split('').reverse();
  for (let i = 0; i< first.length; i++) {
	  for (let j = 0; j < second.length; j++) {
			result[i + j] += first[i] * second[j];
	  }
 }
  for(let i = 0 ; i < length-1 ; i++) {
    if (result[i] >= 10) {
      if (!result[i + 1]) {
        result[i + 1] = 0;
	    }   
    result[i + 1] += parseInt(result[i] / 10);
    result[i] %= 10;
	  }
  }
  return result.reverse().join('').replace(/^0+/, '');
}