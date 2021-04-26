import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {LoginPage} from '../pages/login/LoginPage';
import {RegisterPage} from '../pages/register/RegisterPage';
import {FeedPage} from '../pages/feed/FeedPage';
import {PostPage} from '../pages/post/PostPage';
import {ErrorPage} from '../pages/error/ErrorPage';
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