for(let i=0; i<5; i++){
	console.log(`value of i = ${i}`);
}
//console.log(`outside the for loop, i = ${i}`);

const spinner = {};
{
	let count = 0;
	spinner.up = () => ++count;
}
console.log(spinner.up());
console.log(spinner.up());

let emp = {
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

/*function Employee({id=0, name='', city='bangalore'} = {}){
   this.id = id;
   this.name = name;
   this.city = city;
}*/

class Employee{
   constructor(id, name, salary){
       this.id = id;
       this.name = name;
       this.salary = salary;
   }
   display(){
       console.log(`Id = ${this.id}, Name = ${this.name}, Salary = ${this.salary}`);
   }
   static isEmployee(obj){
   		return obj instanceof Employee;
   }
}


var program = (function(){
	function addSync(x,y){
		console.log(`     [Service Provider] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`     [Service Provider] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[Service Consumer] triggering addSync for ${x} and ${y}`);
		var result = addSync(x,y);
		console.log(`[Service Consumer] result = ${result}`);
	}

	function addAsync(x,y, onResult){
		console.log(`     [Service Provider] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`     [Service Provider] returning result`);
			if (typeof onResult === 'function')
				onResult(result);
		},3000);
	}

	function addAsyncClient(x,y){
		console.log(`[Service Consumer] triggering addAsync for ${x} and ${y}`);
		addAsync(x,y, function(result){
			console.log(`[Service Consumer] result = ${result}`);
		});
	}

	let addAsyncEvents= (function(){
		let callbacks = [];
		function addResultCallback(onResult){
			callbacks.push(onResult);
		}
		function add(x,y){
			console.log(`     [Service Provider] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`     [Service Provider] returning result`);
				callbacks.forEach(cb => cb(result));
			},3000);		
		}
		return {
			onResult : addResultCallback,
			add : add
		};
	})();

	function addAsyncPromise(x,y){
		console.log(`     [Service Provider] processing ${x} and ${y}`);

		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`     [Service Provider] returning result`);
				resolveFn(result);
			},3000);		
		});
		return promise;
	}
	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient,
		addAsyncEvents : addAsyncEvents,
		addAsyncPromise : addAsyncPromise
	}
})()