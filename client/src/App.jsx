import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import ListAllProfiles from './pages/ProfileList';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';
import PetDetailPage from './pages/PetDetailPage';
import PetCreationPage from './pages/PetCreationPage';
import PetEditPage from './pages/PetEditPage';
import SinglePostPage from './pages/SinglePostPage';
import CreatePostPage from './pages/CreatePostPage';
import PostEditPage from './pages/PostEditPage';
import MessageThreadDetailPage from './pages/MessageThreadDetailPage';
import MessageThreadListPage from './pages/MessageThreadListPage';
import PetListPage from './pages/PetListPage';
import Bookmark from './pages/Bookmark';
import PetsByUserPage from './pages/PetsByUserPage';
import UserPostsListPage from './pages/UserPostsListPage';
import CommunityPage from './pages/CommunityPage';

import Header from './components/Header';
import AuthenticationContext from './context/authentication';

import { loadUserInformation } from './services/authentication';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUserInformation().then((data) => {
      setUser(data.user);
    });
  }, []);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/centers" element={<ListAllCenters />} /> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/profile/" element={<ListAllProfiles />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/pet/:id" element={<PetDetailPage />} />
          <Route path="/pet/:id/edit" element={<PetEditPage />} />
          <Route path="/pet/list" element={<PetListPage />} />
          <Route path="/pet" element={<PetCreationPage />} />
          {/* <Route path="/pet/bookmarked" element={<Bookmark />} /> */}
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="/post" element={<CreatePostPage />} />
          <Route path="/post/:id/edit" element={<PostEditPage />} />
          <Route path="/post/list/:id" element={<UserPostsListPage />} />
          <Route path="/message/list" element={<MessageThreadListPage />} />
          <Route path="/message/:id" element={<MessageThreadDetailPage />} />
          <Route path="*" element={'404 page'} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/profile/" element={<ListAllProfiles />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/pet/:id" element={<PetDetailPage />} />
          <Route path="/pet/:id/edit" element={<PetEditPage />} />
          <Route path="/pet/list" element={<PetListPage />} />
          <Route path="/pet" element={<PetCreationPage />} />
          {/* <Route path="/pet/bookmarked" element={<Bookmark />} /> */}
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="/post" element={<CreatePostPage />} />
          <Route path="/post/:id/edit" element={<PostEditPage />} />
          <Route path="/message/list" element={<MessageThreadListPage />} />
          <Route path="/message/:id" element={<MessageThreadDetailPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route
            path="/pet/list/user/:id"
            element={<PetsByUserPage></PetsByUserPage>}
          />
          <Route path="*" element={'404 page'} />
        </Routes>
      </BrowserRouter>
    </AuthenticationContext.Provider>
  );
};
export default App;
