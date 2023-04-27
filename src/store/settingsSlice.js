import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const endpoint = process.env.REACT_APP_ENDPOINT || "";


export const changeAvatar = createAsyncThunk(
    "settings/changeAvatar",
    async ({ newAvatar, id }) => {
  
      const response = await fetch(`${endpoint}/users?id=${id}`, {
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          avatar: newAvatar
        })
      })
      const data = await response.json()
      
      console.log(data);
      return data
    }
  )

const SettingsSlice = createSlice({
    name: "settings",
    initialState: {
        avatar: ``,
        login: ``,
        password: ``
    },
})
    export default SettingsSlice