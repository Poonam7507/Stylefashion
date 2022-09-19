import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        add:(state,action)=>{
            const additem=state.cart.find((props)=>
             props.id===action.payload.id
            );
            if(additem){
                additem.quantity++;
            }
            else{
                state.cart.push({...action.payload,quantity:1});
            }
        }
,
        incQuantity: (state, action) => {
            const incitem = state.cart.find((props) => props.id === action.payload);
            incitem.quantity++;
          },
          decQuantity: (state, action) => {
            const decitem = state.cart.find((props) => props.id === action.payload);
            if (decitem.quantity === 1) {
              decitem.quantity = 1
            } else {
              decitem.quantity--;
            }
          },
          removeItem: (state, action) => {
            const removeItem = state.cart.filter((props) => props.id !== action.payload);
            state.cart = removeItem;
          },

    }

})

export const cartReducer = cartSlice.reducer;
export const {
  add,
  incQuantity,
  decQuantity,
  removeItem,
} = cartSlice.actions;