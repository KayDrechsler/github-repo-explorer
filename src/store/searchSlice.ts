import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../utils/api';

interface SearchState {
    searchResults: User[];
    searchQuery: string;
    isLoading: boolean;
}

const initialState: SearchState = {
    searchResults: [],
    searchQuery: '',
    isLoading: false
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchResults: (state, action: PayloadAction<User[]>) => {
            state.searchResults = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
});

export const { setSearchResults, setSearchQuery, setIsLoading } = searchSlice.actions;
export default searchSlice.reducer;
