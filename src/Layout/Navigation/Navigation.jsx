import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logOut } from "../../store/userSlice";


import people from "../../images/people.png"
import s from "./Navigation.module.scss";

function Navigation() {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut())
  }

  return (
    <div className={s.navigation}>
      <img src={user.avatar} alt="" className={s.avatar} />
      <div className={s.center}>

        {user.login}
      </div>
      <button className={s.buttons}>
        <Link to="/">
          <img src={people} alt="" className={s.people} />
          <div>Feed</div>
        </Link>
      </button>
      <button className={s.buttons}>
        <Link to="/settings">
          <img src={people} alt="" className={s.people} />
          <div>Settings</div>
        </Link>

      </button>

      <button onClick={onLogOut}>LogOut</button>
    </div>
  );
}

export default Navigation;
