import Card from "../UI/Card";
import Error from "../UI/Error";
import Loader from "../UI/Loader";
import { usePostContext } from "../context_api/PostContext";
import Pagination from "./Pagination";
const Posts = () => {
  const { data, handleDelete, handleEdit, loading, error } = usePostContext();
  //   loading state
  if (loading) {
    return (
      <>
        <div className="fixed inset-0 flex justify-center items-center min-h-screen">
          <Loader />
        </div>
      </>
    );
  }
  //   error state
  if (error) {
    return (
      <>
        <div className="fixed inset-0 flex justify-center items-center min-h-screen">
          <Error error={error} />
        </div>
      </>
    );
  }
  return (
    <>
      {data.map((curElem) => {
        const { id, body, title } = curElem;
        // console.log(curElem);
        return (
          <Card
            key={id}
            id={id}
            title={title}
            body={body}
            onDelete={handleDelete}
            onEdit={() => handleEdit(curElem)}
          />
        );
      })}
      {/* pagination */}
      {/* <div className="flex">
        {" "}
        <Pagination />
      </div> */}
    </>
  );
};

export default Posts;
