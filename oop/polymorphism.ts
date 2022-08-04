class People{
    public sayHi(){
        return "☆☆";
    }
    public sayBye(){
        return "★★";
    }
}

class Korean extends People{
    public sayHi(){ // Method Overriding
        return "안녕!";
    }
}
class Italian extends People{}

//korean_kim.sayHi(); // 안녕!
//Italian_mario.sayHi(); // ☆☆