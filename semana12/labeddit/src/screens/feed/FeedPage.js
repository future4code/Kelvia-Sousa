import React from "react";
import writer from "../../assets/write.png";
import { useHistory } from "react-router-dom";
import { CardsContainer, FeedContainer } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { CardPosts } from "../../components/cardPosts/CardPosts";
import { goToCreatePost, goToPost } from "../../routes/Coordinator";

export const FeedPage = () => {
  useProtectedPage();
  const history = useHistory();
  const posts = useRequestData("/posts", []);

  const onClickPost = (id) => {
    goToPost(history, id);
  };

  const postsComponent =
    posts.posts &&
    posts.posts.map((post) => {
      return (
        <CardPosts
          key={post.id}
          name={post.username}
          title={post.title}
          votes={post.votesCount}
          comment={post.commentsCount}
          onClick={() => onClickPost(post.id)}
        />
      );
    });

  return (
    <>
      <FeedContainer>
        <img
          src={writer}
          alt="author"
          onClick={() => goToCreatePost(history)}
        />
        <CardsContainer>{postsComponent}</CardsContainer>
      </FeedContainer>
    </>
  );
};
