import React, { useState } from "react";
import { sendTweet } from "./tweetSlice";
import { useDispatch, useSelector } from "react-redux";
function TweetForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tweet.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendTweet(text));
  };
  if (loading) {
    return (
      <>
        <div style={{ margin: "15px" }}>
          <i className="fa fa-spinner fa-spin fa-4x"></i>
        </div>
      </>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>New Tweet</h1>
      <textarea
        placeholder="Say something"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

export default TweetForm;
