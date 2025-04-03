import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    observations: [
        {
            id: 1,
            date: { day: 17, month: 'August', year: 2025 },
            classification: 'Planets',
            objectOfObservation: 'Mars',
            coordinates: '14h 29m 36s, -62° 40′ 46″',
            notes: 'Test observation of Mars',
            weather: {
                clearly: true,
                cloudy: false,
                rain: false,
                snow: false,
                fog: false,
                thunderstorm: false
            }
        }
    ]
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
