import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Description = () => {
  const navigate = useNavigate();
  const params = useParams();

  const description = useSelector((state) => state.description);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>description</th>
          <th>back</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{params.id}</td>
          <td>{description.body}</td>
          <td>
            <Button
              variant="secondary"
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Description;
