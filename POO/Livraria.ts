export class Book {
  public available: boolean = true; // corrigido
  constructor(
    public readonly title: string,
    public readonly author: string,
  ) {}

  borrow(): void {
    this.available = false;
  }

  returnBook(): void {
    // corrigido
    this.available = true;
  }
}

export class User {
  private borrowedBooks: Book[] = [];
  constructor(public name: string) {}

  borrowBook(book: Book): void {
    if (book.available) {
      // verificar antes de emprestar
      book.borrow();
      this.borrowedBooks.push(book);
      console.log(`${this.name} pegou emprestado "${book.title}"`);
    } else {
      console.log(`O livro "${book.title}" já foi emprestado`);
    }
  }

  removeBook(book: Book): void {
    const index = this.borrowedBooks.indexOf(book);
    if (index > -1) {
      this.borrowedBooks.splice(index, 1);
      book.returnBook();
      console.log(`${this.name} devolveu "${book.title}"`);
    } else {
      console.log(`${this.name} não possui "${book.title}"`);
    }
  }

  listBooks(): void {
    console.log(
      `Livros de ${this.name}:`,
      this.borrowedBooks.map((b) => b.title),
    );
  }
}

export class Library {
  protected books: Book[] = [];
  protected users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  showAvailableBooks(): void {
    const availableBooks = this.books.filter((book) => book.available);

    if (availableBooks.length > 0) {
      console.log('Livros disponíveis:');
      availableBooks.forEach((book) => {
        console.log(`Autor: ${book.author} - Título: ${book.title}`);
      });
    } else {
      console.log('Não há livros disponíveis no momento.');
    }
  }

  showUsers(): void {
    console.log('Usuários cadastrados:');
    this.users.forEach((user) => user.listBooks());
  }
}

// ---------- Testes ----------

const library = new Library();

// Criando livros
const book1 = new Book('O Senhor dos Anéis', 'J.R.R. Tolkien');
const book2 = new Book('Harry Potter', 'J.K. Rowling');
const book3 = new Book('1984', 'George Orwell');
const book4 = new Book('Corrida dos Aleijados', 'Wanderley Patricio');

// Adicionando livros à biblioteca
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

// Criando usuários
const user1 = new User('Vitor Levi');
const user2 = new User('Caio Rebouças');
const user3 = new User('João Vitor');

library.addUser(user1);
library.addUser(user2);
library.addUser(user3);

// Vitor pega emprestado "O Senhor dos Anéis"
user1.borrowBook(book1);
user1.listBooks();

// Mostrar livros disponíveis
library.showAvailableBooks();

// Mostrar usuários e seus livros
library.showUsers();
