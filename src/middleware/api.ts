const api = ({ getState, dispatch }: any) => (next: any) => (action: any) => {
  next(action);
};
export default api;
