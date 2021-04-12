import React, { useEffect, useState, Component } from "react";
// import axios from 'axios';

function HomePage({ user }: { user: any }) {
  // const [message, setMessage] = useState('');
  let message;
  //if user is set

  useEffect(() => {
  }, [user]);
  if (user) {
    message = `Hi ${user}`;
  } else {
    message = "You are not logged in!";
    // all catalogues
  }
  // setMessage(`Hi ${user.first_name} ${user.last_name}`);
  // setMessage('You are not logged in!');

  return (
    <div className="homepage">
      <h1>Hello World!</h1>
      <p>{message}</p>
    </div>
  );
}

export default HomePage;
