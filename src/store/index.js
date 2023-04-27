import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./userSlice";
import PostsSlice from "./postsSlice";
import PostSlice from "./postSlice";
import SettingsSlice from "./settingsSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    posts: PostsSlice.reducer,
    post: PostSlice.reducer,
    settings: SettingsSlice,
  },
});
