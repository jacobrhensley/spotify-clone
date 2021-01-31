export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQBklZdF4gG6QwhtaqERVpYesaifR_oKEAqJ1VXdUTCw8AEYL18w2GMLO_GKwF9FtA3RYqchhFbgMU97E5XV2_EEGeXOzMGkdE_hs3e3gu55vQdTQyVhuv-xpsmQY21VBHrSy7xVqfxM_vwpE8CBOIpNzePi6tfX',
}

const reducer = (state, action) => {
console.log(action);

    switch (action.type) {
        case 'SET_USER': 
        return {
            ...state, 
            user: action.user
        };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
        };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
        };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
        };

        default:
            return state;
    }
}

export default reducer;