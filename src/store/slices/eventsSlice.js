import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: [
        {
            id: 1,
            name: 'Total solar eclipse',
            date: '14 March, 2025',
            visibility: 'Total phase band - Greenland, Iceland, northern Spain. Partial - Europe, Africa',
            levelOfObservability: '🌟🌟🌟',
            isLiked: false
        },
        {
            id: 2,
            name: 'Total lunar eclipse',
            date: '12 August, 2025',
            visibility: 'North and South America, parts of Europe and Africa',
            levelOfObservability: '🌟🌟🌟',
            isLiked: false
        },
        {
            id: 3,
            name: 'Peak of Perseid meteor shower',
            date: '12-13 August, 2025',
            visibility: 'Northern Hemisphere',
            levelOfObservability: '🌟🌟',
            isLiked: false
        },
        {
            id: 4,
            name: 'Conjunction of Venus and Jupiter',
            date: '31 August, 2025',
            visibility: 'The whole world',
            levelOfObservability: '🌟',
            isLiked: false
        },
        {
            id: 5,
            name: 'Total Solar Eclipse',
            date: '7 September, 2025',
            visibility: 'Chile, Argentina, Atlantic Ocean',
            levelOfObservability: '🌟🌟',
            isLiked: false
        },
        {
            id: 6,
            name: 'Total Solar Eclipse',
            date: '21 December, 2025',
            visibility: 'The whole world',
            levelOfObservability: '🌟🌟🌟',
            isLiked: false
        },
        {
            id: 7,
            name: 'Peak of the Southern Delta Aquariids meteor shower',
            date: '27 July, 2025',
            visibility: 'The whole world',
            levelOfObservability: '🌟',
            isLiked: false
        },
        {
            id: 8,
            name: 'Mars-Saturn conjunction',
            date: '17 February, 2026',
            visibility: 'The whole world',
            levelOfObservability: '🌟🌟',
            isLiked: false
        },
        {
            id: 9,
            name: 'Total solar eclipse',
            date: '26 February, 2026',
            visibility: 'Spain, Russia, Greenland, Iceland',
            levelOfObservability: '🌟🌟🌟',
            isLiked: false
        },
        {
            id: 10,
            name: 'Parade of planets',
            date: '12 July, 2026',
            visibility: 'The whole world',
            levelOfObservability: '🌟🌟🌟',
            isLiked: false
        },
        {
            id: 11,
            name: 'Conjunction of Venus and Saturn',
            date: '6 February, 2027',
            visibility: 'Eastern part of the sky before sunrise',
            levelOfObservability: '🌟🌟',
            isLiked: false
        },
        {
            id: 12,
            name: 'Full moon + penumbral lunar eclipse',
            date: '20 February, 2027',
            visibility: 'Europe, Asia, Africa',
            levelOfObservability: '🌟',
            isLiked: false
        },
        {
            id: 13,
            name: 'Total solar eclipse',
            date: '2 August, 2027',
            visibility: 'North Africa (Egypt, Libya), Middle East (Yemen, Oman), Indian Ocean',
            levelOfObservability: '🌟🌟',
            isLiked: false
        },
        {
            id: 14,
            name: 'Peak of the Perseid meteor shower',
            date: '13 August, 2027',
            visibility: 'The whole world',
            levelOfObservability: '🌟🌟🌟',
            isLiked: false
        }
    ]
};

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        toggleLike: (state, action) => {
            const { id } = action.payload;
            const eventItem = state.events.find(e => e.id === id);
            if (eventItem) {
                eventItem.isLiked = !eventItem.isLiked;
            }
        }
    }
});

export const { toggleLike } = eventsSlice.actions;
export default eventsSlice.reducer;
