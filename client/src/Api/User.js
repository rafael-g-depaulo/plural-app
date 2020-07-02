import api from "Api";

export const getCurrentUser = () =>
  api.get("/api/user/current", { withCredentials: true });
// .then(({ data }) => data.current_user)

export const loginUser = ({ email, password }) =>
  api.post("/api/auth/login", { email, password });
// .then(({ data }) => data)

export const createUser = (data) => api.post("/api/user/register", data);

export const registerUser = ({
  email,
  password,
  city,
  phoneNumber,
  name,
  birthdate,
}) =>
  api.post("/api/user/register", {
    email,
    password,
    city,
    phoneNumber,
    name,
    birthdate,
  });
// .then(({ data }) => data)
