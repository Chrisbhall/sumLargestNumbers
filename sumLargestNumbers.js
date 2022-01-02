const sumLargestNumbers = function(data) {
  // Put your solution here
  let x = 0, y = 0;
 for (let i = 0; i < data.length; i++){
	if (data[i] > x && data[i] > y && x === 0){
		x = data[i];
	}else if (data[i] < x && data[i] > y){
		y = data[i];
	}else if (data[i] > x && data[i] > y && y < x){
		y = data[i];
	}else if (data[i] > x && data[i] > y && y > x){
		x = data[i];
	}
}
return y+x;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
