/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import PageNavbar from "components/Navbars/PageNavbar.js";

import DonateForm from "components/DonateForm.js"
import RequestForm from "components/RequestForm.js"
import Hero from 'components/Hero.js'
import SimpleFooter from 'components/SimpleFooter.js';


const Request = () => {
  return (
    <>
      <PageNavbar/>
      <Hero
        heading="Request masks and boxes of COVID rapid tests"
        body="High-quality, N95-like masks and COVID rapid tests go hand in hand to protect the health of our communities.  Please use the form below to request regular-size masks, small-size masks, and boxes (5-count) of COVID rapid tests to help protect you and your loved ones or your organization."/>
        <Row className="d-flex justify-content-center no-margin pt-5">
          <RequestForm/>
        </Row>
        <SimpleFooter/>
    </>
  );

}

export default Request;
