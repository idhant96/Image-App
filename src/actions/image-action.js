export const selectImage = (img) => {
  return{
    type: "IMAGE_SELECTED",
    payload: img
  }
}
