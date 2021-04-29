import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { PostContainer, Data, CommentsContainer } from "./styled";
import { CommentForm } from "./CommentForm";
import up from "../../assets/voteUp.png";
import down from "../../assets/voteDown.png";
import user from "../../assets/user.png";
import calendar from "../../assets/calendar.png";
import { BASE_URL } from "../../constants/Url";
import axios from "axios";

export const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const post = useRequestData(`/posts/${params.id}`, {});

  const vote = (userDirection) => {
    if (post.post.userVoteDirection !== 0) {
      const body = {
        direction: 0,
      };
      axios
        .put(`${BASE_URL}/posts/${params.id}/vote`, body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          window.location.reload();
          console.log(response);
        })
        .catch((error) => console.log(error));
    } else {
      const body = {
        direction: userDirection,
      };
      axios
        .put(`${BASE_URL}/posts/${params.id}/vote`, body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          window.location.reload();
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  };

  const voteComment = (useDirection, commentId) => {
    const body = {
      direction: useDirection,
    };
    axios
      .put(`${BASE_URL}/posts/${params.id}/comment/${commentId}/vote`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        window.location.reload();
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const comments =
    post.post &&
    post.post.comments &&
    post.post.comments.map((comment) => {
      console.log(comment);
      return (
        <CommentsContainer>
          <h4>
            <img src={user} />
            {comment.username}
          </h4>
          <p>{comment.text}</p>
          <p>
            <img src={up} onClick={() => voteComment(1, comment.id)} />
            {comment.votesCount}
            <img src={down} onClick={() => voteComment(-1, comment.id)} />
          </p>
          <span>
            {" "}
            <img src={calendar} /> {comment.createdAt}
          </span>
          {/* {timeStampOnPost(comment.createdAt)}  */}
        </CommentsContainer>
      );
    });

  const timeStampOnPost = (time) => {
    var date = new Date(time);
    return (
      <>
        {date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " às " +
          date.getHours() +
          ":" +
          date.getMinutes()}
      </>
    );
  };

  return (
    <PostContainer>
      <h2>{post.post && post.post.title}</h2>
      <h5>{post.post && post.post.text}</h5>
      <Data>
        <p>
          {post.post && post.post.username}
          {post.post && post.post.createdAt}
        </p>
      </Data>
      {/* {timeStampOnPost(comment.createdAt)} */}
      <span>
        <img src={up} onClick={() => vote(1)} />
        {post.post && post.post.votesCount}
        <img src={down} onClick={() => vote(-1)} />
      </span>
      <h4>Deixe seu comentário</h4>
      <CommentForm />
      <h4>Comentários</h4>

      {comments}
    </PostContainer>
  );
};