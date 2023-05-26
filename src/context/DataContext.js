// Context
import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (search.trim().length === 0) {
        return;
      } else {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBexni8XnlLQ1HHavU2QD7Nh1BeDj2VqI4&maxResults=40`
          );
          const data = await response.json();
          setBooks(data.items);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchData();
  }, [search]);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        books,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
