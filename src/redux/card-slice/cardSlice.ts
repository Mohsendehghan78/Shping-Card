import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CardItem={
  id:string,
  title:string,
  price:number,
  quantity:number
}
type CardState={
  items:CardItem []
}
const initialState : CardState={
  items:[]
}
export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers:{
    
    addToCard(state ,action :PayloadAction <{id: string; title: string ; price: number> } ) {

     const itemIndex = state.items.findindex((item)=>{item.id=== action.payload.id})
     if(itemIndex >= 0){
      state.items[itemIndex].quantity++
     }else{
      state.items.push({...action.payload,quantity:1})
     }
    },
    removeFromCard(state,action: PayloadAction<string>){
     const itemindex= state.items.findindex((item)=>{item.id===action.payload})   
    if (state.items[itemIndex].quantity===1) {
      state.items.splice(itemIndex,1)
    }else{
      state.items[itemIndex].quantity--
    }
    }
  }
});
