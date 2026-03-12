import React from "react";

const Error = ({ error }) => {
  return (
    <>
      <div className="flex justify-center items-center h-64">
        <p className="text-red-400 text-lg">{error}</p>
      </div>
    </>
  );
};

export default Error;
