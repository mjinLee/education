//console.log("hello js");

class Player{
    constructor(name,health,skill){
        this.name = name;
        this.health = health;
        this.skill = skill;
        this.xp=0;
        this.calculateNetWorth = undefined;
    }
    sayHello(){
        return `Hi, my name is ${this.name} and my skill is ${this.skill}`;
    }
    takeHit(){
        this.health = this.health - 5;
    }
}
const bill = new Player("Bill Gates",85,"Programmer");
const elon = new Player("Elon Musk",90,"Legend");
const warren = new Player("Warren Buffet",100,"Investor");

console.log(elon.skill);
console.log(bill.sayHello());

//class inheritance상속
class Human{
    constructor(name){
        this.name = name;
        this.arms = 2;
        this.legs =2;
    }
}
class Baby extends Human{
    constructor(name){
        super(name);
        this.cute = true;
    }
    cry(){
        return 'waa waa';
    }
}
class Teenager extends Human{
    constructor(name){
        super(name);
        this.emotional = true;
    }
    curse(){
        return '#$18%@&!';
    }
}