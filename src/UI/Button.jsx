import React from "react";

const Button = ({ onClick, onClickEdit }) => {
  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={onClickEdit}
          className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2 rounded-xl shadow-lg shadow-indigo-900/50 hover:-translate-y-0.5 transition-all duration-200"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          Edit
        </button>
        <button
          onClick={onClick}
          className="flex items-center gap-1.5 border border-red-400/30 text-red-400 hover:bg-red-500/10 hover:border-red-400/60 text-sm font-semibold px-5 py-2 rounded-xl hover:-translate-y-0.5 transition-all duration-200"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4h6v2" />
          </svg>
          Delete
        </button>
      </div>
    </>
  );
};

export default Button;
