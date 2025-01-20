class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello I am ${this.name} and I am ${this.age} years old.`;
    }
}


const [a,b] = [2,4,5,6];

export {
    Person, a
};