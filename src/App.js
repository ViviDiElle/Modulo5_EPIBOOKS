import "./App.css";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import BookFilter from "./BookFilter";

import Horror from "./categorie/horror.json";
import Scifi from "./categorie/scifi.json";
import History from "./categorie/history.json";
import Romance from "./categorie/romance.json";
import Fantasy from "./categorie/fantasy.json";
import AllBooks from "./categorie/allbooks.json";

import ErrorPage from "./pages/ErrorPage";
import BookDetails from "./pages/BookDetails";
import Welcome from "./Welcome";

function App() {
  const [query, setQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(-1);
  const [selectedCategory, setSelectedCategory] = useState(AllBooks);

  // Gestisci cambiamento categoria
  function handleCategoryChange(selectedCategory) {
    setSelectedCategory(selectedCategory);
  }
  console.log(selectedCategory);

  function handleInputChange(value) {
    setQuery(value);
    console.log(value);
  }

  function handleBookSelect(asin) {
    setSelectedBook(asin);
  }

  // Creazione del nuovo array di libri filtrati in base al testo di ricerca

  let filteredBooks;

  if (selectedCategory === "horror") {
    filteredBooks = Horror.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  } else if (selectedCategory === "scifi") {
    filteredBooks = Scifi.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  } else if (selectedCategory === "history") {
    filteredBooks = History.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  } else if (selectedCategory === "romance") {
    filteredBooks = Romance.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  } else if (selectedCategory === "fantasy") {
    filteredBooks = Fantasy.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  } else {
    filteredBooks = AllBooks.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <MyNav
          onQueryChange={handleInputChange}
          onCategoryChange={handleCategoryChange}
        />

        <Routes>
          <Route
            index
            element={
              <Col xs={12}>
                <Welcome />
                <BookFilter
                  books={filteredBooks}
                  onBookSelect={handleBookSelect}
                />
              </Col>
            }
          />

          <Route path="*" element={<ErrorPage />} />
          <Route path=":category/:id" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
      <hr />
      <MyFooter />
    </div>
  );
}

export default App;
