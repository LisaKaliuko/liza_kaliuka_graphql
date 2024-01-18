import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_ALL_USERS, UserResponseType } from './apollo/users.query';
import AllUsers from './components/AllUsers';

const App = () => {
  const [getAllUsers, { data: users, loading: usersLoading, error: usersError }] =
    useLazyQuery<UserResponseType>(GET_ALL_USERS);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return (
    <div>
      <p>App</p>
      <AllUsers users={users} loading={usersLoading} error={!!usersError} />
    </div>
  );
};

export default App;
