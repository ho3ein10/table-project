import React, { useEffect } from "react";
import MyTable from "./MyTable";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "react-bootstrap";
import Loader from "./Loader";
import { activePageAction } from "./action";

const AppTable = () => {
  const dispatch = useDispatch();
  const { tableData, error, loading } = useSelector((state) => state.getTable);
  const activePage = useSelector((state) => state.activePage);

  useEffect(() => {
    if (
      tableData.length % 10 === 0 &&
      tableData.length < 98 &&
      tableData.length !== 0
    ) {
      dispatch(activePageAction(tableData.length / 10));
    }
  }, [tableData,dispatch]);

  let items = [];
  for (let number = 1; number <= Math.ceil(tableData.length / 10); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => dispatch(activePageAction(number))}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      {!tableData.length ? (
        <>
          <Loader />
          {error && <p style={{ textAlign: "center" }}>{error.message}</p>}
        </>
      ) : loading ? (
        <Loader />
      ) : (
        <MyTable />
      )}

      <Pagination style={{ justifyContent: "center" }}>{items}</Pagination>
    </>
  );
};

export default AppTable;
