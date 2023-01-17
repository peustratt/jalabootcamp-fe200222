import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../services/userService";

const EditUserModal = ({ id, setEditModal }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    type: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch user data
    const init = async () => {
      try {
        const data = await getUser(id);
        console.log(data);
        setUser(data);
      } catch {
        alert("Could not load user");
      }
    };
    init();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setEditModal({ isOpen: false, id: null });
    // dispatch(
    //   createUserThunk({
    //     name: name.current.value,
    //     email: email.current.value,
    //     type: type.current.value,
    //     isVerified: false,
    //   })
    // );
  };

  return (
    <div className="fixed flex justify-center items-center inset-0">
      <div
        className="w-screen h-screen absolute bg-[rgba(0,0,0,.6)] backdrop-blur-md z-0"
        onClick={() => setEditModal({ isOpen: false, id: null })}
      ></div>
      <form
        className="flex flex-col w-fit bg-[rgba(150,127,0,0.685)] z-10 p-4 rounded-md"
        onSubmit={submit}
      >
        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="text-field"
          type={"text"}
          placeholder="name"
        />
        <input
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="text-field"
          type={"email"}
          placeholder="email"
        />
        <select
          value={user.type}
          onChange={(e) => setUser({ ...user, type: e.target.value })}
          className="text-field"
          type={"select"}
          placeholder="user type"
        >
          <option value="">--Select user type--</option>
          <option value="admin">Admin</option>
          <option value="seller">Seller</option>
          <option value="buyer">Buyer</option>
        </select>
        <button className="btn mt-5">Edit</button>
      </form>
    </div>
  );
};

export default EditUserModal;
