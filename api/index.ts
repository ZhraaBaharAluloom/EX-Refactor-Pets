import axois from "axios";

export const instance = axois.create({
  baseURL: "https://pets-react-query-backend.eapi.joincoded.com",
});
