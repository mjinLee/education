class BetterArray{
    private items: string[];
    constructor(){
        this.items = [];
    }
    public getItems(){
        return [this.items];
    }
    public addItem(item: string){
        this.items.push(item);
    }
    public removeItem(itemToDelete: string){
        this.items = this.items.filter((item) => item !== itemToDelete);
    }
    public modifyItem(itemToChange: string, newValue: string){
        const index = this.items.indexOf(itemToChange);
        if(index !== -1){
            this.items[index] = newValue;
        }
    }
}

const arr = new BetterArray();
arr.addItem("I like");
arr.addItem("javascript");
arr.modifyItem("javascript", "Typescript");