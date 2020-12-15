import { createAction } from "redux-actions";

import { API_START, API_END } from "../constants/actionTypes";

/*

Hopefully, you still remember how to use the redux-actions library. Remember
that the createAction call as seen above will return an action creator.

*/
export const apiStart = createAction(API_START);
export const apiEnd = createAction(API_END);

/*
This action creator returned may be invoked to yield an action object. If the action
creator is invoked with a single value, this will be passed in as the payload of the
action.
apiStart("GET_MOVIES")
// {type: "API_START", payload: "GET_MOVIES"}

*/
