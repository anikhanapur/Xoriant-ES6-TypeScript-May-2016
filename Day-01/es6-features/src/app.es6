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

	function addAsync(x,y){
		console.log(`     [Service Provider] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`     [Service Provider] returning result`);
			return result;
		},3000);
	}

	function addAsyncClient(x,y){
		console.log(`[Service Consumer] triggering addAsync for ${x} and ${y}`);
		var result = addAsync(x,y);
		console.log(`[Service Consumer] result = ${result}`);
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient
	}
})()