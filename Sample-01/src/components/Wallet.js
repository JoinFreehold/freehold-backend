import React from "react";
import { Button } from "reactstrap";
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
      <Button outline size="lg" onClick={() => {
          // window.location = 'https://joinfreehold.com/stx-challenges'
          window.open('https://joinfreehold.com/stx-challenges', '_blank')
      }}>Challenges</Button>{' '}
      <Button outline size="lg">Hodl Chat</Button>{' '}
      <Button outline size="lg" onClick={() => {
        userSession.signUserOut();
        window.location = '/profile';
      }}>Disconnect</Button>
    </p>
  </div>
);

export default Wallet;
