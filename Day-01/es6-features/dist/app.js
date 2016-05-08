(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getDate = getDate;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var idSymbol = Symbol();

var Employee = exports.Employee = function () {
    function Employee(id, name, salary) {
        _classCallCheck(this, Employee);

        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    _createClass(Employee, [{
        key: 'display',
        value: function display() {
            return 'Id = ' + this.id + ', Name = ' + this.name + ', Salary = ' + this.salary;
        }
    }, {
        key: 'id',
        get: function get() {
            console.log('id getter triggered');
            return this[idSymbol];
        },
        set: function set(value) {
            console.log('id setter triggered');
            this[idSymbol] = value;
        }
    }], [{
        key: 'isEmployee',
        value: function isEmployee(obj) {
            return obj instanceof Employee;
        }
    }]);

    return Employee;
}();

function getDate() {
    return new Date();
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Employee2 = require('./Employee.es6');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log((0, _Employee2.getDate)());

var FullTimeEmployee = function (_Employee) {
	_inherits(FullTimeEmployee, _Employee);

	function FullTimeEmployee(id, name, salary, benefits) {
		_classCallCheck(this, FullTimeEmployee);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FullTimeEmployee).call(this, id, name, salary));

		_this.benefits = benefits;
		return _this;
	}

	_createClass(FullTimeEmployee, [{
		key: 'display',
		value: function display() {
			return _get(Object.getPrototypeOf(FullTimeEmployee.prototype), 'display', this).call(this) + (', benefits=' + this.benefits);
		}
	}]);

	return FullTimeEmployee;
}(_Employee2.Employee);

exports.default = FullTimeEmployee;

},{"./Employee.es6":1}],3:[function(require,module,exports){
'use strict';

var _spinner = require('./spinner.es6');

var _spinner2 = _interopRequireDefault(_spinner);

var _FullTimeEmployee = require('./FullTimeEmployee.es6');

var _FullTimeEmployee2 = _interopRequireDefault(_FullTimeEmployee);

var _asyncProgram = require('./asyncProgram.es6');

var asyncProgram = _interopRequireWildcard(_asyncProgram);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('asyncProgram -> ', asyncProgram);

for (var i = 0; i < 5; i++) {
	console.log('value of i = ' + i);
}
//console.log(`outside the for loop, i = ${i}`);

console.log(_spinner2.default);

console.log(_spinner2.default.up());
console.log(_spinner2.default.up());

/*let emp = {
	name : 'Magesh',
	city : 'Bangalore',
	display : function() {
		console.log(`name = ${this.name}, city = ${this.city}`);
	}
}
emp.display();

var line = `this is the first line
this is the second line
this is the third line`;
console.log(line);
*/
var ftEmployee = new _FullTimeEmployee2.default(100, 'Magesh', 10000, 'Car');
console.log(ftEmployee.display());

},{"./FullTimeEmployee.es6":2,"./asyncProgram.es6":4,"./spinner.es6":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addSyncClient = addSyncClient;
exports.addAsyncClient = addAsyncClient;
exports.addAsyncPromise = addAsyncPromise;
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

function addAsync(x, y, onResult) {
	console.log('     [Service Provider] processing ' + x + ' and ' + y);
	setTimeout(function () {
		var result = x + y;
		console.log('     [Service Provider] returning result');
		if (typeof onResult === 'function') onResult(result);
	}, 3000);
}

function addAsyncClient(x, y) {
	console.log('[Service Consumer] triggering addAsync for ' + x + ' and ' + y);
	addAsync(x, y, function (result) {
		console.log('[Service Consumer] result = ' + result);
	});
}

var addAsyncEvents = exports.addAsyncEvents = function () {
	var callbacks = [];
	function addResultCallback(onResult) {
		callbacks.push(onResult);
	}
	function add(x, y) {
		console.log('     [Service Provider] processing ' + x + ' and ' + y);
		setTimeout(function () {
			var result = x + y;
			console.log('     [Service Provider] returning result');
			callbacks.forEach(function (cb) {
				return cb(result);
			});
		}, 3000);
	}
	return {
		onResult: addResultCallback,
		add: add
	};
}();

function addAsyncPromise(x, y) {
	console.log('     [Service Provider] processing ' + x + ' and ' + y);

	var promise = new Promise(function (resolveFn, rejectFn) {
		setTimeout(function () {
			var result = x + y;
			console.log('     [Service Provider] returning result');
			resolveFn(result);
		}, 3000);
	});
	return promise;
}

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var spinner = {};
{
	(function () {
		var count = 0;
		spinner.up = function () {
			return ++count;
		};
	})();
}
exports.default = spinner;

},{}]},{},[3]);
