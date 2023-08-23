import { instance } from "../../api";
export const getProduct = () => {

  //apiye istek atıp veriyi alan func.
  return (dispatch: (arg0: { type: string; payload: any }) => void) => {
    instance
      .get("/products")
      .then((response) => {
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};