import React, { useEffect, useState, Component } from "react";
import bigRolo from '../data/images/bigRolo.png';
// import axios from 'axios';

function HomePage({ user }: { user: any }) {
  // const [message, setMessage] = useState('');
  let mrolo = "Meet Rolo, He'll help you get back to the homepage!";
  let message;
  let message2;
  //if user is set

  useEffect(() => {
  }, [user]);
  if (user) {
    message = `Hi ${user}`;
    message2 = "";
  } else {
    message = "Please log in to see our catalogs!";
    message2 = "If you are new you'll have to register.";
  }
  // setMessage(`Hi ${user.first_name} ${user.last_name}`);
  // setMessage('You are not logged in!');

  return (
    <div className="homepage">
      <h1>Welcome to Dex!</h1>
      <p>{message}</p>
      <p>{message2}</p>
      <img src={bigRolo}></img>
      <p>{mrolo}</p>
    </div>
  );
}

export default HomePage;
