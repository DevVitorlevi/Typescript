export class Book {
    public avaliable: boolean = true
    constructor(public readonly title: string, public readonly author: string) { }

    borrow(): void {
        this.avaliable = false
    }
    returnbook(): void {
        this.avaliable = true
    }
}

export class User {
    private borrowedBooks: Book[] = []
    constructor(public name: string) { }

    borrowBook(book: Book): void {
        book.borrow()
        if (book.avaliable) {

            this.borrowedBooks.push(book)
            console.log(`${this.name} pegou emprestado "${book.title}"`);
        } else {
            console.log(`O livro "${book.title}" já foi emprestado`);
        }
    }

    removeBook(book: Book): void {

        const index = this.borrowedBooks.indexOf(book)

        if (index > -1) {
            this.borrowedBooks.splice(index, 1);
            book.returnbook();
            console.log(`${this.name} devolveu "${book.title}"`);
        } else {
            console.log(`${this.name} não possui "${book.title}"`);
        }
    }

    listBooks(): void {
        console.log(`Livros de ${this.name}:`, this.borrowedBooks.map(b => b.title));
    }
}
export class Library {
    protected books: Book[] = []
    protected users: User[] = []

    addBook(book: Book): void {
        this.books.push(book)
    }

    addUser(user: User): void {
        this.users.push(user)
    }

    showAvaliablesBooks(): void {
        const avaliableBook = this.books.filter(book => book.avaliable)

        if (avaliableBook.length > 0) {
            console.log('Livros Disponiveis:')
            avaliableBook.map(book => {
                console.log(`Autor:${book.author} - Titulo:${book.title}`)
            })
        } else {
            console.log("Não há livros disponíveis no momento.");
        }
    }

    showUsers() {
        console.log('Usuarios Cadastrados:')
        this.users.map((user => user.listBooks()))
    }
}

const library = new Library();

// Criando livros
const book1 = new Book("O Senhor dos Anéis", "J.R.R. Tolkien");
const book2 = new Book("Harry Potter", "J.K. Rowling");
const book3 = new Book("1984", "George Orwell");
const book4 = new Book("Corrida dos Alejados", "Wanderley Patricio");

// Adicionando livros à biblioteca
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);


const user1 = new User("Vitor Levi");
const user2 = new User("Caio Rebouças");
const user3 = new User("Joaõ Vitor");

library.addUser(user1)
library.addUser(user2)
library.addUser(user3)


// Vitor pega emprestado "O Senhor dos Anéis"
user1.borrowBook(book1);

library.showUsers()
library.showAvaliablesBooks()