class Account {
    constructor(name, balance){
        this._id = Account.nextId++;
        this.name = name;
        this.balance = balance;
    }

    static nextId = 1;

    get id(){
        return this._id;
    }

    set id(name){
        return false;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    get balance(){
        return this._balance;
    }
    set balance(balance){
        this._balance = balance;
    }

    credit(amount){
        return this.balance += amount;
    }

    debit(amount){
        return amount < this.balance ? this.balance -= amount : "Amount exceeded balance.";
    }

    transferTo(anotherAccount, amount){
        if(amount < this.balance){
            anotherAccount.credit(amount);
            return this.debit(amount);
        } else {
            return "Amount exceeded balance."
        }
    }

    static identifyAccounts(accountFirst, accountSecond){
        return (accountFirst.id == accountSecond.id &&
                accountFirst.name == accountSecond.name &&
                accountFirst.balance == accountSecond.balance);
    }

    toString(){
        return `Name: ${this.name},\nBalance: ${this.balance}`;
    }
}

let acc = new Account("Roman", 500);
let acc2 = new Account("Dan", 1500);
// console.log(acc.credit(50));
// console.log(acc.debit(30));
console.log(acc.toString());
console.log(acc2.toString());

console.log(acc.transferTo(acc2, 300));
console.log(acc2.balance);

let accCopy = acc;
console.log(Account.identifyAccounts(acc, acc2));