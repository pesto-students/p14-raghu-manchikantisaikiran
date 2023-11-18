class Person {
    constructor(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    introduce() {
        return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}.`
    }
}

class Student extends Person {
    constructor(name, age, gender, nationality, subject) {
        super(name, age, gender, nationality);
        this.subject = subject;
    }

    study() {
        return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}. I am studying ${this.subject}. `
    }
}

const person1 = new Person('Sai Kiran', 23, 'Male', 'Indian');
const person2 = new Person('Syed', 23, 'Male', 'Indian');
const person3 = new Person('ABC', 32, 'Female', 'UAE');

person1.introduce();
person1.introduce();
person1.introduce();

const student = new Student('Sai Kiran', 23, 'Male', 'Indian', 'Full Stack Development');

student.introduce();
student.study();