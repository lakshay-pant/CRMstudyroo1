import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingDelete: false,
  statusDelete: "",
  messageDelete: "",
};

const deleteStudentSlice = createSlice({
  name: "deleteStudent",
  initialState,
  reducers: {
    deleteStudentPending: (state) => {
      state.isLoadingDelete = true;
    },
    deleteStudentSuccess: (state, { payload }) => {
      state.isLoadingDelete = false;
      state.statusDelete = "success";
      state.messageDelete = payload;
    },
    deleteStudentError: (state, { payload }) => {
      state.isLoadingDelete = false;
      state.statusDelete = "error";
      state.messageDelete = payload;
    },
  },
});

const { reducer, actions } = deleteStudentSlice;

export const {
  deleteStudentPending,
  deleteStudentSuccess,
  deleteStudentError
} = actions;

export default reducer;