import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-grid-system';
import {
  faLinkedinIn,
  faDiscord,
  faSteam,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="ParentBox">
      <h2>Contact Me</h2>
      <div className="Tabel">
        <Container>
          <Row>
            <Col lg={4}>
              <FontAwesomeIcon
                className="DetailKontak"
                icon={faEnvelope}
                size="2x"
              />
            </Col>
            <Col lg={8}>
              <h3>rizkillahzahra@gmail.com</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <FontAwesomeIcon
                className="DetailKontak"
                icon={faPhone}
                size="2x"
              />
            </Col>
            <Col lg={8}>
              <h3>+62 822-4020-3631</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <FontAwesomeIcon
                className="DetailKontak"
                icon={faLocationArrow}
                size="2x"
              />
            </Col>
            <Col lg={8}>
              <h3>Bandung, Indonesia</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <FontAwesomeIcon
                className="DetailKontak"
                icon={faLinkedinIn}
                size="2x"
              />
            </Col>
            <Col lg={8}>
              <h3>linkedin.com/in/rizqillah-zahra</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <FontAwesomeIcon
                className="DetailKontak"
                icon={faDiscord}
                size="2x"
              />
            </Col>
            <Col lg={8}>
              <h3>Zahra #3258</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <FontAwesomeIcon
                className="DetailKontak"
                icon={faSteam}
                size="2x"
              />
            </Col>
            <Col lg={8}>
              <h3>https://steamcommunity.com/id/rizqillaz</h3>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
