import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function SingleBook(props) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  function selectBook() {
    if (props.selected) {
      props.onClick(null);
    } else {
      props.onClick(props.book.asin);
    }
  }
  return (
    <Col xs={11} sm={6} md={4} lg={3} xxl={2} className="mb-5 py-3">
      <Card
        className={
          props.selected
            ? "border border-3 border-danger single-book"
            : "single-book"
        }
        onClick={selectBook}>
        <Card.Img
          variant="top"
          className="custom-img-height"
          src={props.book.img}
        />
        <Card.Body>
          <Card.Title className="mb-3 title-trunked">
            {props.book.title}
          </Card.Title>
          <Card.Text className="mb-1">
            Categoria: <b>{props.book.category}</b>
          </Card.Text>
          <Card.Text className="mb-1">
            Asin: <b>{props.book.asin}</b>
          </Card.Text>
          <Card.Text className="mb-1">
            Prezzo: <b>{props.book.price}€</b>
          </Card.Text>
          <Link
            className="text-decoration-none text-light"
            to={`/${props.book.category}/${props.book.asin}`}
            onClick={handleClick}>
            <Button className="show-details-btn mt-3 ">
              <span className="me-1 fs-custom">Vedi dettagli</span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="37"
                  cy="37"
                  r="30"
                  stroke="white"
                  stroke-width="3"></circle>
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="white"></path>
              </svg>
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;

