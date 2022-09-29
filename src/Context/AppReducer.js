export default (state,action)=>{
    switch(action.type){
        case "Fav_clothes":
        return{
          ...state,
          wishlist:[action.payload,...state.wishlist]
        }
        default:
            return state;
    }
};