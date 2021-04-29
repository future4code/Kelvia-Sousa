import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { PostContainer, Data, CommentsContainer } from "./styled";
import { CommentForm } from "./CommentForm";
import { BASE_URL } from "../../constants/Url";
import axios from "axios";
import { BiDownvote, BiUpvote } from "react-icons/bi";

import { FaUserAlt} from "react-icons/fa";

export const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const [post, setPost ] = useState({})

  useEffect(() => {
    getPost()
  }, [])

  const getPost =  () => {
    axios.get(`${BASE_URL}/posts/${params.id}`, {headers:{
      Authorization: localStorage.getItem('token')
    }})
    .then((response) => {
      setPost(response.data)
    })
  }

  const time = (milliseconds) => {
    const date =   new Date(milliseconds)
    return (
      date.toLocaleDateString('pt-br')
    )
  }

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
        .then(() => {
          getPost()
        })
        .catch((error) => alert(error.data.message));
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
          getPost()
        })
        .catch((error) => alert(error.data.message));
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
      .then(() => {
        getPost();
      })
      .catch((error) => alert(error.data.message));
  };

  const comments =
    post.post &&
    post.post.comments &&
    post.post.comments.map((comment) => {
      return (
        <CommentsContainer>
          <h4>
            <FaUserAlt />
            {comment.username}
          </h4>
          <p>{comment.text}</p>
          <span>
            <BiUpvote onClick={() => voteComment(1, comment.id)}/>
            
            {comment.votesCount}
            <BiDownvote onClick={() => voteComment(-1, comment.id)} />
          </span>
          <span>
             {time(comment.createdAt)}
          </span>
        </CommentsContainer>
      );
    });


  return (
    <PostContainer>
      <h2>{post.post && post.post.title}</h2>
      <h5>{post.post && post.post.text}</h5>

      <Data>
        <p>
        {post.post && post.post.username}  
        <span>{time(post.post && post.post.createdAt)}</span>
        <span>
        <BiUpvote onClick={() => vote(1)} />
        {post.post && post.post.votesCount}
        <BiDownvote onClick={() => vote(-1)} />
      </span>
        </p>
        
      </Data>

      

      <h4>Deixe seu comentário</h4>

      <CommentForm getPost={getPost}/>

      <h4>Comentários</h4>

      {comments}
    </PostContainer>
  );
};