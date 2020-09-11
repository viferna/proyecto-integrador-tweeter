import api from "../../app/api";

const {createSlice} = require("@reduxjs/toolkit");

const tweetSlice = createSlice({
    name: "tweet",
    initialState: {
        tweets: [],
        sendingTweet: false,
        sendTweetError: null
    },
    reducers: {
        sendTweetStart(state, action) {
            state.sendingTweet = true;
        },
        sendTweetSuccess(state, action) {
            state.sendingTweet = false;
            state.sendTweetError = null;
            state.tweets.push(action.payload);
        },
        sendTweetError(state, action) {
            state.sendingTweet = false;
            state.sendTweetError = action.payload;
        },
        fetchTweetsSuccess(state, action) {
            state.tweets = action.payload;
        },
        fetchTweetsError(state, action) {
            state.fetchTweetsError = action.payload;
        }

    }
});


export const {
    sendTweetError,
    sendTweetSuccess,
    sendTweetStart,
    fetchTweetsSuccess,
    fetchTweetsError
} = tweetSlice.actions;

export const sendTweet = (text) => async dispatch => {
    dispatch(sendTweetStart());
    try {
        const response = await api.post("/tweets", {text});
        dispatch(sendTweetSuccess());
    } catch (error) {
        dispatch(sendTweetError(error.response.data));
    }
}


export const fetchTweets = () => async dispatch => {
    try {
        const response = await api.get('/tweets');
        dispatch(fetchTweetsSuccess(response.data));
    } catch (error) {
        dispatch(fetchTweetsError(error.response.data));
    }
}


export default tweetSlice.reducer;
