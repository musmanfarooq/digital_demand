import axios from "axios";

export const loginApi = (
  username: string,
  password: string,
  setToastMessage: (value: string) => void,
  router: any
) => {
  return axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}login`, {
      username,
      password,
    })
    .then((response) => {
      setToastMessage(response.data.message);
      localStorage.setItem("token", response.data.token);
      router.push("/dashboard");
      setTimeout(() => {
        localStorage.removeItem("token");
        router.push("/");
      }, 1800000);
      return response.data;
    })
    .catch((error) => {
      setToastMessage(error.response.data.message);
    });
};
