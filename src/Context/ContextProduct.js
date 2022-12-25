import { createContext, useContext, useReducer } from "react";
import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isloading:  false,
  isError: false,
  products:[],
  featureproducts: [],
}

const AppProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer,  initialState)
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({type:"MY_API_DATA" , payload: products});
    } catch (error) {
      dispatch( {type: "API_ERORR"});
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    
    <AppContext.Provider value={{ myName: "vinod thapa" }}/>,
      {children}
    <AppContext.Provider>
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
    
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };