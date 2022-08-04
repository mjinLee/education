class Person{
    constructor(private firstName: string, private lastName: string){}
    public sayHi(){
        return 'Hi may name is ${this.firstName} ${this.lastName}';
    }
}

class Entrepreneurs extends Person{
    constructor(
        firstName: string,
        lastName: string,
        private shares: number,
        private company: String
    ){
        super(firstName,lastName);
    }
}
class Actor extends Person{
    constructor(
        firstName: string,
        lastName: string,
        private oscars: number,
        private age: number
    ){
        super(firstName,lastName);
    }
}

const elons = new Entrepreneurs("Elon", "Musk", 177000000,"TSLA");
const andrew = new Actor("Andrew","Garfield",20,58);

elons.sayHi();
andrew.sayHi();