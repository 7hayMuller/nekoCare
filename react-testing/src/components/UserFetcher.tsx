import { useEffect, useState } from 'react';

const UserFetcher = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return <div>{user ? <p>{user.name}</p> : <p>Loading...</p>}</div>;
};

export default UserFetcher;
