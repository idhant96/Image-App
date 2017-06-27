export const selectUser = (obj) => {
  console.log(obj.gender);
  return{
    type: "USER_SELECTED",
    payload: obj
  }
}
