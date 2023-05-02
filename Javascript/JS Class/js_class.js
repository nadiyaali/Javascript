class Color{
    constructor(r,g,b,colorName){
        this.r = r
        this.g = g
        this.b = b
        this.colorName = colorName
    }
greet(){
    return "Hello from " + this.colorName 
}

}

const c1 = new Color(180,240,0,"mycolor")
console.log(c1)
console.log(c1.greet())

class Pet{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Cat extends Pet{
    constructor(name,age,lives){
        super(name,age)
        this.lives= lives
    }
    meow(){
        console.log(`${this.name} says meow`)
    }
}

class Dog extends Pet{
    bark(){
        console.log(`${this.name} says woof`)
    }
}



const cat1 = new Cat("Mano",10, 9)
const dog1 = new Dog("Tommy",3)

cat1.eat()
cat1.meow()

dog1.eat()
dog1.bark()