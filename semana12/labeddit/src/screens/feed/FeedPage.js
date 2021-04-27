import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useRequestData } from "../../hooks/useRequestData";
import {CardPosts} from '../../components/cardPosts/CardPosts';
import  {CardsContainer} from './styled';
import {goToCreatePost, goToPost} from '../../routes/Coordinator';
import { useHistory } from "react-router-dom";

export const FeedPage = () => {
  useProtectedPage()
  const history = useHistory();
  const posts = useRequestData('/posts', [])

  const onClickPost = (id) => {
    goToPost(history, id)
  }

  const postsComponent = posts.posts && posts.posts.map((post) => {
    return(
      <CardPosts
      key={post.id}
      name={post.username}
      title={post.title}
      votes={post.votesCount}
      comment={post.commentsCount}
      userVote={post.userVoteDirection}
      onClick={() =>onClickPost(post.id)}
      />
    )
  })

  return (
    <div>
      <h1>Feed</h1>
      <button type="button" onClick={() => goToCreatePost(history)}> Escreva Seu Post </button>
    <CardsContainer>
      {postsComponent}
    </CardsContainer>
    </div>
  )
}