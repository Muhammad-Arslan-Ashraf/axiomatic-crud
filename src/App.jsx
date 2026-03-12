import "./App.css";
import Posts from "./components/Posts";
import Form from "./components/Form";
import { PostProvider } from "./context_api/PostContext";
import Pagination from "./components/Pagination";

function App() {
  return (
    <>
      <PostProvider>
        {/* Form */}
        <div className="flex justify-center items-center mb-12 mt-12">
          <Form />
        </div>
        <div className="min-h-[500px]">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 
                        md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <Posts />
          </div>
        </div>
        <div className="m-5">
          <Pagination />
        </div>
      </PostProvider>
    </>
  );
}
export default App;
