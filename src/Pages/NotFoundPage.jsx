import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
const NotFoundPage = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <section
        className="text-center flex flex-col justify-center items-center bg-lm-bg h-96 dark:bg-black text-lm-text dark:text-lm-elements-dm-text"
        style={{ minHeight: "100vh" }}
      >
        <FaExclamationTriangle className="text-yellow-400 fa-4x mb-4 " />
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <Link
          to="/"
          className="text-black bg-lm-elements-dm-text rounded-md px-3 py-2 mt-4 dark:bg-dm-elements drop-shadow-md"
        >
          Go Back
        </Link>
      </section>
    </>
  );
};

export default NotFoundPage;
