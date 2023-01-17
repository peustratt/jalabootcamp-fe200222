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

export { getUsers, createUser };
