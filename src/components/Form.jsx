import React, { useEffect, useState } from "react";
import { usePostContext } from "../context_api/PostContext";

const Form = () => {
  const { createPost, editData, handleUpdateData } = usePostContext();
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => ({ ...prev, [name]: value }));
  };

  // submit data->handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData && editData.id) {
      handleUpdateData(editData.id, addData);
    } else {
      createPost(addData);
      setAddData({
        title: "",
        body: "",
      });
    }
  };
  useEffect(() => {
    editData &&
      setAddData({
        title: editData.title || "",
        body: editData.body || "",
      });
  }, [editData]);
  return (
    <>
      <div className="bg-slate-800 p-6 rounded-lg shadow-xl max-w-3xl w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            placeholder="Add Title"
            className="flex-1 px-3 py-2 rounded bg-gray-400 text-slate-900 placeholder-slate-700 shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            id="title"
            name="title"
            value={addData.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            placeholder="Add Post"
            className="flex-1 px-3 py-2 rounded bg-gray-400 text-slate-900 placeholder-slate-700 shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            id="body"
            name="body"
            value={addData.body}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded shadow-md transition"
          >
            ADD
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
