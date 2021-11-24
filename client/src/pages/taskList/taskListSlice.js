import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingEdit: false,
  statusEdit: "",
  messageEdit: "",
};

const editTaskSlice = createSlice({
  name: "editTask",
  initialState,
  reducers: {
    editTaskPending: (state) => {
      state.isLoadingEdit = true;
    },
    editTaskSuccess: (state, { payload }) => {
      state.isLoadingEdit = false;
      state.statusEdit = "success";
      state.messageEdit = payload;
    },
    editTaskError: (state, { payload }) => {
      state.isLoadingEdit = false;
      state.statusEdit = "error";
      state.messageEdit = payload;
    },
    editResetSuccessMSg: (state) => {
			state.messageEdit = '';
		},
  },
});

const { reducer, actions } = editTaskSlice;

export const {
  editTaskPending,
  editTaskSuccess,
  editTaskError,
  editResetSuccessMSg
} = actions;

export default reducer;