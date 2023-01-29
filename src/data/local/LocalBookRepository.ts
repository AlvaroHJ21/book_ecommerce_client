import Book from '../../domain/models/Book';
import { BookRepository } from '../../domain/repositories/BookRepository';

export default class LocalBookRepository implements BookRepository {

    private books: Book[] = [
        {
            id: 1,
            title: 'Book Mockup 1',
            description:
                'Proident id Lorem enim cupidatat. Incididunt incididunt excepteur voluptate incididunt ad. Minim nulla deserunt excepteur tempor reprehenderit nisi. Nisi id Lorem ut minim consectetur velit velit ipsum consectetur Lorem sint est tempor. Reprehenderit excepteur laboris cillum duis elit id est labore laboris exercitation eu. Anim velit Lorem culpa consequat dolor et ullamco reprehenderit elit officia proident occaecat duis commodo. Minim laboris nulla eiusmod qui culpa minim reprehenderit incididunt eiusmod tempor cillum id in culpa.',
            price: 10,
            authors: ['Maria Arguedas, José José'],
            image: "https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-2.jpg"
        },
        {
            id: 2,
            title: 'Book Mockup 2',
            description:
                'Proident id Lorem enim cupidatat. Incididunt incididunt excepteur voluptate incididunt ad. Minim nulla deserunt excepteur tempor reprehenderit nisi. Nisi id Lorem ut minim consectetur velit velit ipsum consectetur Lorem sint est tempor. Reprehenderit excepteur laboris cillum duis elit id est labore laboris exercitation eu. Anim velit Lorem culpa consequat dolor et ullamco reprehenderit elit officia proident occaecat duis commodo. Minim laboris nulla eiusmod qui culpa minim reprehenderit incididunt eiusmod tempor cillum id in culpa.',
            price: 20,
            authors: ['Maria Arguedas, José José'],
            image: "https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-2.jpg"
        },
        {
            id: 3,
            title: 'Book Mockup 3',
            description:
                'Proident id Lorem enim cupidatat. Incididunt incididunt excepteur voluptate incididunt ad. Minim nulla deserunt excepteur tempor reprehenderit nisi. Nisi id Lorem ut minim consectetur velit velit ipsum consectetur Lorem sint est tempor. Reprehenderit excepteur laboris cillum duis elit id est labore laboris exercitation eu. Anim velit Lorem culpa consequat dolor et ullamco reprehenderit elit officia proident occaecat duis commodo. Minim laboris nulla eiusmod qui culpa minim reprehenderit incididunt eiusmod tempor cillum id in culpa.',
            price: 30,
            authors: ['Maria Arguedas, José José'],
            image: "https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-2.jpg"
        },
        {
            id: 4,
            title: 'Book Mockup 4',
            description:
                'Proident id Lorem enim cupidatat. Incididunt incididunt excepteur voluptate incididunt ad. Minim nulla deserunt excepteur tempor reprehenderit nisi. Nisi id Lorem ut minim consectetur velit velit ipsum consectetur Lorem sint est tempor. Reprehenderit excepteur laboris cillum duis elit id est labore laboris exercitation eu. Anim velit Lorem culpa consequat dolor et ullamco reprehenderit elit officia proident occaecat duis commodo. Minim laboris nulla eiusmod qui culpa minim reprehenderit incididunt eiusmod tempor cillum id in culpa.',
            price: 40,
            authors: ['Maria Arguedas, José José'],
            image: "https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-2.jpg"
        },
        {
            id: 5,
            title: 'Book Mockup 5',
            description:
                'Proident id Lorem enim cupidatat. Incididunt incididunt excepteur voluptate incididunt ad. Minim nulla deserunt excepteur tempor reprehenderit nisi. Nisi id Lorem ut minim consectetur velit velit ipsum consectetur Lorem sint est tempor. Reprehenderit excepteur laboris cillum duis elit id est labore laboris exercitation eu. Anim velit Lorem culpa consequat dolor et ullamco reprehenderit elit officia proident occaecat duis commodo. Minim laboris nulla eiusmod qui culpa minim reprehenderit incididunt eiusmod tempor cillum id in culpa.',
            price: 50,
            authors: ['Maria Arguedas, José José'],
            image: "https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-2.jpg"
        },
        {
            id: 6,
            title: 'Book Mockup 6',
            description:
                'Proident id Lorem enim cupidatat. Incididunt incididunt excepteur voluptate incididunt ad. Minim nulla deserunt excepteur tempor reprehenderit nisi. Nisi id Lorem ut minim consectetur velit velit ipsum consectetur Lorem sint est tempor. Reprehenderit excepteur laboris cillum duis elit id est labore laboris exercitation eu. Anim velit Lorem culpa consequat dolor et ullamco reprehenderit elit officia proident occaecat duis commodo. Minim laboris nulla eiusmod qui culpa minim reprehenderit incididunt eiusmod tempor cillum id in culpa.',
            price: 60,
            authors: ['Maria Arguedas, José José'],
            image: "https://unblast.com/wp-content/uploads/2020/05/Square-Book-Mockup-2.jpg"
        }
    ];

    getBooks(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            resolve(this.books);
        });
    }

    getBook(id: number): Promise<Book> {
        return new Promise((resolve, reject) => {
            const book = this.books.find((p) => p.id === id);
            if(!book) throw new Error('El libro no existe');
            resolve(book);
        });
    }
}
