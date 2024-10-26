import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const MainLayout = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
    </>
  );
};

export default MainLayout;
