import {
editStudentError,editStudentPending,editStudentSuccess
  } from "./studentOverviewSlice";
  
  import { UpdateAllUserStudents} from "../../api/studentApi";
  
  export const editStudent = (frmDt,id) => async (dispatch) => {
    try {
      dispatch(editStudentPending());
  
      const result = await UpdateAllUserStudents(frmDt,id);
      result.status === "success"
        ? dispatch(editStudentSuccess(result.message))
        : dispatch(editStudentError(result.message));
  
      console.log(result);
    } catch (error) {
      dispatch(editStudentError(error.message));
    }
  };