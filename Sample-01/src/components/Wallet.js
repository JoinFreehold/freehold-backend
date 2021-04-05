import React from "react";
import { getPerson, userSession } from "../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const person = getPerson();

const Avatar = () => {
  if (person.avatarUrl()) {
    return (
      <img alt="Avatar" src={person.avatarUrl()} height="24px" width="24px" />
    );
  }
  return null;
};

const Wallet = () => (
  <div>
    <Avatar />
    <p><FontAwesomeIcon icon="user" /> STX Wallet Connected</p>
    <p>{console.log(person.walletAddress)}</p>
    <p>
      <button onClick={() => {
          // window.location = 'https://joinfreehold.com/stx-challenges'
          window.open('https://joinfreehold.com/stx-challenges', '_blank')
      }}>Challenges</button><br />
      <button>Hodl Chat</button><br />
      <button onClick={() => {
        userSession.signUserOut();
        window.location = '/profile';
      }}>Disconnect</button>
    </p>
  </div>
);

export default Wallet;
