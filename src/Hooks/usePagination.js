import { useCallback, useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
export const usePagination = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const getPostData = useCallback(async (page) => {
    setLoading(true);
    setError(null);
    try {
      const res = await getPost(page);
      const totalPosts = res.headers["x-total-count"]; ///100 posts
      //   now set the total posts in setTotalPage
      setTotalPage(Math.ceil(totalPosts / 10));
      // now set the data
      setData(res.data);
    } catch (error) {
      console.log("error occur during the fetch data:", error);
      setError("Data not loaded!");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getPostData(currentPage);
  }, [getPostData, currentPage]);
  return {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    totalPage,
    currentPage,
    setCurrentPage,
  };
};
