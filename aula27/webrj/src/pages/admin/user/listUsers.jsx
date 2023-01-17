import React, { useState } from "react";
import {
  loadUsersThunk,
  selectUsers,
  selectStatus,
  clearStatus,
  deleteUserThunk,
} from "../../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import EditUserModal from "../../../components/editUserModal";

const ListUsers = () => {
  const [editModal, setEditModal] = useState({ isOpen: false, id: null });
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const status = useSelector(selectStatus);
  // console.log(status)

  useEffect(() => {
    dispatch(clearStatus());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  const handleEditModal = (id) => {
    setEditModal({ isOpen: true, id: id });
  };

  // useEffect(() => {
  //     console.log('Users in Users page', users)
  // }, [users])

  return (
    <div className="ml-5 mt-5">
      <h1>Registered Users</h1>
      <p>{status}</p>
      <div className="flex flex-column mt-5 overflow-y container-500">
        {users?.map((user, index) => {
          return (
            <div key={index}>
              <p>{index}</p>
              <p>{user._id}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <button onClick={() => dispatch(deleteUserThunk(user._id))}>
                delete
              </button>
              <button onClick={() => handleEditModal(user._id)}>edit</button>
            </div>
          );
        })}
      </div>
      {editModal.isOpen && <EditUserModal id={editModal.id} setEditModal={setEditModal} />}
    </div>
  );
};

export default ListUsers;
