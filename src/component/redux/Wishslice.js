// import { createSlice } from "@reduxjs/toolkit";

// const wishlistSlice=createSlice({
//     name:'wishlist',
//     initialState:{
       
//         wishlist:[]
//     },
//     reducers:{
      
//         addTo:(state,action)=>{
//             const addToitem=state.wishlist.find((props)=>
//              props.id===action.payload.id
//             );
//             if(addToitem){
//                 addToitem.quantity++;
//             }
//             else{
//                 state.wishlist.push({...action.payload,quantity:1});
//             }
//         }
// ,
//           removeItem: (state, action) => {
//             const removeItem = state.wishlist.filter((props) => props.id !== action.payload);
//             state.wishlist = removeItem;
//           },

//     }

// })

// export const wishlistReducer = wishlistSlice.reducer;
// export const {

//   addTo,
  

//   removeItem,
// } = wishlistSlice.actions;