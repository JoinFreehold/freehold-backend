import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import freeholdData from "../utils/freeholdData";
import { Signin } from "../components/signIn";
import { userSession } from "../utils/auth"
import Wallet from "../components/Wallet"

class Freehold extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Available Freeholds</h2>
        <Row className="d-flex justify-content-between">
          {freeholdData.map((col, i) => (
            <Col key={i} md={5} className="mb-4">
              <h6 className="mb-3">
                <a href={col.link}>
                  <FontAwesomeIcon icon="link" className="mr-2" />
                  {col.title}
                </a>
              </h6>
              <p>{col.description}</p>
              {(col.login) ? userSession.isUserSignedIn() ? <Wallet /> : <Signin /> : <p>Not integrated yet</p>}
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Freehold;
