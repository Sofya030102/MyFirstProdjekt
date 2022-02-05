import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

let posts =[
  {id: 1, message: 'привет как дела?', likeCount : 'лайк 19❤' },
  {id: 2, message: 'это мой первый пост', likeCount : 'лайк 19❤' },
  {id: 3, message: 'я черепаха кабан', likeCount : 'лайк 19❤' },
  {id: 4, message: 'сколько сейчас время?', likeCount : 'лайк 19❤' },
  {id: 5, message: 'привет как дела?', likeCount : 'лайк 19❤' },

]

let postsElements =
  posts.map( p => <Post message = {p.message} likesCount={p.likeCount}/>)

  return (
    <div className={s.postsBlock}>
      <h3>Mypost</h3>

      <div>
        <textarea>
        </textarea>
        <button>add post</button>
    
      </div>
      <div className={s.posts}>
          { postsElements }
      </div>
    </div>
  
)
}

export default MyPosts;
