import React, {useState} from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useRequestData } from "../../hooks/useRequestData";
import {CardPosts} from '../../components/cardPosts/CardPosts';
import  {CardsContainer, FeedContainer} from './styled';
import {goToCreatePost, goToPost} from '../../routes/Coordinator';
import { useHistory } from "react-router-dom";
import writer from '../../assets/write.png'

export const FeedPage = () => {
  useProtectedPage()
  const history = useHistory();
  const posts = useRequestData('/posts', [])

  const [searchTerm, setSearchTerm] = useState('')
  console.log(searchTerm)
 
 const titlesFilter = posts.title && posts.title.filter(() => posts.title && posts.title.includes(searchTerm))

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
      onClick={() =>onClickPost(post.id)}
      />
    )
  })

  return (
    <>
    <input type='text' placeholder='Busca' value={searchTerm} onChange={event => {setSearchTerm(event.target.value)}}/>
    <FeedContainer>
      <img src={writer} onClick={() => goToCreatePost(history)}/>
    <CardsContainer>
      {postsComponent}
    </CardsContainer>
    </FeedContainer>
    </>
  )
}


