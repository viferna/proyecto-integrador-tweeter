import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchTweets } from "./tweetSlice";

function Tweets({ history }) {
  const logoutUser = () => {
    localStorage.removeItem("token");

    history.push("/");
  };
  const tweets = useSelector((state) => state.tweet.tweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);
  return (
    <div>
      <Link to="/new-tweet">New Tweet</Link>
      <button onClick={logoutUser}>Log out</button>
      <dl>
        {" "}
        {tweets.map((tweet) => (
          <Fragment key={tweet._id}>
            <dt>
              <strong>@{tweet.author.username}</strong>
            </dt>
            <dd> {tweet.text}</dd>
            <hr />
          </Fragment>
        ))}{" "}
      </dl>
    </div>
  );
}

export default Tweets;
