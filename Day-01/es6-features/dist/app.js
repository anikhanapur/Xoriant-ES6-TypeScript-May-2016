'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

for (var i = 0; i < 5; i++) {
	console.log('value of i = ' + i);
}
//console.log(`outside the for loop, i = ${i}`);

var spinner = {};
{
	(function () {
		var count = 0;
		spinner.up = function () {
			return ++count;
		};
	})();
}
console.log(spinner.up());
console.log(spinner.up());

var emp = {
	name: 'Magesh',
	city: 'Bangalore',
	display: function display() {
		console.log('name = ' + this.name + ', city = ' + this.city);
	}
};
emp.display();

var line = 'this is the first line\nthis is the second line\nthis is the third line';
console.log(line);

/*function Employee({id=0, name='', city='bangalore'} = {}){
   this.id = id;
   this.name = name;
   this.city = city;
}*/

var Employee = function () {
	function Employee(id, name, salary) {
		_classCallCheck(this, Employee);

		this.id = id;
		this.name = name;
		this.salary = salary;
	}

	_createClass(Employee, [{
		key: 'display',
		value: function display() {
			console.log('Id = ' + this.id + ', Name = ' + this.name + ', Salary = ' + this.salary);
		}
	}], [{
		key: 'isEmployee',
		value: function isEmployee(obj) {
			return obj instanceof Employee;
		}
	}]);

	return Employee;
}();

var program = function () {
	function addSync(x, y) {
		console.log('     [Service Provider] processing ' + x + ' and ' + y);
		var result = x + y;
		console.log('     [Service Provider] returning result');
		return result;
	}

	function addSyncClient(x, y) {
		console.log('[Service Consumer] triggering addSync for ' + x + ' and ' + y);
		var result = addSync(x, y);
		console.log('[Service Consumer] result = ' + result);
	}

	function addAsync(x, y) {
		console.log('     [Service Provider] processing ' + x + ' and ' + y);
		setTimeout(function () {
			var result = x + y;
			console.log('     [Service Provider] returning result');
			return result;
		}, 3000);
	}

	function addAsyncClient(x, y) {
		console.log('[Service Consumer] triggering addAsync for ' + x + ' and ' + y);
		var result = addAsync(x, y);
		console.log('[Service Consumer] result = ' + result);
	}

	return {
		addSyncClient: addSyncClient,
		addAsyncClient: addAsyncClient
	};
}();