'use client';

import React from 'react';
// import Link from 'next/link';
import { useState } from 'react';
import { updateUser, deleteUser } from '@/lib/actions/user.actions';

const Posts = (user: any) => {
  console.log('USER', user);
  const [data, setData] = useState({
    id: user && user.id,
    name: user && user.name,
    email: user && user.email,
  });

  const handleSubmit = () => {
    const userId = user.user.id;
    setData({
      ...data,
      id: userId,
    });

    if (data && data.id) {
      updateUser(data);
    }
  };

  const handleDelete = () => {
    const userId = user.user.id;

    if (userId) {
      deleteUser(userId);
    }
  };
  return (
    <>
      {/* <h1>Recent Posts</h1> */}
      {/* Map through all posts */}
      {/* <Link href="/posts/1">Post 1</Link>
      <Link href="/posts/2">Post2</Link>
      <Link href="/posts/3">Post3</Link> */}

      <div className="mt-10 text-black-600">
        <form action={handleSubmit}>
          <label>Name</label>
          <input
            onChange={(event) => {
              console.log(event.target.value);
              setData({
                ...data,
                name: event.target.value,
              });
            }}
            type="text"
            name="name"
          />
          <label>Email</label>
          <input
            onChange={(event) => {
              console.log(event.target.value);
              setData({
                ...data,
                email: event.target.value,
              });
            }}
            type="text"
            name="email"
          />
          <button type="submit">Submit</button>
        </form>

        <div className="mt-8">
          <button onClick={() => handleDelete()} type="submit">
            Delete User
          </button>
        </div>
      </div>
    </>
  );
};

export default Posts;
