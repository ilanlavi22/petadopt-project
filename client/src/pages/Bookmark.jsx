import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bookmarkList } from '../services/pet';
import AuthenticationContext from '../context/authentication';

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    bookmarkList().then((data) => {
      setBookmarks(data.pets);
    });
  }, []);

  return (
    <div>
      Bookmark
      <div style={{ borderBottom: '1px solid gray' }}>
        {user && Boolean(bookmarks.length) && (
          <>
            <ul>
              {bookmarks.map((pet) => {

                if (pet) {
                  let item = pet.split(' ');

                  return (
                    <li style={{ listStyle: 'none' }} key={bookmarks[0]}>
                      <Link to={`/pet/${item[0]}`}>{item[1]}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Bookmark;