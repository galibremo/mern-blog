import axios from "axios";
import {
  LoadUserRequest,
  LoadUserSuccess,
  LoadUserFail,
  updateUserInfoRequest,
  updateUserInfoSuccess,
  updateUserInfoFail,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFail,
} from "../reducers/userSlice";
import { toast } from "react-toastify";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(LoadUserRequest());
    const { data } = await axios.get(`/api/auth/getuser`, {
      withCredentials: true,
    });
    dispatch(LoadUserSuccess(data.user));
  } catch (error) {
    dispatch(LoadUserFail(error.response.data.message));
  }
};

export const updateUserInfo = (formData, id) => async (dispatch) => {
  try {
    dispatch(updateUserInfoRequest());
    const { data } = await axios.put(
      `/api/user/update-user-info/${id}`,
      formData,
      {
        withCredentials: true,
      }
    );
    console.log(data);
    dispatch(updateUserInfoSuccess(data));
    toast.success("User information updated successfully!");
  } catch (error) {
    dispatch(updateUserInfoFail(error.response.data.message));
    toast.error(error.response.data.message);
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch(deleteUserRequest());
    const { data } = await axios.delete(`/api/user/delete-user/${id}`, {
      withCredentials: true,
    });
    dispatch(deleteUserSuccess(data));
    toast.success(data);
  } catch (error) {
    dispatch(deleteUserFail(error.response.data.message));
    toast.error(error.response.data.message);
  }
};
