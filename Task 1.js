Array.prototype.reduce2 = function(operation, start) {
	var accum = 0;
	var sum = 0;
	var mull = 1;
	if (arguments.length == 2) {
		accum = start;
	} else {
		accum = this[0] - 1;
	}
	if (operation == add) {
  	for (var i = 0; i <= a.length; i++) {
		sum += i;
	}
	return operation(sum, accum);
	}

	if (operation == mul) {
		for (var i = 1; i <= a.length; i++) {
		mull *= i;
	}
	accum = 1;
	return operation(mull, accum);
	}

	if (operation == foo) {
		for (var i = 1; i <= a.length; i++) {
			sum = a.join('');
	}
	return operation('', sum);
	}
};
function add(a, b) { return a + b };
function mul(a, b) { return a * b };
function foo(a, b) { return a.concat(b) };
var a = [1, 2, 3, 4];
console.log(a.reduce(add), a.reduce2(add));
console.log(a.reduce(add, 10), a.reduce2(add, 10));
console.log(a.reduce(add, undefined), a.reduce2(add, undefined));
console.log(a.reduce(mul), a.reduce2(mul));
console.log(a.reduce(foo, ''), a.reduce2(foo, ''));


