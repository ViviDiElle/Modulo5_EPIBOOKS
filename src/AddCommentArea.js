import AddComment from "./AddComment";

function CommentArea({id, setCommentsCount}) {
 
  return (
    <>
    <AddComment id={id} setCommentsCount={setCommentsCount}/>
    </>
  );
}

export default CommentArea;

