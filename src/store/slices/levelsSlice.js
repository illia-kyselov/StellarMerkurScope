import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const wrongStarSelected = createAsyncThunk(
    'levels/wrongStarSelected',
    async (_, { dispatch }) => {
        dispatch(setStatus('error'));
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(resetLevel());
    }
);

const level1 = {
    constellation: "Big Bear",
    stars: [
        { top: 65, left: 77 },
        { top: 128, left: 219 },
        { top: 156, left: 89 },
        { top: 182, left: 39 },
        { top: 185, left: 123 },
        { top: 225, left: 169 },
        { top: 288, left: 191 },
        { top: 294, left: 261 },
        { top: 339, left: 58 },
        { top: 361, left: 169 },
        { top: 388, left: 255 },
        { top: 222, left: 276 }
    ],
    correctSequence: [3, 2, 4, 5, 6, 7, 11, 5]
};

const orionGroup1 = [
    { top: 228, left: 167 },
    { top: 95, left: 107 },
    { top: 53, left: 191 },
    { top: 107, left: 225 },
    { top: 199, left: 201 },
    { top: 213, left: 185 },
    { top: 345, left: 137 },
    { top: 316, left: 265 }
];
const orionGroup2 = [
    { top: 65, left: 77 },
    { top: 158, left: 111 },
    { top: 182, left: 39 },
    { top: 237, left: 119 },
    { top: 339, left: 58 },
    { top: 408, left: 149 },
    { top: 388, left: 255 },
    { top: 199, left: 267 },
    { top: 164, left: 265 }
];
const level2 = {
    constellation: "Orion",
    stars: [...orionGroup1, ...orionGroup2],
    correctSequence: [0, 1, 2, 3, 4, 5, 0, 6, 7, 4]
};

const cassiopeiaGroup1 = [
    { top: 138, left: 42 },
    { top: 211, left: 101 },
    { top: 207, left: 179 },
    { top: 287, left: 219 },
    { top: 223, left: 301 }
];
const cassiopeiaGroup2 = [
    { top: 65, left: 77 },
    { top: 53, left: 191 },
    { top: 95, left: 107 },
    { top: 107, left: 225 },
    { top: 119, left: 188 },
    { top: 164, left: 104 },
    { top: 164, left: 265 },
    { top: 199, left: 267 },
    { top: 240, left: 30 },
    { top: 339, left: 58 },
    { top: 316, left: 265 },
    { top: 345, left: 137 },
    { top: 408, left: 149 },
    { top: 388, left: 255 }
];
const level3 = {
    constellation: "Cassiopeia",
    stars: [...cassiopeiaGroup1, ...cassiopeiaGroup2],
    correctSequence: [0, 1, 2, 3, 4]
};

const swanLine1 = [
    { top: 353, left: 15 },
    { top: 310, left: 92 },
    { top: 234, left: 152 },
    { top: 164, left: 231 },
    { top: 77, left: 249 },
    { top: 44, left: 273 }
];
const swanLine2 = [
    { top: 164, left: 104 },
    { top: 234, left: 152 },
    { top: 287, left: 219 },
    { top: 365, left: 307 }
];
const swanAdditional = [
    { top: 50, left: 59 },
    { top: 95, left: 107 },
    { top: 119, left: 188 },
    { top: 183, left: 42 },
    { top: 211, left: 101 },
    { top: 199, left: 267 },
    { top: 223, left: 301 },
    { top: 408, left: 149 },
    { top: 388, left: 255 }
];
const level4 = {
    constellation: "Swan",
    stars: [...swanLine1, ...swanLine2, ...swanAdditional],
    correctSequence: [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9]
    ]
};

const scorpioLine1 = [
    { top: 281, left: 95 },
    { top: 318, left: 70 },
    { top: 345, left: 86 },
    { top: 345, left: 134 },
    { top: 333, left: 167 },
    { top: 261, left: 167 },
    { top: 189, left: 197 },
    { top: 173, left: 215 },
    { top: 107, left: 267 }
];
const scorpioLine2 = [
    { top: 143, left: 273 },
    { top: 173, left: 215 }
];
const scorpioLine3 = [
    { top: 183, left: 275 },
    { top: 173, left: 215 }
];
const scorpioAdditional = [
    { top: 50, left: 59 },
    { top: 44, left: 273 },
    { top: 77, left: 249 },
    { top: 95, left: 107 },
    { top: 119, left: 188 },
    { top: 164, left: 104 },
    { top: 183, left: 42 },
    { top: 211, left: 101 },
    { top: 223, left: 301 },
    { top: 234, left: 153 },
    { top: 287, left: 219 },
    { top: 353, left: 15 },
    { top: 365, left: 307 },
    { top: 388, left: 255 },
    { top: 408, left: 149 }
];
const level5 = {
    constellation: "Scorpio",
    stars: [...scorpioLine1, ...scorpioLine2, ...scorpioLine3, ...scorpioAdditional],
    correctSequence: [
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [9, 10],
        [11, 12]
    ]
};

const andromedaLine1 = [
    { top: 153, left: 43 },
    { top: 150, left: 71 },
    { top: 138, left: 81 }
];
const andromedaLine2 = [
    { top: 77, left: 55 },
    { top: 138, left: 81 },
    { top: 207, left: 213 },
    { top: 201, left: 244 },
    { top: 192, left: 261 },
    { top: 195, left: 313 }
];
const andromedaLine3 = [
    { top: 129, left: 237 },
    { top: 201, left: 244 },
    { top: 278, left: 216 },
    { top: 394, left: 168 }
];
const andromedaLine4 = [
    { top: 351, left: 98 },
    { top: 302, left: 104 },
    { top: 250, left: 152 },
    { top: 278, left: 216 },
    { top: 207, left: 213 }
];
const andromedaAdditional = [
    { top: 44, left: 273 },
    { top: 77, left: 249 },
    { top: 107, left: 267 },
    { top: 119, left: 188 },
    { top: 211, left: 101 },
    { top: 213, left: 152 },
    { top: 318, left: 70 },
    { top: 353, left: 15 },
    { top: 376, left: 49 },
    { top: 333, left: 167 },
    { top: 388, left: 255 },
    { top: 365, left: 307 }
];
const level6 = {
    constellation: "Andromeda",
    stars: [
        ...andromedaLine1,
        ...andromedaLine2,
        ...andromedaLine3,
        ...andromedaLine4,
        ...andromedaAdditional
    ],
    correctSequence: [
        [0, 1, 2],
        [3, 4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15, 16]
    ]
};

const herculesLine1 = [
    { top: 371, left: 250 },
    { top: 351, left: 228 },
    { top: 249, left: 204 },
    { top: 179, left: 195 },
    { top: 101, left: 222 },
    { top: 131, left: 272 }
];
const herculesLine2 = [
    { top: 324, left: 141 },
    { top: 302, left: 104 },
    { top: 259, left: 167 },
    { top: 207, left: 139 },
    { top: 195, left: 129 },
    { top: 193, left: 70 },
    { top: 113, left: 101 }
];
const herculesLine3 = [
    { top: 207, left: 139 },
    { top: 179, left: 195 }
];
const herculesLine4 = [
    { top: 259, left: 167 },
    { top: 249, left: 204 }
];
const herculesAdditional = [
    { top: 44, left: 273 },
    { top: 77, left: 249 },
    { top: 77, left: 55 },
    { top: 119, left: 188 },
    { top: 153, left: 43 },
    { top: 195, left: 313 },
    { top: 201, left: 244 },
    { top: 207, left: 213 },
    { top: 302, left: 228 },
    { top: 318, left: 70 },
    { top: 353, left: 15 },
    { top: 351, left: 98 },
    { top: 365, left: 307 },
    { top: 393, left: 168 }
];
const level7 = {
    constellation: "Hercules",
    stars: [
        ...herculesLine1,
        ...herculesLine2,
        ...herculesLine3,
        ...herculesLine4,
        ...herculesAdditional
    ],
    correctSequence: [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12],
        [13, 14],
        [15, 16]
    ]
};

const geminiLine1 = [
    { top: 334, left: 222 },
    { top: 305, left: 139 },
    { top: 255, left: 131 },
    { top: 207, left: 89 },
    { top: 193, left: 70 }
];
const geminiLine2 = [
    { top: 293, left: 240 },
    { top: 255, left: 131 }
];
const geminiLine3 = [
    { top: 231, left: 70 },
    { top: 207, left: 89 },
    { top: 165, left: 143 },
    { top: 119, left: 180 }
];
const geminiLine4 = [
    { top: 153, left: 86 },
    { top: 165, left: 143 },
    { top: 207, left: 213 },
    { top: 225, left: 262 },
    { top: 208, left: 308 }
];
const geminiLine5 = [
    { top: 251, left: 255 },
    { top: 207, left: 213 }
];
const geminiAdditional = [
    { top: 44, left: 273 },
    { top: 77, left: 249 },
    { top: 80, left: 180 },
    { top: 77, left: 55 },
    { top: 113, left: 101 },
    { top: 131, left: 272 },
    { top: 302, left: 104 },
    { top: 318, left: 70 },
    { top: 353, left: 15 },
    { top: 376, left: 49 },
    { top: 394, left: 168 },
    { top: 371, left: 250 },
    { top: 365, left: 307 }
];
const level8 = {
    constellation: "Gemini",
    stars: [
        ...geminiLine1,
        ...geminiLine2,
        ...geminiLine3,
        ...geminiLine4,
        ...geminiLine5,
        ...geminiAdditional
    ],
    correctSequence: [
        [0, 1, 2, 3, 4],
        [5, 6],
        [7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17]
    ]
};

const pegasusLine1 = [
    { top: 131, left: 80 },
    { top: 113, left: 128 },
    { top: 155, left: 169 },
    { top: 177, left: 178 },
    { top: 207, left: 213 },
    { top: 237, left: 317 },
    { top: 328, left: 273 },
    { top: 289, left: 173 },
    { top: 248, left: 155 },
    { top: 189, left: 70 },
    { top: 194, left: 24 }
];
const pegasusLine2 = [
    { top: 242, left: 51 },
    { top: 248, left: 89 },
    { top: 296, left: 140 },
    { top: 289, left: 173 },
    { top: 207, left: 213 }
];
const pegasusAdditional = [
    { top: 44, left: 273 },
    { top: 77, left: 249 },
    { top: 80, left: 180 },
    { top: 80, left: 40 },
    { top: 131, left: 272 },
    { top: 208, left: 308 },
    { top: 318, left: 70 },
    { top: 353, left: 15 },
    { top: 376, left: 49 },
    { top: 394, left: 168 },
    { top: 334, left: 222 },
    { top: 371, left: 250 },
    { top: 365, left: 307 }
];
const level9 = {
    constellation: "Pegasus",
    stars: [
        ...pegasusLine1,
        ...pegasusLine2,
        ...pegasusAdditional
    ],
    correctSequence: [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
    ]
};

const littleLionLine = [
    { top: 177, left: 295 },
    { top: 154, left: 272 },
    { top: 180, left: 204 },
    { top: 219, left: 204 },
    { top: 254, left: 249 },
    { top: 293, left: 255 },
    { top: 277, left: 92 },
    { top: 305, left: 22 },
    { top: 220, left: 58 },
    { top: 228, left: 98 },
    { top: 219, left: 204 }
];
const littleLionAdditional = [
    { top: 44, left: 273 },
    { top: 77, left: 249 },
    { top: 83, left: 206 },
    { top: 80, left: 180 },
    { top: 80, left: 40 },
    { top: 113, left: 128 },
    { top: 131, left: 80 },
    { top: 155, left: 169 },
    { top: 189, left: 70 },
    { top: 194, left: 24 },
    { top: 353, left: 15 },
    { top: 376, left: 49 },
    { top: 351, left: 98 },
    { top: 394, left: 168 },
    { top: 334, left: 222 },
    { top: 328, left: 273 },
    { top: 371, left: 250 },
    { top: 365, left: 307 }
];
const level10 = {
    constellation: "Little Lion",
    stars: [...littleLionLine, ...littleLionAdditional],
    correctSequence: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

const levels = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];

const initialState = {
    levels,
    currentLevelIndex: 1,
    connectedIndices: [],
    frontChain: [],
    backChain: [],
    currentLineIndex: 0,
    lineProgress: 0,
    status: 'idle'
};

const levelsSlice = createSlice({
    name: 'levels',
    initialState,
    reducers: {
        starSelected: (state, action) => {
            const index = action.payload;
            const currentLevel = state.levels[state.currentLevelIndex];
            if (Array.isArray(currentLevel.correctSequence[0])) {
                const curLine = state.currentLineIndex;
                const correctLine = currentLevel.correctSequence[curLine];
                if (index === correctLine[state.lineProgress]) {
                    state.lineProgress++;
                    if (state.lineProgress === correctLine.length) {
                        state.currentLineIndex++;
                        state.lineProgress = 0;
                        if (state.currentLineIndex === currentLevel.correctSequence.length) {
                            state.status = 'passed';
                        }
                    }
                }
            } else {
                const cs = currentLevel.correctSequence;
                if (state.frontChain.length === 0 && state.backChain.length === 0) {
                    if (index === cs[0]) {
                        state.frontChain.push(0);
                    } else if (index === cs[cs.length - 1]) {
                        state.backChain.push(cs.length - 1);
                    }
                } else if (state.frontChain.length > 0 && state.backChain.length === 0) {
                    let frontPos = state.frontChain[state.frontChain.length - 1];
                    if (frontPos < cs.length - 1 && index === cs[frontPos + 1]) {
                        state.frontChain.push(frontPos + 1);
                    } else if (state.frontChain[0] > 0 && index === cs[0]) {
                        state.frontChain.unshift(0);
                    } else if (index === cs[cs.length - 1]) {
                        state.backChain.push(cs.length - 1);
                    }
                } else if (state.backChain.length > 0 && state.frontChain.length === 0) {
                    let backPos = state.backChain[state.backChain.length - 1];
                    if (backPos > 0 && index === cs[backPos - 1]) {
                        state.backChain.push(backPos - 1);
                    } else if (state.backChain[0] < cs.length - 1 && index === cs[cs.length - 1]) {
                        state.backChain.unshift(cs.length - 1);
                    } else if (index === cs[0]) {
                        state.frontChain.push(0);
                    }
                } else if (state.frontChain.length > 0 && state.backChain.length > 0) {
                    let frontPos = state.frontChain[state.frontChain.length - 1];
                    let backPos = state.backChain[state.backChain.length - 1];
                    if (frontPos < cs.length - 1 && index === cs[frontPos + 1]) {
                        state.frontChain.push(frontPos + 1);
                    } else if (backPos > 0 && index === cs[backPos - 1]) {
                        state.backChain.push(backPos - 1);
                    }
                }
                if (state.frontChain.length + state.backChain.length >= cs.length) {
                    state.status = 'passed';
                }
            }
        },
        resetLevel: (state) => {
            const currentLevel = state.levels[state.currentLevelIndex];
            if (Array.isArray(currentLevel.correctSequence[0])) {
                state.currentLineIndex = 0;
                state.lineProgress = 0;
            } else {
                state.frontChain = [];
                state.backChain = [];
            }
            state.status = 'idle';
        },
        nextLevel: (state) => {
            if (state.currentLevelIndex < state.levels.length - 1) {
                state.currentLevelIndex++;
                const currentLevel = state.levels[state.currentLevelIndex];
                if (Array.isArray(currentLevel.correctSequence[0])) {
                    state.currentLineIndex = 0;
                    state.lineProgress = 0;
                } else {
                    state.frontChain = [];
                    state.backChain = [];
                }
                state.status = 'idle';
            }
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
});

export const { starSelected, resetLevel, nextLevel, setStatus } = levelsSlice.actions;
export default levelsSlice.reducer;
