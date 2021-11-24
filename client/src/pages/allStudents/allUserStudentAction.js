import {
    fetchAllUserStudentSuccess,
    fetchAllUserStudentLoading,
    fetchAllUserStudentFail,
    searchAllUserStudents
    
  } from "./allUserStudentSlice";
  
  import {
    getAllUserStudents
  } from "../../api/studentApi";
  
  export const fetchAllUserStudents = () => async (dispatch) => {
    dispatch(fetchAllUserStudentLoading());
    try {
      const result = await getAllUserStudents();
      result.data.result.length &&
        dispatch(fetchAllUserStudentSuccess(result.data.result));
    } catch (error) {
      dispatch(fetchAllUserStudentFail(error.message));
    }
  };

  export const filterAllUserSerachStudent = (str) => (dispatch) => {
    dispatch(searchAllUserStudents(str));
  };