import React, { useState } from 'react'


import { changeAvatar } from '../../store/settingsSlice';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { logOut } from '../../store/userSlice';

import Input from '../../components/Input'
import Button from '../../components/Button'

import s from "./SettingsPage.module.scss"



function SettingsPage() {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user);
    const endpoint = process.env.REACT_APP_ENDPOINT || "";
    // console.log(user);

    const [loginTexts, setLoginText] = useState()
    const [login, setLogin] = useState()
    const [avatarTexts, setAvatarTexts] = useState()
    const [avatarImage, setAvatarImage] = useState()

    console.log(avatarTexts);
    const Id = user.id

    const avatarChanger = () => {
        dispatch(changeAvatar(avatarTexts, Id))
    }

    const loginChanger = () => {

    }

    const loginText = (event) => {
        setLoginText(event.target.value)
    }

    const avatarText = (event) => {
        setAvatarTexts(event.target.value)
        // console.log(avatar);
    }

    const onLogOut = () => {
        dispatch(logOut())
    }

    return (
        <div>
            <div className={s.settings}>
                <div className={s.topic}>
                    <h1>Settings</h1>
                    <Link to="/">
                        <button>Back</button>
                    </Link>

                </div>
                <div>
                    <span>Email address</span>
                    <Input placeholder='Some mail' />
                    <Button>Save</Button>
                </div>
                <div>
                    <span>Avatar</span>
                    <Input placeholder={user.avatar} value={avatarTexts} onChange={avatarText} />
                    <Button onClick={avatarChanger}>Save</Button>
                </div>
                <div>
                    <span>Name</span>
                    <Input placeholder={user.login} value={loginTexts} onChange={loginText} />
                    <Button onClick={loginChanger}>Save</Button>
                </div>
                <div>
                    <br />
                    <span>Description</span>
                    <br />
                    <textarea></textarea>
                    <Button>Save</Button>
                </div>
                <br />
                <button className={s.logout} onClick={onLogOut}>Log Out</button>
            </div>
        </div>
    )
}

export default SettingsPage