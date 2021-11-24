import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  isLoading: false,
  error: "",
  searchStudentList: []
  
};

const studentListSlice = createSlice({
  name: "studentList",
  initialState,
  reducers: {
    fetchStudentLoading: (state) => {
      state.isLoading = true;
    },
    fetchStudentSuccess: (state, action) => {
      state.students = action.payload;
      state.isLoading = false;
    },
    fetchStudentFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchStudents: (state, { payload }) => {
      state.searchStudentList = state.students.filter((row) => {
        if (!payload) return row;

        return row.firstName.toLowerCase().includes(payload.toLowerCase());
      });
    
  }
}})

const { reducer, actions } = studentListSlice;

export const {
  fetchStudentLoading,
  fetchStudentSuccess,
  fetchStudentFail,
  searchStudents
} = actions;

export default reducer;