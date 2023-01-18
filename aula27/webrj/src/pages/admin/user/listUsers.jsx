import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edit, Trash } from "tabler-icons-react";
import {
  loadUsersThunk,
  selectUsers,
  selectStatus,
  clearStatus,
  deleteUserThunk,
} from "../../../redux/reducers/userReducer";
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
    dispatch(clearStatus());
    setEditModal({ isOpen: true, id: id });
  };

  let statusColor = "text-gray-500";

  switch (status) {
    case "loading":
      statusColor = "text-yellow-500";
      break;
    case "succeeded":
      statusColor = "text-green-500";
      break;
    case "failed":
      statusColor = "text-red-500";
      break;
    default:
      statusColor = "text-gray-500";
  }

  // useEffect(() => {
  //     console.log('Users in Users page', users)
  // }, [users])

  return (
    <div className="ml-5 mt-5">
      <h1>Registered Users</h1>
      <div>
        <p className="font-bold">Status:</p>
        <p className={statusColor + " font-bold"}>{status}</p>
      </div>
      <div className="flex flex-column mt-5 overflow-y container-500 pr-4 gap-4">
        {users?.map((user, index) => {
          return (
            <div
              key={index}
              className="p-2 border-2 border-gray-500 rounded-md w-full flex justify-between items-center gap-2"
            >
              <div className="content flex flex-col gap-1">
                <div className="flex items-center font-semibold">
                  <p className="pr-1 text-xs text-gray-500">user n:</p>
                  <p>{index}</p>
                </div>
                <div className="font-semibold">
                <p className="pr-1 text-xs text-gray-500">Id:</p>
                  <p>{user._id}</p>
                </div>
                <div className="font-semibold">
                <p className="pr-1 text-xs text-gray-500">Name:</p>
                  <p>{user.name}</p>
                </div>
                <div className="font-semibold">
                <p className="pr-1 text-xs text-gray-500">Email:</p>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="flex flex-col justify-between h-full gap-4">
                <Edit
                  className="hover:cursor-pointer hover:opacity-80 hover:scale-105 duration-200 ease-in"
                  onClick={() => handleEditModal(user._id)}
                />
                <Trash
                  className="hover:cursor-pointer hover:opacity-80 hover:scale-105 duration-200 ease-in"
                  onClick={() => dispatch(deleteUserThunk(user._id))}
                />
              </div>
            </div>
          );
        })}
      </div>
      {editModal.isOpen && (
        <EditUserModal id={editModal.id} setEditModal={setEditModal} />
      )}
    </div>
  );
};

export default ListUsers;
