import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};


export const textSlice = createSlice({
  name: 'text',
  initialState:{
    textString:"",
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setTextstring:(state, action)=>{
      state.textString = action.payload;
    }
  },
  
});

export const { setTextstring} = textSlice.actions;


export const selectTextString = (state) => state.text.textString;


export default textSlice.reducer;
