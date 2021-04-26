import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {LoginPage} from '../screens/login/LoginPage';
import {RegisterPage} from '../screens/register/RegisterPage';
import {FeedPage} from '../screens/feed/FeedPage';
import {PostPage} from '../screens/post/PostPage';
import {ErrorPage} from '../screens/error/ErrorPage';
import { Header } from '../components/header/Header';


export const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/login">
           <LoginPage/>
        </Route>

        <Route exact path="/register">
           <RegisterPage/>
        </Route>

        <Route exact path="/">
          <FeedPage/>
        </Route>

        <Route exact path="/post/:id">
          <PostPage/>
        </Route>

        <Route>
          <ErrorPage/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
};