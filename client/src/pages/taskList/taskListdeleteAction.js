import {
    deletetaskError,deletetaskPending,deletetaskSuccess
      } from "./taskListdeleteSlice";
      
      import { DeleteAlltasks} from "../../api/taskApi";

      export const deletetask = (id) => async (dispatch) => {
        try {
          dispatch(deletetaskPending());
      
          const result = await DeleteAlltasks(id);
          result.status === "success"
            ? dispatch(deletetaskSuccess(result.message))
            : dispatch(deletetaskError(result.message));
      
          console.log(result);
        } catch (error) {
          dispatch(deletetaskError(error.message));
        }
      };