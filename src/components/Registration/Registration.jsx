import React, { useState } from 'react'

import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';

import s from "./Registration.module.scss"
import Input from '../Input';
import Button from '../Button';
import { addUser } from '../../store/userSlice';

function Registration() {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const { error } = useSelector((store) => store.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("");
    const [users, setUsers] = useState({});

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const onTryPasswordChange = (event) => {
        setAvatar(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!email) {
            enqueueSnackbar({ message: "There is no E-mail", variant: "error" });
            return;
        }
        if (!password) {
            enqueueSnackbar({ message: "There is no Password", variant: "error" });
            return;
        }
        if (!avatar) {
            enqueueSnackbar({ message: "There is no avatar", variant: "error" });
            return;
        }

        dispatch(addUser({ login: email, password: password, avatar: avatar }));
    };

    return (
        <form className={s.email_address} onSubmit={onSubmit}>
            <div className={s.inputs}>
                <Input
                    value={email}
                    onChange={onEmailChange}
                    placeholder="Your E-mail"
                    label="Email address"
                />
                <Input
                    value={password}
                    onChange={onPasswordChange}
                    placeholder="Your Passwordasdf"
                    label="Password"
                />
                <Input
                    value={avatar}
                    onChange={onTryPasswordChange}
                    placeholder="Avatar URL"
                    label="Avatar"
                />
            </div>
            <Button type="submit">Registration</Button>
        </form>
    );
}

export default Registration