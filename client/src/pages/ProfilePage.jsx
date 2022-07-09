import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { profileLoad } from '../services/profile';
import placeholder from '../assets/images/placeholder.png';
import ProfileWrapper from '../assets/wrappers/ProfileWrapper';
import AuthenticationContext from '../context/authentication';
import Bookmark from './Bookmark';

const ProfilePage = () => {
  const { id } = useParams();

  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    profileLoad(id).then((data) => {
      setProfile(data.user);
      setPosts(data.posts);
    });
  }, [id]);

  const { user } = useContext(AuthenticationContext);

  return (
    <ProfileWrapper>
      {profile && (
        <div className="page-wrapper content">
          <div className="profile-page">
            <div className="profile-photo">
              {(profile.picture && (
                <img src={profile.picture} alt={profile.name} />
              )) || <img src={placeholder} alt={profile.name} />}
            </div>

            {/* profile-content */}
            <div>
              <div>
                <h2>
                  {profile.name.charAt(0).toUpperCase() +
                    profile.name.slice(1).toLowerCase()}
                </h2>
                <p>{profile.description}</p>

                <div className="flex-spa">
                  {user && user._id === id && (
                    <Link className="page-btn" to="/profile/edit">
                      Edit Profile
                    </Link>
                  )}
                  <p className="small">
                    User Type:{' '}
                    {profile.userType.charAt(0).toUpperCase() +
                      profile.userType.slice(1).toLowerCase()}
                  </p>
                </div>
              </div>

              <div className="division">
                <h3>Pets</h3>
                {/* {Boolean(pets.length) && (
                  <ul>
                    {pets.map((pet) => ({
                      if(pet) {
                        return (
                          <li>
                            <Link to={`/post/${pet._id}`} key={pet._id}>
                              {pet.name}
                            </Link>
                          </li>
                        );
                      }
                    }))}
                  </ul>
                )} */}
              </div>

              <div className="division">
                <h3>Posts</h3>
                {user._id === id && (
                  <ul style={{ listStyle: 'none' }}>
                    <li>
                      <Link to={`/post`}>Create a new post</Link>
                    </li>
                  </ul>
                )}
                <ul style={{ listStyle: 'none' }}>
                  <li>
                    <Link to={`/post/list/${id}`}>
                      View {profile.name}'s posts
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="division">
                <h3>Messages</h3>
                {user && user._id === id && (
                  <ul>
                    <li style={{ listStyle: 'none' }}>
                      <Link
                        to={`/message/list/`}
                        // style={{
                        //   display: 'block',
                        //   marginBlock: '2rem',
                        //   color: 'crimson'
                        // }}
                      >
                        View your message inbox
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {user && user._id !== id && (
                <div className="division">
                  <ul>
                    <li style={{ listStyle: 'none' }}>
                      <Link className="btn" to={`/message/${id}`}>
                        Message This User
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              <div className="division">
                <h3>Pet Bookmarks</h3>
                <Bookmark />
              </div>
            </div>
            {/* end profile-content */}
          </div>
        </div>
      )}
    </ProfileWrapper>
  );
};

export default ProfilePage;
