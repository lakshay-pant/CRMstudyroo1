import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
  isLoading: false,
  error: "",
  searchtaskList: []
  
};

const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    fetchtaskLoading: (state) => {
      state.isLoading = true;
    },
    fetchtaskSuccess: (state, action) => {
      state.task = action.payload;
      state.isLoading = false;
    },
    fetchtaskFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchtask: (state, { payload }) => {
      state.searchStudentList = state.tasks.filter((row) => {
        if (!payload) return row;

        return row.firstName.toLowerCase().includes(payload.toLowerCase());
      });
    
  }
}})

const { reducer, actions } = taskListSlice;

export const {
  fetchtaskLoading,
  fetchtaskSuccess,
  fetchtaskFail,
  searchtask
} = actions;

export default reducer;