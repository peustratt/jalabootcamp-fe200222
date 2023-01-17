import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../services/userService";
import {
  selectStatus,
  clearStatus,
  updateUserThunk,
} from "../redux/reducers/userReducer";

const EditUserModal = ({ id, setEditModal }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    type: "",
  });
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  useEffect(() => {
    const init = async () => {
      try {
        const data = await getUser(id);
        setUser(data);
      } catch {
        alert("Could not load user");
      }
    };
    dispatch(clearStatus());
    init();
  }, [dispatch, id]);

  useEffect(() => {
    if (status === "succeeded") {
      setEditModal({ isOpen: false, id: null });
    }
  }, [status]);

  const submit = (e) => {
    e.preventDefault();
    dispatch(updateUserThunk({ ...user, _id: id }));
  };

  return (
    <div className="fixed flex justify-center items-center inset-0">
      <div
        className="w-screen h-screen absolute bg-[rgba(0,0,0,.6)] backdrop-blur-md z-0"
        onClick={() => setEditModal({ isOpen: false, id: null })}
      ></div>
      <form
        className="flex flex-col justify-center items-center gap-4 w-1/2 max-w-[400px] min-w-[200px] bg-[rgba(150,127,0,0.685)] z-10 p-4 rounded-md"
        onSubmit={submit}
      >
        <div>{status}</div>
        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="rounded-[4px] w-full indent-1 h-[1.7rem]"
          type={"text"}
          placeholder="name"
        />
        <input
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="rounded-[4px] w-full indent-1 h-[1.7rem]"
          type={"email"}
          placeholder="email"
        />
        <select
          value={user.type}
          onChange={(e) => setUser({ ...user, type: e.target.value })}
          className="rounded-[4px] w-full indent-1 h-[1.7rem]"
          type={"select"}
          placeholder="user type"
        >
          <option value="">--Select user type--</option>
          <option value="admin">Admin</option>
          <option value="seller">Seller</option>
          <option value="buyer">Buyer</option>
        </select>
        <div className="flex p-4 box-border w-full gap-2">
          <button className="btn mt-5 text-white font-semibold hover:text-black rounded-sm border-2 border-white hover:border-green-400 hover:text-green-400 w-full max-w-[200px]">
            Edit
          </button>
          <span
            onClick={() => setEditModal({ isOpen: false, id: null })}
            className="btn mt-5 flex justify-center items-center text-white font-semibold hover:text-black rounded-sm border-2 border-white hover:border-red-400 hover:text-red-400 w-full max-w-[200px]"
          >
            Cancel
          </span>
        </div>
      </form>
    </div>
  );
};

export default EditUserModal;
