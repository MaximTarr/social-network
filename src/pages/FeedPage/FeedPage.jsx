import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPosts } from "../../store/postsSlice";
import Button from "../../components/Button/Button";

import s from "./FeedPage.module.scss"

function FeedPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)

  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts({ limit: 1, page }));
  }, [page]);

  const onPrev = () => {
    if (page === 1) return
    setPage(prev => prev - 1)
  }
  const onNext = () => {
    setPage(prev => prev + 1)
  }

  const savePost = () => {
    localStorage.setItem("post", JSON.stringify(page))
    console.log(page);
  }

  return (
    <div>
      <div>FeedPage</div>
      <div>
        <Button onClick={onPrev}>Prev</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
      <div>
        {posts.map((post) => (
          <div key={post.id} onClick={savePost}>
            <Link to="/post">
              {post.user && <div>{post.user.login}</div>}
              {post.image &&
                <div className={s.container}>
                  <img src={post.image} alt="" className={s.img} />
                  <div className={s.bottomRight}>ASDFDSF</div>
                </div>}

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedPage;
