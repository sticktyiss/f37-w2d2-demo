let person = {
    firstName: 'Ruby',
    lastName: 'Rose',
    age: 16
}

// console.log(person.firstName)

let meal = {
    appetizer: 'rolls',
    entree: 'shrimp scampi',
    dessert: 'crumbl',
    drink: 'H2O',
}

let {dessert} = meal

// console.log(dessert)

// let {drink: bestDrinkEver, appetizer, entree} = meal

// for(let key in meal) {
//     console.log(`For my ${key} I have ${meal[key]}`)
// }

person.job = 'Web Dev'

person.pets = ['Zeb', 'Grimm']

console.log(person.pets[0])

delete meal.dessert




// Classes
//class CLASSNAME {
//  constructor(VALUES FROM INSTANCE) {
//    this.KEY = VALUE
//  }

//  METHODNAME(PARAMS){
//   CODE BLOCK
//  }
//}


class Pet {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Cat extends Pet {
    constructor(name, age, color){
        super(name, age)
        this.color = color
    }

    meow() {
        console.log(`Meow.. My name is ${this.name}`)
    }
}

let penny = new Cat('Penny', 13, 'Black')

console.log(penny)

penny.meow()