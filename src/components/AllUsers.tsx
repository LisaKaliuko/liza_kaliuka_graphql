import { UserResponseType } from '../apollo/users.query';

type Props = {
  users: UserResponseType | undefined;
  loading: boolean;
  error: boolean;
};

const AllUsers = ({ users, loading, error }: Props) => {
  return (
    <div>
      <p>all users</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {users &&
        !loading &&
        !error &&
        users.getAllUsers.map((user) => (
          <div key={user.id}>
            <p>User name: {user.username}</p>
            <p>User age: {user.age}</p>
            <p>User posts: </p>
            {user.posts ? (
              user.posts.map((post) => <p>{post.title}</p>)
            ) : (
              <p>user doesn't have posts</p>
            )}
          </div>
        ))}
    </div>
  );
};

export default AllUsers;
