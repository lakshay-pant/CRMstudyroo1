import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingEdit: false,
  statusEdit: "",
  messageEdit: "",
};

const editUserSlice = createSlice({
  name: "editUser",
  initialState,
  reducers: {
    editUserPending: (state) => {
      state.isLoadingEdit = true;
    },
    editUserSuccess: (state, { payload }) => {
      state.isLoadingEdit = false;
      state.statusEdit = "success";
      state.messageEdit = payload;
    },
    editUserError: (state, { payload }) => {
      state.isLoadingEdit = false;
      state.statusEdit = "error";
      state.messageEdit = payload;
    },
    editResetSuccessMSg: (state) => {
			state.messageEdit = '';
		},
  },
});

const { reducer, actions } = editUserSlice;

export const {
  editUserPending,
  editUserSuccess,
  editUserError,
  editResetSuccessMSg
} = actions;

export default reducer;