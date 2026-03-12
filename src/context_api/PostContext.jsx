import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { adData, deletePost, getPost, updatePost } from "../api/PostApi";
import { usePagination } from "../Hooks/usePagination";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [editData, setEditUpdateData] = useState({});
  const {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    totalPage,
    currentPage,
    setCurrentPage,
  } = usePagination();

  //   Delete The Data->DELETE
  const handleDelete = useCallback(
    async (id) => {
      setLoading(true);
      setError(null);
      try {
        const res = await deletePost(id);
        console.log(res);
        if (res.status === 200 || res.status === 204) {
          const newUpdatePosts = data.filter((currElem) => currElem.id !== id);
          setData(newUpdatePosts);
        }
      } catch (error) {
        console.log("error occur during delete:", error);
        setError("Data not Deleted!");
      } finally {
        setLoading(false);
      }
    },
    [data],
  );

  //   create the post->POST->ADD NEW POST IN IT
  const createPost = useCallback(
    async (newPost) => {
      setLoading(true);
      setError(null);
      try {
        const res = await adData(newPost);
        if (res.status === 201) {
          setData([...data, res.data]);
        }
      } catch (error) {
        console.log("error occur during the post add");
        setError("Data not added!");
      } finally {
        setLoading(false);
      }
    },
    [data],
  );

  //   handleEdit DATA
  const handleEdit = useCallback((curElem) => {
    return setEditUpdateData(curElem);
  }, []);
  //  Update The Data->PUT
  const handleUpdateData = useCallback(
    async (id, updateData) => {
      setLoading(true);
      setError(null);
      try {
        const res = await updatePost(id, updateData);
        if (res.status === 200) {
          setData(
            data.map((curElem) => {
              return curElem.id === id ? res.data : curElem;
            }),
          );
          setEditUpdateData({});
        }
      } catch (error) {
        console.log("error occur during update:", error);
        setError("Data not updated due to some reasons!");
      } finally {
        setLoading(false);
      }
    },
    [data],
  );

  const contextValue = useMemo(
    () => ({
      data,
      setData,
      handleDelete,
      createPost,
      editData,
      setEditUpdateData,
      handleEdit,
      handleUpdateData,
      loading,
      error,
      currentPage,
      totalPage,
      setCurrentPage,
    }),
    [
      data,
      setData,
      handleDelete,
      createPost,
      editData,
      setEditUpdateData,
      handleEdit,
      handleUpdateData,
      loading,
      error,
      currentPage,
      totalPage,
      setCurrentPage,
    ],
  );
  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
};
export const usePostContext = () => useContext(PostContext);
