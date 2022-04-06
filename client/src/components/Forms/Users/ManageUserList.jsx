import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import apis from "../../api";
import TableBody from "./TableBody";
import UserAdd from "./UserAdd";
const ManageUserList = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  const [id, setId] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    await apis
      .getAllUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        toast.error("fetching data was failed!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = () => {};
  const handleDelete = () => {};

  const handleAddUser = () => {
      setShowAdd(true)
  };

  const handleSaveData = async (data) => {
    if (data._id === "") {
        let payLoad = {
            lastname: data.lastname,
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role,
        };
  
        await apis.signup(payLoad).then((res) => {
          if(!res.data.success){
            toast.error(res.data.message, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          else{
            setShowAdd(false);
            fetchData();
            setUser({});
            setId("");
          }
          
        }).catch(error => {
          toast.error(error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      } else {
        //here need to call api for update data
      }
  };
  const handleReturnClick = () => {
    setShowAdd(false);
    setUser({});
    setId("");
  };

  return (
    <React.Fragment>
        {showAdd && (
            <UserAdd
            saveData={handleSaveData}
            onCancel={handleReturnClick}
            _id= {id}
            data={user}
            />
        )}
      {!showAdd && (
        <Button
          type="button"
          className="btn btn-primary"
          onClick={handleAddUser}
        >
          Create New User <FontAwesomeIcon icon={faAdd} />
        </Button>
      )}
      {!showAdd && (
        <div className="mt-2">
          <TableBody
            data={users}
            onEditClick={handleEdit}
            onDeleteClick={handleDelete}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default ManageUserList;
