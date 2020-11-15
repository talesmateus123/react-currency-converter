import React from 'react'
import './CurrencyConverter.css';
import { 
  Jumbotron, 
  Button, 
  Form, 
  Col, 
  Spinner,
  Alert,
  Modal
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

function CurrencyConverter() {
  return (
    <div>
      <Jumbotron>
        <Alert 
          variant="danger"
          show={true}
        >
          Error when converting, please try again later.
        </Alert>
        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>Conversion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Result:
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success">
              New conversion
            </Button>
          </Modal.Footer>
        </Modal>
        <h1>Currency Converter</h1>
        <Form>
          <Form.Row>
            <Col sm="3">
              <Form.Control
                placeholder="0"
                value={1}
                required
               />
            </Col>
            <Col sm="3">
              <Form.Control 
                as="select"
              />
            </Col>
            <Col sm="1">
              <FontAwesomeIcon 
                className="text-center"
                style={{paddingTop: '5px'}}
                icon={faAngleDoubleRight}
              />
            </Col>
            <Col sm="3">
              <Form.Control 
                as="select"
              />
            </Col>
            <Col sm="2">
              <Button
                variant="success"
                type="submit"
              >
                <Spinner 
                  animation="border"
                  size="sm"
                />
                Converter
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default CurrencyConverter;
