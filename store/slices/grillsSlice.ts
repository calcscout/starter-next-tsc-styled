import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from 'store/store';
import responseData from 'defaultData/openSeaAssetResponse126';

// const responseDataType = typeof responseData;

export interface GrillsState {
  apeId: number;
  grillId: number;
  fittingGrills: number[];
  apeImageUrl: string;
  permalink: string;
  mouthType: string;
  owner: string;
}

const initialState: GrillsState = {
  apeId: 126,
  grillId: 1,
  fittingGrills: [1, 2, 3, 4, 5],
  apeImageUrl: responseData.image_url,
  permalink: responseData.permalink,
  mouthType: responseData.traits.filter((e) => e.trait_type === 'Mouth')[0].value,
  owner: responseData.owner.user.username || responseData.owner.address
};

const totalNumberOfApes = 10000;
const totalNumberOfGrills = 100;

export const counterSlice = createSlice({
  name: 'grills',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeApeId: (state, action: PayloadAction<number>) => {
      if (isNaN(action.payload)) {
        return;
      }
      if (action.payload >= 0 && action.payload < totalNumberOfApes) {
        state.apeId = action.payload;
      }
    },
    changeGrillId: (state, action: PayloadAction<number>) => {
      if (action.payload >= 1 && action.payload < totalNumberOfGrills) {
        state.grillId = action.payload;
      }
    },
    changeApeImageUrl: (state, action: PayloadAction<string>) => {
      state.apeImageUrl = action.payload;
    },
    changePermalink: (state, action: PayloadAction<string>) => {
      state.permalink = action.payload;
    },
    changeMouthType: (state, action: PayloadAction<string>) => {
      state.mouthType = action.payload;
    },
    changeOwner: (state, action: PayloadAction<string>) => {
      state.owner = action.payload;
    }
  }
});

export const {
  changeApeId,
  changeGrillId,
  changeApeImageUrl,
  changePermalink,
  changeMouthType,
  changeOwner
} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectApeId = (state: AppState) => state.grills.apeId;
export const selectGrillId = (state: AppState) => state.grills.grillId;
export const selectApeImageUrl = (state: AppState) => state.grills.apeImageUrl;
export const selectPermalink = (state: AppState) => state.grills.permalink;
export const selectMouthType = (state: AppState) => state.grills.mouthType;
export const selectOwner = (state: AppState) => state.grills.owner;

export default counterSlice.reducer;
