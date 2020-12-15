/*

To handle api requests in the Netflixy app, we will NOT be using any of the libraries
we discussed in earlier chapters. No redux-thunk, redux-promise, reduxobservable
or redux-saga. We will be handling the flow ourselves using a custom
built middleware.


The middleware will first intercept actions that of type, API. After that it will retrieve
some necessary information for making the network request from the action
payload. This will include the url, method and any data to be sent to the server - in
the case of a POST request. If it’s a GET request, this data will be represented by
query parameters.

The url, method and data isn’t all the middleware needs to concern itself about.
The way we’re going to design this middleware, we want to be able to dispatch
onSuccess and onFailure action creator callbacks whenever the api request is
successful or not.
The onSuccess and onFailure callbacks can be any action creator that returns an
object.

Quick recap: The url, method, data, onSuccess and onFailure will be retrieved
from the action payload of any action with the type of API.
The url, method, and data values are required to make a successful network
request, while the onSuccess and onFailure callback functions will be invoked if
the api request is successful or not.
This is super important because most times after fetching data from a remote
server, you want to dispatch another action with the result fetched from the server
so the reducers can save the data to the state object.
Also, when there’s an error and the request didn’t go through, you also want to
dispatch an action - with the error object! This way you can either display it to the
user or perhaps show a toast message.
We’re getting close to understanding the big picture for this custom middleware
we will build.

That’s not all.
We also need to know when a request has began, and when it’s ended. But why?
So we can handle loading states in the app!
In order to this, we will introduce something called labels. Labels are like names
given to a request. So, for example if I wanted to fetch movies from a server, I could
dispatch an action of type, FETCH_MOVIES and could give it a label of,
FETCH_MOVIES_LABEL
{
 type: "FETCH_MOVIES",
 label: "FETCH_MOVIES_LABEL
}

Honestly, it doesn’t matter what you call this label - as long as it is consistent.
One thing I want you to remember is that this middleware is responsible for any
sort of api communication in this application, and it will only respond to actions of
type API.
By implication, if you wanted to fetch a movie, you wouldn’t dispatch an action of
type, FETCH_MOVIES. Rather, you’d dispatch an action of type, API with some
payload that contains information on the request to be made.
In this action payload, you’ll include the url, method, data, onSuccess and
onFailure properties. This is how the api middleware gets the required
information to work with.Since you couldn’t use a type of FETCH_MOVIES, every single action fired to make a
network request will have the action type of API. To distinguish various actions, use
a label.
This label will help you identify what kind of api communication is going on, and
we will also use this to handle loading states in the app.
To handle the loading states, the api middleware will dispatch an action with the
label before making a network request. Once the api request is completed, it will
also dispatch another action with the same label!
In this payload, you may go on to add a label of FETCH_MOVIES.

So, if you had a FETCH_MOVIES label, before initiating a network request, the api
middleware will dispatch an action that looks like this:

{
type: API_START,
payload: FETCH_MOVIES
}

And when the network request ends (either successfully, or due to a failure), the api
middleware will dispatch an action that looks like this:
{
type: API_END,
payload: FETCH_MOVIES
}

With the API_START and API_END action types, we now know when any request
begins and ends. With this information we can set a loading flag in the reducers,
and handle those in the application as well.



*/

import axios from "axios";
import { API } from "../constants/actionTypes";
import { apiEnd, apiStart } from "../actions/ApiActions";
//axios default config
axios.defaults.baseURL = "https://api.myjson.com/bins/";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = `Bearer $
{"fakeAccessToken"}`;
/*

These may look confusing, particularly because they are specific to the axios
library.
What we are doing here is setting some defaults for every request object sent to
any remote servers.
For example we are setting a baseURL with axios.defaults.baseURL. This is
important because in most apps, you’ll have a single base url anyway.
For example, if you were building a GitHub app, every request will perhaps be
made to a url that begins with api.github.com.
So, when you want to fetch users you could use, api.github.com/users. To fetch
commits, the url could be this: api.github.com/user/id/commits.
What you’ll notice is that the base url, api.github.com is consistent across both
requests. Instead of always writing this, we’ve taken the responsibility to set it up
once for all requests.

*/

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
