import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {useParams} from 'react-router-dom';
import { useRequestData } from "../../hooks/useRequestData";
import {PostContainer} from './styled'

export const PostPage = () => {
  useProtectedPage()
  const params = useParams()
  const post = useRequestData(`/posts/${params.id}`, {})

  const comments =  post.post && post.post.comments && post.post.comments.map((comment) => {
    return (
      <>
      <p>{comment.username}</p>
      <p>{comment.text}</p>
      <p>{comment.votesCount}</p>
      <p>{comment.userVoteDirection}</p>
      <p>{comment.createdAt}</p>
      </>
    )
  })

  return (
    <PostContainer>

      <p>{post.post && post.post.username}</p>
     <p>{post.post && post.post.title}</p>
     <p>{post.post && post.post.text}</p>
     <p>{post.post && post.post.createdAt}</p>
     <p>{post.post && post.post.votesCount}</p>
     <p>{post.post && post.post.commentsCount}</p>
     <p>{comments}</p>
     <p>{post.post && post.post.userVoteDirection}</p>
     
    </PostContainer>
  )
}