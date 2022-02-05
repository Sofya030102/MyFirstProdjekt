import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
        <div className={s.item}>
        <img src ="https://myaquas.ru/wp-content/uploads/2017/01/red-ear-slider.jpg"></img>
          { props.message }
          <div><span>{ props.like }</span></div>
        </div>
        
)
}

export default Post;
