import { db } from '../../firebase';

// CREATE A USER ID DB ON REGISTRATION
export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

// GET ALL USERS
export const onceGetUsers = () =>
  db.ref('users').once('value');
