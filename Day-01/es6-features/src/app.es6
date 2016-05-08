import spinner from './spinner.es6';
import FullTimeEmployee from './FullTimeEmployee.es6';
import * as asyncProgram from './asyncProgram.es6';

console.log('asyncProgram -> ', asyncProgram);

for(let i=0; i<5; i++){
	console.log(`value of i = ${i}`);
}
//console.log(`outside the for loop, i = ${i}`);

console.log(spinner);

console.log(spinner.up());
console.log(spinner.up());

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
var ftEmployee = new FullTimeEmployee(100, 'Magesh', 10000, 'Car');
console.log(ftEmployee.display());