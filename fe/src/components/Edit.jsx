import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [user, setUser] = useState([]);
  const nav = useNavigate();
  const { _id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await fetch(`http://localhost:8080/api/user/${_id}`);
    const data = await response.json();
    setUser(data);
  };

  const onSubmit = async (data) => {
    await fetch(`http://localhost:8080/api/user`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
    nav("/");
  };

  return (
    <div className="container m-5 ">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={user.username}
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <div className="text-danger">{errors.username.message}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            {...register("email", { required: "Email is required" })}
          />
        </Form.Group>
        {errors.email && <p className="text-danger">{errors.email.message}</p>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={user.password}
            {...register("password", { required: "Password is required" })}
          />
        </Form.Group>
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
