import { createSlice, PayloadAction } from "@reduxjs/toolkit";




interface ModalState {
  id: string;         // modal tipi (ör: "login", "settings")
  props?: any;  
}

const initialState = {
  modals: [] as ModalState[],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalState>) => {
      state.modals.push(action.payload);
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state.modals = state.modals.filter((m) => m.id !== action.payload);
    },
  },
});

export const { openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;