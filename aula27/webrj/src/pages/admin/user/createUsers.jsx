import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserThunk,
  selectStatus,
  clearStatus,
} from "../../../redux/reducers/userReducer";

const CreateUsers = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const name = useRef();
  const email = useRef();
  const type = useRef();

  useEffect(() => {
    dispatch(clearStatus());
  }, [dispatch]);

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      createUserThunk({
        name: name.current.value,
        email: email.current.value,
        type: type.current.value,
        isVerified: false,
      })
    );
  };

  return (
    <div className="ml-5 mt-5">
      <h1>Add new Person</h1>
      <h2>{status}</h2>
      <article>
        Here you can create an user and set it's type. The user will still need
        to validate it's access through e-mail confirmation
      </article>
      <p>{}</p>
      <div className="mt-5">
        <form className="flex flex-column" onSubmit={submit}>
          <input
            ref={name}
            className="text-field"
            type={"text"}
            placeholder="name"
          />
          <input
            ref={email}
            className="text-field"
            type={"email"}
            placeholder="email"
          />
          <select
            ref={type}
            className="text-field"
            type={"select"}
            placeholder="user type"
          >
            <option value="">--Select user type--</option>
            <option value="admin">Admin</option>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
          <button className="btn mt-5">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUsers;
