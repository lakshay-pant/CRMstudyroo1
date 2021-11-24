import {
    deleteStudentError,deleteStudentPending,deleteStudentSuccess
      } from "./studentOverviewDeleteSlice";
      
      import { DeleteAllUserStudents} from "../../api/studentApi";
      
      export const deleteStudent = (id) => async (dispatch) => {
        try {
          dispatch(deleteStudentPending());
      
          const result = await DeleteAllUserStudents(id);
          result.status === "success"
            ? dispatch(deleteStudentSuccess(result.message))
            : dispatch(deleteStudentError(result.message));
      
          console.log(result);
        } catch (error) {
          dispatch(deleteStudentError(error.message));
        }
      };