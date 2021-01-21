const noOp = () => ({ type: "NO_OP" });
//It returns an object of type, "NO_OP.

export const apiPayloadCreator = ({
  url = "/",
  method = "GET",
  onSuccess = noOp,
  onFailure = noOp,
  label = "",
  data = null,
  page = "",
}) => ({
  url,
  method,
  onSuccess,
  onFailure,
  data,
  label,
  page,
});
