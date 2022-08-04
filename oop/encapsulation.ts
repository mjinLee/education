class Entrepreneur{
    constructor(
        private firstName: String,
        private lastName: String,
        private shares: Number,
        private company: String
    ){}
    public calculateNetWorth(){
        return this.shares * getSharePrice(this.company);
    }
    public getName(){
        return '${this.firstName} ${this.lastName}'
    }
}
const elon = new Entrepreneur("Elon","Musk", 177000000,"TSLA");
elon.calculateNetWorth();
elon.getName();