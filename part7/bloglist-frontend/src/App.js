import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import blogService from './services/blogs';
import loginService from './services/login';
import Blog from './components/BlogOld';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import Togglable from './components/Toggleable';
import { initBlogs } from './reducers/blogReducer';
import { setUser, initUser } from './reducers/userReducer';
import { setNotification } from './reducers/notificationReducer';
import { connect } from 'react-redux';
import BlogList from './components/BlogList';
import './index.css';

const App = props => {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [notifMsg, setNotifMsg] = useState(null);
  const [notifMsgType, setNotifMsgType] = useState('info');

  useEffect(() => {
    props.initBlogs();
    props.initUser();
    // eslint-disable-next-line
  }, []);

  if (props.curUser === null) {
    return (
      <div>
        <Notification />
        <LoginForm />
      </div>
    );
  }

  return (
    <div>
      <h1>Blogs</h1>
      {props.curUser.username} <Logout setUser={setUser} />
      <Notification />
      <BlogList />
      <h3>Create New Blog </h3>
      <Togglable buttonLabel="new blog">
        <BlogForm />
      </Togglable>
    </div>
  );
};

const mapStateToProp = state => {
  return {
    curUser: state.user,
  };
};

export default connect(mapStateToProp, {
  initBlogs,
  setUser,
  initUser,
  setNotification,
})(App);
