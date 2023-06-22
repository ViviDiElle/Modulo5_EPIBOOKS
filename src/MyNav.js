import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

import { useState } from "react";
import { Link } from "react-router-dom";

//SEARCH BAR
function SearchBar(props) {
  const [searchText, setSearchText] = useState("");

  // Funzione per gestire il cambiamento dell'input di ricerca
  function handleInputChange(event) {
    const inputValue = event.target.value;
    setSearchText(inputValue);
    props.onQueryChange(inputValue);
    console.log(inputValue);
  }

  return (
    <input
      type="text"
      className="text-center form-control "
      placeholder="*** Cerca i libri ***"
      value={searchText}
      onChange={handleInputChange}
    />
  );
}

function MyNav(props) {
  function handleCategoryChange(event) {
    const selectedCategory = event.target.value;
    props.onCategoryChange(selectedCategory);
  }

  //funzione che passa lo stato al componente superiore
  function handleQueryChange(value) {
    props.onQueryChange(value);
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Nav.Link href="/">
          <i className="bi bi-wind fs-2 px-3 text-light"></i>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/browse">
              Browse
            </Link>

            <span className="ms-4 nav-link">Categories:</span>
            <Form.Select
              size="sm"
              className="border-secondary py-0 mx-2 bg-dark text-light"
              onChange={handleCategoryChange}>
              <option value="tutte">ALL</option>
              <option value="horror">Horror</option>
              <option value="scifi">Sci-Fi</option>
              <option value="history">History</option>
              <option value="romance">Romance</option>
              <option value="fantasy">Fantasy</option>
            </Form.Select>
          </Nav>
          <SearchBar onQueryChange={handleQueryChange} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
