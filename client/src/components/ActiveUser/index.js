import React, { useState, useEffect } from "react";
import UserForm from "../../miniComponents/UserForm";
import api from "../api";
import { Navbar, FormControl, Form, Container, Button } from "react-bootstrap";
const CreateUser = () => {
  const [displayUserForm, setDisplayUserForm] = useState(undefined);
  const [users, setUsers] = useState("");
  const [user, setUser] = useState(undefined);
  const fetchData = async () => {
    await api
      .getAllUsers()
      .then((result) => {
        setUsers(result.data.data);
      })
      .catch((error) => {
        //   console.log("error in fetch Data:", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("Este", user);
  return (
    <>
      <Navbar expand="xs" className="nav-color w-100 " variant="dark">
        <Form.Group
          className={"ms-3 d-flex justify-content-end position-relative  me-3"}
        >
          <FormControl
            placeholder={"Search"}
            className="rounded-pill "
            aria-describedby="basic-addon1"
          />
          <i
            className={`bi bi-search fa-search position-absolute  top-50 translate-middle s-2`}
          ></i>
        </Form.Group>
        <button className="me-3 btn-lbl">logout</button>
      </Navbar>
      <div className="title-bar w-100 px-3">
        <div className="d-flex justify-content-between w-100">
          <span className="text-sub-navbar">
            Maintenance supervisor dashboard
          </span>
          <div>
            <span className="me-3 text-sub-navbar">Manage User</span>
            <span className="text-sub-navbar">Add Asset</span>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="mb-2 text-color">Active User List</h1>

        <table>
          <tr>
            <th className="py-2">#</th>
            <th>USER ID</th>
            <th>FULL NAME</th>
            <th>POSITION</th>
            <th>Action</th>
          </tr>

          {users &&
            users.map((item, index) => (
              <tr key={index}>
                <td>{index} </td>
                <td>{item._id}</td>
                <td>{item.name + " " + item.lastname}</td>
                <td>{item.role}</td>
                <td>
                  <Button
                    className="py-0"
                    onClick={() => {
                      setDisplayUserForm(true);

                      setUser(item);
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
        </table>
        {displayUserForm && user && (
          <div className="div-border-line p-3 w-100">
            <Form>
              <UserForm data={user} />
              <Form.Group
                className="d-flex flex-column"
                controlId="formBasicPassword"
              >
                <div className="align-self-end">
                  <Button className="btn btn-danger px-3 py-1">Delete</Button>
                  <Button
                    className="btn btn-warning px-3 py-1"
                    onClick={() => {
                      setDisplayUserForm(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="btn btn-success px-3 py-1">
                    Save
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateUser;
