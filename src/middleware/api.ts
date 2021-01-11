import axios from "axios";
import { API } from "../constants/actionTypes";
import { apiEnd, apiStart } from "../actions/ApiActions";
axios.defaults.baseURL = "https://5ffa665587478d0017d9a5ae.mockapi.io/api/v1/";
axios.defaults.headers.common["Content-Type"] = "application/json";

const api = ({ dispatch }: any) => (next: any) => (action: any) => {
  next(action);
  if (action.type !== API) return;

  const { url, method, data, onSuccess, onFailure, label } = action.payload;
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";
  // blow the horn - api requested has started!
  if (label) {
    dispatch(apiStart(label));
    /* If a label has been passed, we dispatch apiStart(label). This can be likened to
        code block below:
        dispatch({
          type: "API_START",
          payload: label 
        })
        Where label represents whatever label has been retrieved from the action
        payload.
    */
  }
  axios
    .request({
      url,
      method,
      [dataOrParams]: data,
    })
    /*axios is a promise based library. Thus, upon a successful request, we dispatch the
      onSuccess action creator while passing it the returned data from the server. This is
      done in the then block.
      If an error occurs, we will dispatch the onFailure action creator while passing it
      the error. This is done in the catch block. */
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch((error) => {
      dispatch(onFailure(error));
    })
    /*
      Finally, we employ the finally block of promises to ensure that we dispatch the
      apiEnd action creator.
      Using the finally block ensures that whether the promise is resolved or rejected,
      this block of code will always be called.
    */
    .finally(() => {
      // blow the horn - api requested has ended!
      if (label) {
        /*
        Hence, we will always know when the api request ends by calling apiEnd(label)
        From previous explanations, you should remember that the apiEnd(label) call
        returns an action of the form: 
        {
          type: "API_END",
          payload: label
        }
        */
        dispatch(apiEnd(label));
      }
    });
};

export default api;
