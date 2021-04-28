import React from "react";
import { PostCards } from "./styled";
import com from "../../assets/comment.png";
import up from "../../assets/up.png";
import author from "../../assets/author.png";

export const CardPosts = (props) => {
  return (
    <PostCards onClick={props.onClick}>
      <img src={author} alt="perfil"/>
      <h3>{props.name}</h3>
      <h4>{props.title}</h4>
      <>{props.text}</>
      <span>{props.date}</span>
      <div>
        <span>
          <img src={up} />
          {props.votes}
        </span>
        <span>
          <img src={com} />
          {props.comment}
        </span>
      </div>
    </PostCards>
  );
};
