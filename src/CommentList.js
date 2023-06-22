import { Row, Container } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentList({data, setCommentsCount}) {
  return (
    <Container>
      <Row className="pb-3">
        {data.map((item, index) => (
          <SingleComment item={item} key={index} setCommentsCount={setCommentsCount} />
        ))}
      </Row>
    </Container>
  );
}

export default CommentList;
