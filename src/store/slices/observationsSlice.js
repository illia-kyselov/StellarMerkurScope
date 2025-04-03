import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    observations: []
};

const observationsSlice = createSlice({
    name: 'observations',
    initialState,
    reducers: {
        addObservation: (state, action) => {
            state.observations.push(action.payload);
        },
        removeObservation: (state, action) => {
            const idToRemove = action.payload;
            state.observations = state.observations.filter(
                (obs) => obs.id !== idToRemove
            );
        },
        updateObservation: (state, action) => {
            const updatedObs = action.payload;
            const index = state.observations.findIndex(
                (obs) => obs.id === updatedObs.id
            );
            if (index !== -1) {
                state.observations[index] = updatedObs;
            }
        }
    }
});

export const { addObservation, removeObservation, updateObservation } = observationsSlice.actions;
export default observationsSlice.reducer;
