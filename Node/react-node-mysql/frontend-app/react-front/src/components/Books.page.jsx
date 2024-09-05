import React,{useState,useEffect} from "react";


const BooksCatalog = () =>{
    
        
        const [books, setBooks] = useState([]);

        useEffect(() => {
          // Fetch books from the server
          fetch('http://localhost:5000/books')
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error) => console.error('Error fetching books:', error));
        }, []); // The empty dependency array ensures that this effect runs once after the initial render
      
        return (
          <div>
            <h2>Book Catalog</h2>
            <ul>
              {books.map((book) => (
                <li key={book.id}>
                  <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}, <strong>Synopsis:</strong> {book.synopsis}
                </li>
              ))}
            </ul>
          </div>
        );
      };
    
export default BooksCatalog