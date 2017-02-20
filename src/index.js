sum = function(first, second) {
	let res = '';
	let i = first.length - 1;
	let j = second.length - 1;
	let o = 0;
	while(i >= 0 && j >= 0) {
		let temp = +first[i] + +second[j] + o;
		res = (temp % 10) + res;
		o = Math.floor(temp / 10);
		i--; j--;
    }    
	while (i >= 0 || j >=0) {
		if (i >= 0) {
			res = (+first[i] + o) + res;
			i--;
		}
		if (j >= 0) {
			res = (+second[j] + o) + res;
			j--;
		}
		if (o)
			o = '';
    }
	if (o)
		res = o + res;
	return res;
}

mult = function(str, n) {
	let res = '';
	let i = str.length - 1;
	let o = 0;
	while (i >= 0) {
		let temp = +str[i] * n + o;
		res = (temp % 10) + res;
		o = Math.floor(temp / 10);
		i--;
	}
	if (o)
		res = o + res;
	return res;
}

module.exports = function multiply(first, second) {
	let result = '';
	let j = second.length - 1;
	while (j >= 0) {
		let temp = mult(first, second[j]);
		for (k = 0; k <= (second.length - 2 - j); k++) 
			temp = temp + '0';
		result = sum(result, temp);
		j--;
	}
	return result;
}
