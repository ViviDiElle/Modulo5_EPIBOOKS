import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const API = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk0MjkwM2MyZTk4NzAwMTQ2ODUxYjkiLCJpYXQiOjE2ODc0MzE0MjcsImV4cCI6MTY4ODY0MTAyN30.UyWWqHh4ZCMLR9e-ZYsDHaCI3GbFynxU3BG_k5ShgR8`;

function AddComment({ id, setCommentsCount }) {
  const [comment, setComment] = useState([]);
  const [show, setShow] = useState(false);
  const [review, setReview] = React.useState("");
  const [rating, setRating] = React.useState("");

  // CHIUSURA MODALE
  function handleClose(e) {
    setShow(false);
    e.preventDefault();
    e.stopPropagation();
  }

  //APERTURA DEL MODALE
  function handleShow(e) {
    setShow(true);
    e.preventDefault();
    e.stopPropagation();
  }

  // GESTISCI INVIO FORM
  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    let newComment = {
      comment: review,
      rate: rating,
      elementId: id,
    };

    // SE IL VALORE E' VALIDO FAI CHIAMATA ALTRIMENTI MOSTRA ALERT E SVUOTA "RATING"
    if (rating >= 1 && rating <= 5) {
      try {
        const response = await fetch(API, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        });
        const data = await response.json();
        setComment([...comment, data]);
        handleClose();
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      alert("Il valore del rating deve essere compreso tra 1 e 5.");
      setRating("");
    }

    setRating("");
    setCommentsCount((prevCount) => prevCount + 1);
  }

  function handleReviewChange(e) {
    setReview(e.target.value);
  }

  function handleRatingChange(e) {
    setRating(e.target.value);
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Aggiungi commento
      </Button>

      {/* MODALE */}
      <Modal show={show} onClick={handleClose}>
        <Modal.Header onClick={(e) => e.stopPropagation()}>
          <Modal.Title>Inserisci recensione</Modal.Title>
        </Modal.Header>

        <Modal.Body
          className="d-flex modal-class"
          onClick={(e) => e.stopPropagation()}>


          {/* FORM */}
          <Form className="text-center" onSubmit={handleSubmit}>

            <Form.Group className="mb-3 text-center">
              <Form.Label>Che ne pensi di questo libro?</Form.Label>
              <Form.Control
              className="input-text"
                type="textarea"
                placeholder="Scrivi recensione"
                onChange={handleReviewChange}
                onClick={(e) => e.stopPropagation()}
              />
            </Form.Group>

            <Form.Group className="mb-3 input-number">
              <Form.Label>Valutazione (da 1 a 5)</Form.Label>
              <Form.Control
              className="input-small"
                type="number"
                placeholder=""
                min={1}
                max={5}
                value={rating}
                onChange={handleRatingChange}
                onClick={(e) => e.stopPropagation()}
              />
            </Form.Group>
            <Button className="mt-2" variant="primary" type="submit" onClick={handleSubmit}>
              Invia recensione
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer onClick={(e) => e.stopPropagation()}>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddComment;
