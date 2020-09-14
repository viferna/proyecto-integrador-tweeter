import React, { useState } from "react";
import { sendTweet } from "./tweetSlice";
import { useDispatch, useSelector } from "react-redux";
function TweetForm({ history }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tweet.loading);
  const error = useSelector((state) => state.tweet.sendTweetError);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendTweet(text, history));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Tweet</h1>
      <textarea
        placeholder="Say something"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {error && <div style={{ color: "red" }}>{error.message}</div>}
      <br />
      <button type="submit">
        Send {loading && <i className="fa fa-spinner fa-spin"></i>}
      </button>
    </form>
  );
}

export default TweetForm;
