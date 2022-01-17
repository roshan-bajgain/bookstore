import AddBooks from "./addBooks";
import Book from "./book";

const Books = () => {
  const data = [
      {
        id: 1,
        title: 'Action',
        name: 'The Hunger Games',
        author: 'Suzanne Collins',
        endRate: '64',
      },
      {
        id: 2,
        title: 'Fiction',
        name: 'Herry Potter',
        author: 'J. K. Rowling',
        endRate: '100',
      }
  ]
  return(
      <div>
          <Book data={data} />
          <AddBooks />
      </div>
  )
};

export default Books;