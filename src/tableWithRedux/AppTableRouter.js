import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppTable from "./AppTable";
import Description from "./Description";
import { useDispatch } from "react-redux";
import { getTableData } from "./action";

const AppTableRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTableData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppTable />} path="/" />
        <Route element={<Description />} path="/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppTableRouter;
