
import { createStore } from "redux";
import { PopularRepo } from './services/github/getPopularRepos'

export interface State {
    numOfRepos: number,
    repos: PopularRepo[],
    filteredRepos: PopularRepo[],
    favoriteRepos: PopularRepo[],
    displayFavorite: boolean
}

interface TempType {
    type: any,
    payload: any
}

const initialState: State = {
    numOfRepos: 10,
    repos: [],
    filteredRepos: [],
    favoriteRepos: JSON.parse(localStorage.getItem('favorites') || '[]'),
    displayFavorite: false
}

const stateReducer = (state = initialState, { type, payload }: TempType) => {
    switch (type) {
        case "SET_INITIAL": 
            return {
                ...state,
                repos: payload,
                filteredRepos: payload
            };
        case "SET_FILTERED": 
            return {
                ...state,
                filteredRepos: payload
            }
        case "SET_REPOS_NUM": 
            return {
                ...state,
                numOfRepos: payload
            }
        case "TOGGLE_DISPLAY":
            return {
                ...state,
                displayFavorite: payload
            }
        default: 
            return state;
    }
}

const store = createStore(stateReducer)

export default store