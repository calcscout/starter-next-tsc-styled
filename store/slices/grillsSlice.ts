import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from 'store/store';

export interface GrillsState {
  apeId: number;
  grillId: number;
  fittingGrills: number[];
}

const initialState: GrillsState = {
  apeId: 126,
  grillId: 1,
  fittingGrills: [1, 2, 3, 4, 5]
};

const totalNumberOfApes = 1000;
const totalNumberOfGrills = 100;

export const counterSlice = createSlice({
  name: 'grills',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeCurrentApeId: (state, action: PayloadAction<number>) => {
      if (action.payload >= 1 && action.payload <= totalNumberOfApes) {
        state.apeId = action.payload;
      }
    },
    changeCurrentGrillId: (state, action: PayloadAction<number>) => {
      if (action.payload >= 1 && action.payload <= totalNumberOfGrills) {
        state.grillId = action.payload;
      }
    }
  }
});

export const { changeCurrentApeId, changeCurrentGrillId } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selecApeId = (state: AppState) => state.grills.apeId;

export default counterSlice.reducer;
