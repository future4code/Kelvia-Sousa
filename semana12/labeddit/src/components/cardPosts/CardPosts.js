import React from 'react';
import {PostCards} from './styled';

export const CardPosts = (props) => {
  return (
    <PostCards onClick={props.onClick}>
      <p>
        {props.name}
      </p>
      <h3>
       {props.title}
      </h3>
      <div>
        {props.text}
      </div>
      <span>
        {props.date}
      </span>
      <div>
        <p>{props.votes}</p>
        <p>{props.comment}</p>
        <p>{props.userVote}</p>
      </div>
    </PostCards>
  )
}