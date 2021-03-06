import api from "Api";

export const getCurrentUser = () =>
  api.get("/api/user/current", { withCredentials: true });
// .then(({ data }) => data.current_user)

export const getUser = (user_id) =>
  api.get(`/api/user/id/${user_id}`, { withCredentials: true });

export const changePassword = ({ password }) =>
  api.put(`/api/user/password-change`, { password }, { withCredentials: true });

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

export const updateUserIsLgbtq = ({ isLgbtq }) =>
  api.put("/api/user/update/is-lgbtq", { isLgbtq });

export const updateUser = (value) => api.put("/api/user/update", value);

export const passwordReset = (email) => {
  return api.post("/api/user/password-reset", { email }, { withCredentials: false });
};

export const passwordResetCallback = (password, token) => {
  return api.post(
    `/api/user/password-reset/callback`,
    { password },
    {
      headers: { Authorization: `${token}` },
      withCredentials: true,
    }
  );
};

export const resendConfirmation = () => api
  .post(`/api/user/resend-confirmation-email`, { withCredentials: true })
