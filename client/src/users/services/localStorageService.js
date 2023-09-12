import JwtDecode from "jwt-decode";
const TOKEN = "token";
const ERROR_NUMBER = "errorNunber";
const twentyFourHours = 24 * 60 * 60 * 1000;

export const setTokenInLocalStorage = (encryptedToken) =>
  localStorage.setItem(TOKEN, encryptedToken);

export const getUser = () => {
  try {
    const user = localStorage.getItem(TOKEN); //localStorage: {token: kjh34kl5h3lk45h345.k3jh45k3j4h5.kjh345kuj3h45}
    return JwtDecode(user); // user: kjh34kl5h3lk45h345.k3jh45k3j4h5.kjh345kuj3h45
  } catch (error) {
    return null;
  }
};

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => localStorage.getItem(TOKEN);

export const setErrorInLocalStorage = () => {
  let error = JSON.parse(localStorage.getItem(ERROR_NUMBER));
  if (error) {
    error = [error[0] + 1, Date.now()];
    localStorage.setItem(ERROR_NUMBER, JSON.stringify(error));
    return;
  }
  error = [1, Date.now()];
  localStorage.setItem(ERROR_NUMBER, JSON.stringify(error));
};

export const getError = () => {
  const error = JSON.parse(localStorage.getItem(ERROR_NUMBER));
  if (!error) return "no error";
  if (error[0] <= 3) return "no error";
  if (Date.now() - error[1] >= twentyFourHours) {
    removeErrorToken();
    return "no error";
  }
  return;
};
export const removeErrorToken = () => localStorage.removeItem("errorNunber");
