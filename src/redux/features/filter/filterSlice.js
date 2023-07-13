const { createSlice } = require("@reduxjs/toolkit");
import { initialState } from "./initialState";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    filteringJOb: (state, action) => {
      state.filterJob = action.payload;
    },
  },
});

export const { setModal, filteringJOb } = filterSlice.actions;
export default filterSlice.reducer;
