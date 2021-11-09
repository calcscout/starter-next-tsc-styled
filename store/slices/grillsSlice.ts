import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from 'store/store';
import responseData from 'defaultData/openSeaAssetResponse126';

// const responseDataType = typeof responseData;

import {
  grillsMetadataType,
  grillsMetadata,
  mouthMapping,
  apecessoriesMouthType
} from 'defaultData/grillsMetadata';

export interface GrillsState {
  apeId: number;
  grillId: number;
  fittingGrills: number[];
  apeImageUrl: string;
  permalink: string;
  mouthType: string;
  grillType: string;
  ownerName: string;
  ownerAddress: string;
  lastSalePrice: string;
  dialogGrillIsOpen: boolean;
  grillsMetadata: grillsMetadataType;
}

const initialState: GrillsState = {
  apeId: 126,
  grillId: 1,
  fittingGrills: [1, 2, 3, 4, 5],
  apeImageUrl: responseData.image_url,
  permalink: responseData.permalink,
  mouthType: responseData.traits.filter((e) => e.trait_type === 'Mouth')[0].value,
  grillType: responseData.traits.filter((e) => e.trait_type === 'Mouth')[0].value,
  ownerName: responseData.owner.user.username,
  ownerAddress: responseData.owner.address,
  lastSalePrice: responseData.last_sale.total_price,
  dialogGrillIsOpen: false,
  grillsMetadata
};

const totalNumberOfApes = 10000;
const totalNumberOfGrills = 100;

export const grillSlice = createSlice({
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
      const apecessoriesMouth = mouthMapping.find(
        (e) => e.originalMouthType === action.payload
      )?.apecessoriesMouthType;
      state.mouthType = apecessoriesMouth || apecessoriesMouthType.grin;
    },
    changeGrillType: (state, action: PayloadAction<string>) => {
      state.grillType = action.payload;
    },
    changeOwnerName: (state, action: PayloadAction<string>) => {
      state.ownerName = action.payload;
    },
    changeOwnerAddress: (state, action: PayloadAction<string>) => {
      state.ownerAddress = action.payload;
    },
    changeLastSalePrice: (state, action: PayloadAction<string>) => {
      state.lastSalePrice = action.payload;
    },
    openDialogGrills: (state) => {
      state.dialogGrillIsOpen = true;
    },
    closeDialogGrills: (state) => {
      state.dialogGrillIsOpen = false;
    },
    setGrillsMetadata: (state, action: PayloadAction<grillsMetadataType>) => {
      state.grillsMetadata = action.payload;
    }
  }
});

export const {
  changeApeId,
  changeGrillId,
  changeApeImageUrl,
  changePermalink,
  changeMouthType,
  changeGrillType,
  changeOwnerName,
  changeOwnerAddress,
  changeLastSalePrice,
  openDialogGrills,
  closeDialogGrills,
  setGrillsMetadata
} = grillSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectApeId = (state: AppState) => state.grills.apeId;
export const selectGrillId = (state: AppState) => state.grills.grillId;
export const selectApeImageUrl = (state: AppState) => state.grills.apeImageUrl;
export const selectPermalink = (state: AppState) => state.grills.permalink;
export const selectMouthType = (state: AppState) => state.grills.mouthType;
export const selectGrillType = (state: AppState) => state.grills.grillType;
export const selectOwnerName = (state: AppState) => state.grills.ownerName;
export const selectOwnerAddress = (state: AppState) => state.grills.ownerAddress;
export const selectLastSalePrice = (state: AppState) => state.grills.lastSalePrice;
export const selectDialogGrillsIsOpen = (state: AppState) => state.grills.dialogGrillIsOpen;
export const selectGrillsMetadata = (state: AppState) => state.grills.grillsMetadata;

export default grillSlice.reducer;
