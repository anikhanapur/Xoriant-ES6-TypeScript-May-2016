const idSymbol = Symbol();
export class Employee{
   constructor(id, name, salary){
       this.id = id;
       this.name = name;
       this.salary = salary;
   }
   get id(){
   		console.log('id getter triggered');
   		return this[idSymbol];
   }
   set id(value){
   		console.log('id setter triggered');
   		this[idSymbol] = value;
   }
   display(){
       return `Id = ${this.id}, Name = ${this.name}, Salary = ${this.salary}`;
   }
   static isEmployee(obj){
   		return obj instanceof Employee;
   }
}
export function getDate(){
	return new Date();
}