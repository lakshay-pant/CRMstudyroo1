import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUserStudents: [],
  isLoading: false,
  error: "",
  searchAllUserStudentList: []
  
};

const allUserStudentListSlice = createSlice({
  name: "allUserStudentList",
  initialState,
  reducers: {
    fetchAllUserStudentLoading: (state) => {
      state.isLoading = true;
    },
    fetchAllUserStudentSuccess: (state, action) => {
      state.allUserStudents = action.payload;
      state.isLoading = false;
    },
    fetchAllUserStudentFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchAllUserStudents: (state, { payload }) => {
      state.searchAllUserStudentList = state.allUserStudents.filter((row) => {
        if (!payload) return row;

        return row.firstName.toLowerCase().includes(payload.toLowerCase());
      });
    
  }
}})

const { reducer, actions } = allUserStudentListSlice;

export const {
  fetchAllUserStudentSuccess,
  fetchAllUserStudentLoading,
  fetchAllUserStudentFail,
  searchAllUserStudents

} = actions;

export default reducer;