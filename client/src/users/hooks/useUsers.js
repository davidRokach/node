import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import useAxios from "../../cards/hooks/useAxios";
import {
  DeleteUser,
  EditUser,
  GetUsers,
  changeBusinessStatus,
  getUserApi,
  login,
  singup,
} from "../services/usersApiService";
import {
  getError,
  getUser,
  removeErrorToken,
  removeToken,
  setErrorInLocalStorage,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnackbar } from "../../provider/SnackbarProvider";

const useUsers = () => {
  const [users, setUsers] = useState(null);

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { user, setUser, setToken } = useUser();

  useAxios();

  const snack = useSnackbar();

  // handle to set values in all the states for users
  const requestStatus = useCallback(
    (loading, errorMessage, users, user = null) => {
      setLoading(loading);
      setError(errorMessage);
      setUsers(users);
      setUser(user);
    },
    [setUser]
  );

  // handle to send all user details to the server by submit in login
  const handleLogin = useCallback(
    async (user) => {
      try {
        const checkError = getError();
        if (!checkError)
          return snack(
            "You have tried to enter an incorrect username or password more than three times, please try again in 24 hours ",
            "error"
          );
        const token = await login(user); // token from the server [token: kjh34kl5h3lk45h345.k3jh45k3j4h5.kjh345kuj3h45]
        removeErrorToken();
        setTokenInLocalStorage(token); // set localSrorage with the token
        setToken(token); // updating the state with the new token
        const userFromLocalStorage = getUser(); // decoding the token with JwtDecode and get user
        requestStatus(false, null, null, userFromLocalStorage);
        navigate(ROUTES.CARDS);
      } catch (error) {
        if (
          (error.response.data =
            "Authentication Error: Invalid email or password")
        )
          setErrorInLocalStorage();
        requestStatus(false, error, null);
      }
    },
    [navigate, requestStatus]
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSingup = useCallback(
    async (userFormClient) => {
      try {
        const normalizedUser = normalizeUser(userFormClient);
        await singup(normalizedUser);
        await handleLogin({
          email: userFormClient.email,
          password: userFormClient.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );

  const handleEditUser = useCallback(
    async (id, userFormClient) => {
      try {
        await EditUser(id, userFormClient);
        snack("you update the user successfully", "success");
        navigate(ROUTES.CARDS);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, navigate]
  );

  const handleGetUser = useCallback(
    async (id) => {
      try {
        const userData = await getUserApi(id);
        requestStatus(false, null, null, user);
        return userData;
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus]
  );

  const handleGetUsers = useCallback(async () => {
    try {
      const users = await GetUsers();
      requestStatus(false, null, users, user);
      return users;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [requestStatus]);

  const handleDeleteUser = useCallback(
    async (id) => {
      try {
        await DeleteUser(id);
        handleGetUsers();
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus]
  );

  const handleChangeBusinessStatus = useCallback(
    async (id) => {
      try {
        const user = await changeBusinessStatus(id);
        snack("you change Business Status successfully", "success");
        handleGetUsers();
        return user;
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus]
  );

  const value = useMemo(
    () => ({
      users,
      isLoading,
      error,
      user,
    }),
    [users, isLoading, error, user]
  );

  return {
    handleSingup,
    handleLogin,
    handleLogout,
    handleEditUser,
    handleGetUser,
    handleGetUsers,
    handleDeleteUser,
    handleChangeBusinessStatus,
    value,
  };
};

export default useUsers;
