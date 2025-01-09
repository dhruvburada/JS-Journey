class Person
{

    // constructor method will be called automatically when the class is instantiated
    constructor(fname,lname,age)
    {
        this.fname = fname; // this is used to set propety of the current object
        this.lname = lname;
        this.age = age;
    }

    // getter and setter methods

    get firstName()
    {
        return this.fname;
    }

    set firstName(value)
    {
        this.fname = value;
    }


    //static method which will be called on class instead of the object
    static getPlanet()
    {
        return "Earth";
    }

}

// creating object

let person1 = new Person("Dhruv","Burada",20);
person1.fname = "Dhruv";
//logging Person object
console.log(person1);


person1.firstName = "Honey";

console.log(Person.getPlanet());


//Inheritance 
class Employee extends Person
{
    constructor(fname,lname,age,salary)
    {
        super(fname,lname,age);
        this.salary = salary;
    }
}

let employee1 = new Employee("John","Doe",30,50000);

console.log(employee1);