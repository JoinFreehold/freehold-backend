import React from "react";
import { Container, Row, Col } from "reactstrap";

import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import { Signin } from "../components/signIn";
import { userSession } from "../utils/auth"
import Wallet from "../components/Wallet"

export const ProfileComponent = () => {
  const { user } = useAuth0();

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Stacks Freehold</h1>
          <p>This is where we keep general information for people interested in joining.</p>
          <p>This is also where they can submit/track their initiation task.</p>
          <p>Once they become an "active" freeholder, they can access more.</p>
        </Col>
        <Col>
          <h2>Initiation Task</h2>
          <p>Status: Incomplete / In Progress / Approved</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h1>Stacks Wallet</h1>
          <p>If the user wants to, they can connect their wallet now, and we remind them / require it when it's time for first payout.</p>
        </Col>
        <Col>
          {userSession.isUserSignedIn() ? <Wallet /> : <Signin />}
        </Col>
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
