import React,{createContext,useEffect,useReducer} from 'react'
import Wishlist from '../component/Wishlist';
import AppReducer from './AppReducer';

const initialState={
    wishlist:[]
}
export  const GlobalContext=createContext(initialState) ;
export const GlobalProvider=props=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const addcloth=(id,image,product_name,price)=>{
        dispatch({type:"Fav_clothes",payload:id,image,product_name,price})
    }
    return(
                <GlobalContext.Provider 
                value={{
                    wishlist:state.wishlist,
                    addcloth
                    }
                }>
                {props.children}
             
                  {/* <Wishlist/> */}
                </GlobalContext.Provider>
    )
}
  
