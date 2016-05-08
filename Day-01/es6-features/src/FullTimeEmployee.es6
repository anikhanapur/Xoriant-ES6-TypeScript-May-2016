import {Employee, getDate} from './Employee.es6';
console.log(getDate());
class FullTimeEmployee extends Employee{
	constructor(id, name, salary, benefits){
		super(id, name, salary);
		this.benefits = benefits;
	}

	display(){
		return super.display() + `, benefits=${this.benefits}`;
	}
}
export default FullTimeEmployee