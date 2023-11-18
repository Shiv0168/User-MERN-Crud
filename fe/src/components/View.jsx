import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";

const View = () => {
  const [user, setUser] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await fetch("http://localhost:8080/api/user");
    const data = await response.json();
    return setUser(data);
  };

  const handleDelete = async (_id) => {
    await fetch(`http://localhost:8080/api/user/${_id}`, {
      method: "DELETE",
    });
    nav("/");
  };

  return (
    <>
      <Table striped bordered hover className="container mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        {user &&
          user.map((data) => (
            <tbody key={data._id}>
              <tr>
                <td>{data._id}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>
                  <NavLink to={`/edit/${data._id}`}>
                    <Button variant="primary" className="mx-3">
                      Edit
                    </Button>
                  </NavLink>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(data._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
    </>
  );
};

export default View;
