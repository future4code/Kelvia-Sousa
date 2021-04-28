import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {useParams} from 'react-router-dom';
import { useRequestData } from "../../hooks/useRequestData";
import {PostContainer} from './styled'
import {CommentContainer} from './styled'
import {CommentForm} from './CommentForm'


export const PostPage = () => {
  useProtectedPage()
  const params = useParams()
  const post = useRequestData(`/posts/${params.id}`, {})

  const comments =  post.post && post.post.comments && post.post.comments.map((comment) => {
    return (
      <CommentContainer>
      <h4>{comment.username}</h4>
      <p>{comment.text}</p>
      <p>votos {comment.votesCount}</p>
      <p>? {comment.userVoteDirection}</p>
      <p>Postado em: {comment.createdAt}</p>
      </CommentContainer>
    )
  })

  return (
    <PostContainer>
      <h3>{post.post && post.post.username}</h3>
     <p>{post.post && post.post.title}</p>
     <p>{post.post && post.post.text}</p>
     <div>
     <p> Data da postagem {post.post && post.post.createdAt}</p>
     <p>votos {post.post && post.post.votesCount}</p>
     <p>
      {post.post && post.post.commentsCount }
      </p>
     <p>{post.post && post.post.userVoteDirection}</p>
     </div>
     <h4>Comentários</h4>
     <div>
     {comments}
     </div>
     <h3>Comente também</h3>
     <CommentForm/>
    </PostContainer>
  )
}