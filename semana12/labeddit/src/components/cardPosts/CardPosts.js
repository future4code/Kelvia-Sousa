import React from "react";
import { PostCards } from "./styled";
import author from "../../assets/author.png";
import { FaCommentAlt, FaVoteYea } from "react-icons/fa";

export const CardPosts = (props) => {
  return (
    <PostCards onClick={props.onClick}>
      <h3>
        <img src={author} alt="perfil" />
        {props.name}
      </h3>
      <h4>{props.title}</h4>
      <h6>{props.date}</h6>
      <p>{props.text}</p>
      <p>Ver mais</p>
      <div>
        <span>
          {props.votes} <FaVoteYea />{" "}
        </span>
        <span>
          {props.comment} <FaCommentAlt />
        </span>
      </div>
    </PostCards>
  );
};
