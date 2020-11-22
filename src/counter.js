import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {

    },
    reducers: {
        click: (state, action) => {
            const index = action.payload;
            const lastClickedCount = state[index] || 0;

            return {
                ...state,
                [index]: lastClickedCount + 1,
            }
        }
    }
})