import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Add() {
  const nav = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch(`http://localhost:8080/api/user`, {
      method: "POST",
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
            placeholder="Enter username"
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
            placeholder="Enter email"
            {...register("email", { required: "Email is required" })}
          />
        </Form.Group>
        {errors.email && <p className="text-danger">{errors.email.message}</p>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
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

export default Add;
