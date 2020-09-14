import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./features/user/LoginForm";
import SignupForm from "./features/user/SignupForm";
import Tweets from "./features/tweet/Tweets";
import TweetForm from "./features/tweet/TweetForm";
import { PrivateRoute } from "./features/user/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/tweets" component={Tweets} />
        <Route exact path="/new-tweet" component={TweetForm} />
        <Redirect to="/tweets" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
