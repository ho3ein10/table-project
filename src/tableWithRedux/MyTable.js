import React from "react";
import { Table } from "react-bootstrap";
import classes from "./mytable.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteOneRow, descriptionAction } from "./action";

const MyTable = () => {
  const dispatch = useDispatch();
  const { tableData } = useSelector((state) => state.getTable);
  const activePage = useSelector((state) => state.activePage);

  const sliceData = tableData.slice((activePage - 1) * 10, activePage * 10);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Delete</th>
          <th>Show</th>
        </tr>
      </thead>
      <tbody>
        {sliceData.map((item, index) => (
          <tr key={index}>
            <td>{(activePage - 1) * 10 + index + 1}</td>
            <td>{item.title}</td>
            <td className={classes.icon}>
              <i
                onClick={() => dispatch(deleteOneRow(index))}
                className="far fa-trash-alt"
              ></i>
            </td>
            <td className={classes.icon}>
              <Link
                to={`${(activePage - 1) * 10 + index + 1}`}
                style={{ color: "white" }}
              >
                <i
                  className="far fa-eye"
                  onClick={() => dispatch(descriptionAction(item))}
                ></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;
