import {
    fetchStudentLoading,
    fetchStudentSuccess,
    fetchStudentFail,
    searchStudents
    
  } from "./allStudentSlice";
  
  import {
    getAllUserStudents
  } from "../../api/studentApi";
  
  export const fetchAllStudents = () => async (dispatch) => {
    dispatch(fetchStudentLoading());
    try {
      const result = await getAllUserStudents();
      result.data.result.length &&
        dispatch(fetchStudentSuccess(result.data.result));
    } catch (error) {
      dispatch(fetchStudentFail(error.message));
    }
  };

  export const filterSerachStudent = (str) => (dispatch) => {
    dispatch(searchStudents(str));
  };