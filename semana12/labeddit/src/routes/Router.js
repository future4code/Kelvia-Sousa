import React from "react";
import { Switch, Route } from "react-router-dom";
import { PostPage } from "../screens/post/PostPage";
import { FeedPage } from "../screens/feed/FeedPage";
import { ErrorPage } from "../screens/error/ErrorPage";
import { LoginPage } from "../screens/login/LoginPage";
import { CreatePage } from "../screens/createPost/CreatePage";
import { RegisterPage } from "../screens/register/RegisterPage";

export const Router = ({ setRightButtonText }) => {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage setRightButtonText={setRightButtonText} />
      </Route>

      <Route exact path="/register">
        <RegisterPage setRightButtonText={setRightButtonText} />
      </Route>

      <Route exact path="/">
        <FeedPage />
      </Route>

      <Route exact path="/create">
        <CreatePage />
      </Route>

      <Route exact path="/post/:id">
        <PostPage />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};
