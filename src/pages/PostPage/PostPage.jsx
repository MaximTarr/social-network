import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from "./PostPage.module.scss"

function PostPage() {
  const dispatch = useDispatch()
  const post = localStorage.getItem("post")
  console.log(post);

  const { posts } = useSelector((state) => state.posts);
  console.log(posts);


  return (
    <div className={s.page}>
      {posts.map((post) => (
        <div key={post.id}>
          <span className={s.textSpan}>This is cool story!</span>
          <div className={s.infoDiv}>
            {<img src={post.image} alt="" className={s.firstImg}/>}
            <div className={s.textDiv}>
              {post.text}
            </div>
          </div>
          <br />
          <div className={s.authorDiv}>

            <img src={post.user.avatar} alt="" className={s.authorImg} />
            <span>{post.user.login}</span>
          </div>
        </div>
      ))
      }
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={s.buttons}>
        <button className={s.editButton}>Edit</button>
        <button className={s.deleteButton}>Delete</button>
      </div>
    </div>
  )
}

export default PostPage