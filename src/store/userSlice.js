import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const endpoint = process.env.REACT_APP_ENDPOINT || "";

export const authUser = createAsyncThunk(
  "user/authUser",
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${endpoint}/users?login=${login}&password=${password}`
      );

      if (!response.ok) {
        throw new Error("Server error!");
      }

      const data = await response.json();

      if (data.length < 1) {
        throw new Error("There is no such user :(");
      }

      return data[0];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addUser = createAsyncThunk(
  "user/addUser",
  async ({ login, password, avatar }) => {

    const response = await fetch(`${endpoint}/users`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password,
        avatar
      })
    })
    const data = await response.json()

    console.log(data);
    return data
  }
)

export const changeUser = createAsyncThunk(
  "user/changeUser",
  async ({ login, password, avatar, id }) => {

    let formData = {}

    if(login) formData.login = login
    if(password) formData.login = password
    if(avatar) formData.login = avatar


    const response = await fetch(`${endpoint}/users?id=${id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
  })
  const data = await response.json()

  return data
})


const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: 2,
      login: "idzumi",
      password: "qwerty",
      avatar: ""
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    dismissError(state) {
      state.error = null;
    },
    logOut(state) {
      state.user = null;
    },
    changeUser(state, action) {
      state.user.name = action.payload;
    },
  },
  extraReducers: {
    [authUser.pending]: (state) => {
      state.isLoading = true;
    },
    [authUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    }
  },
});

export const { auth, logOut, dismissError } = UserSlice.actions;

export default UserSlice;
