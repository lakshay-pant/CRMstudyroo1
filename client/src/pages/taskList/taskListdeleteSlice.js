import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoadingDelete: false,
  statusDelete: "",
  messageDelete: "",
};

const deletetaskSlice = createSlice({
  name: "deletetask",
  initialState,
  reducers: {
    deletetaskPending: (state) => {
      state.isLoadingDelete = true;
    },
    deletetaskSuccess: (state, { payload }) => {
      state.isLoadingDelete = false;
      state.statusDelete = "success";
      state.messageDelete = payload;
    },
    deletetaskError: (state, { payload }) => {
      state.isLoadingDelete = false;
      state.statusDelete = "error";
      state.messageDelete = payload;
    },
  },
});

const { reducer, actions } = deletetaskSlice;

export const {
  deletetaskPending,
  deletetaskSuccess,
  deletetaskError
} = actions;

export default reducer;