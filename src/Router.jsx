import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layout";
import AuthorizationPage from "./pages/AuthorizationPage";
import FeedPage from "./pages/FeedPage";
import PostPage from "./pages/PostPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function Router() {
  const { user } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        {!user && (
          <>
            <Route path="/*" element={<AuthorizationPage />} />
            <Route
              path="/registration"
              element={<AuthorizationPage variant="registration" />}
            />
          </>
        )}
        {user && (
          <Route path="/*" element={<MainLayout />}>
            <Route index element={<FeedPage />} />
          </Route>
        )}
        <Route path="/post" element={<MainLayout />}>
          <Route index element={<PostPage />}/>
        </Route>
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
