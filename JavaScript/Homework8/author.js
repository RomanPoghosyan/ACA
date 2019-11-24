class Author {
    constructor(name, email, gender){
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }

    toString(){
        return `Name: ${this.name},\nEmail: ${this.email},\nGender: ${this.gender}`;
    }
}

class Book {
    constructor(title, author, price, quantity){
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    get title(){
        return this._title;
    }
    set title(title){
        this._title = title;
    }

    get author(){
        return this._author;
    }
    set author(author){
        this._author = author;
    }

    get price(){
        return this._price;
    }
    set price(price){
        this._price = price;
    }

    get quantity(){
        return this._quantity;
    }
    set quantity(quantity){
        this._quantity = quantity;
    }

    getProfit(){
        return this.price * this.quantity;
    }

    toString(){
        return `Title: ${this.title},\n\nAuthor:\n${this.author.toString()},\n\nPrice: ${this.price}$,\nQuantity: ${this.quantity}`;
    }
}

let auth = new Author("Douglas Crockford", "dg@gmail.com", "male");
let book = new Book("JavaScript: the good parts", auth, 16, 200000);
console.log(book.toString());
console.log(book.getProfit());

