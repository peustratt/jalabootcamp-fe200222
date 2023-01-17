const url = "http://localhost:8080/api/users";

const createUser = async (body) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};

const getUsers = async () => {
  const response = await fetch(url);
  return await response.json();
};

const getUser = async (id) => {
  const response = await fetch(`${url}/${id}`);
  return await response.json();
};

const updateUser = async (id, body) => {
  const response = await fetch(`${url}/${id}`, {
    method: "put",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};

const deleteUser = async (id) => {
  const response = await fetch(`${url}/${id}`, {
    method: "delete",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.ok;
};

export { getUsers, createUser, deleteUser, getUser, updateUser };
