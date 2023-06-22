import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const API = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk0MjkwM2MyZTk4NzAwMTQ2ODUxYjkiLCJpYXQiOjE2ODc0MzE0MjcsImV4cCI6MTY4ODY0MTAyN30.UyWWqHh4ZCMLR9e-ZYsDHaCI3GbFynxU3BG_k5ShgR8`;

function SingleComment({ item, index, setCommentsCount }) {
  const [comments, setComments] = useState([item]);

  async function deleteComment(e, commentId) {
    e.preventDefault();
    e.stopPropagation();

    try {
      await fetch(`${API}${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const updatedComments = comments.filter(
        (comment) => comment._id !== commentId
      );
      setComments(updatedComments);
    } catch (error) {
      console.error("Error:", error);
    }
    setCommentsCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="my-4 p-1" key={index}>
      <Row className="border-custom py-3">
        <Col xs={9}>
          <p className="mb-2 ">
            Autore: <b className="text-secondary">{item.author}</b>
          </p>
          <Col className="d-flex">
            <Col>
              Commento: <b className="text-secondary">"{item.comment}"</b>
            </Col>
            <Col>
              Valutazione: <b className="text-body">{item.rate}</b>
            </Col>
          </Col>
        </Col>
        <Col className="d-flex align-items-center" xs={3}>
          <Button
            onClick={(e) => deleteComment(e, item._id)}
            className="btn btn-danger">
            Elimina
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default SingleComment;
