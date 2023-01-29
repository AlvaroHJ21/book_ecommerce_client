import LocalBookRepository from '../../../../data/local/LocalBookRepository';
import { useBooks } from '../../../hooks/useBooks';
import { Hero } from './components/Hero';
import { BookItem } from './components/BookItem';

function HomeView() {

  const {books} = useBooks(new LocalBookRepository);

  return (
      <>
          <Hero />
          <div className="flex flex-col items-center my-20">
          <h1 className="text-3xl font-bold mb-10">Best Seller Books</h1>
          <ul className="items flex gap-4 flex-wrap justify-center">
              {
                books.map((book) => (
                  <BookItem key={book.id} book={book} />
                ))
              }
          </ul>
      </div>
      </>
  );
}

export default HomeView
