import React, { useState } from 'react'
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

import ListCurrencies from './ListCurrencies/ListCurrencies'

function CurrencyConverter() {

  const [value, setValue] = useState('1')
  const [fromCurrency, setFromCurrency] = useState('BRL')
  const [toCurrency, setToCurrency] = useState('USD')
  const [showSpinner, setShowSpinner] = useState(false)
  const [validatedForm, setValidatedForm] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [resultConversion, setResultConversion] = useState('')

  const handleCloseModal = event => {
    setValue('1')
    setFromCurrency('BRL')
    setToCurrency('USD')
    setValidatedForm(false)
    setShowModal(false)
  }

  const toConvert = event => {
    event.preventDefault()
    setValidatedForm(true)
    if(event.currentTarget.checkValidity() === true) {
      // TODO Implements call to fixer.io
      setShowModal(true)

    }
  }

  return (
    <div>
      <Jumbotron>
        <Alert 
          variant="danger"
          show={true}
        >
          Error when converting, please try again later.
        </Alert>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Conversion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {resultConversion}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleCloseModal}>
              New conversion
            </Button>
          </Modal.Footer>
        </Modal>
        <h1>Currency Converter</h1>
        <Form onSubmit={toConvert} noValidate validated={validatedForm}>
          <Form.Row>
            <Col sm="3">
              <Form.Control
                placeholder="0"
                value={value}
                onChange={event => setValue(event.target.value.replace(/\D/g, ''))}
                required
               />
            </Col>
            <Col sm="3">
              <Form.Control 
                as="select"
                value={fromCurrency}
                onChange={event => setFromCurrency(event.target.value)}
              >
                <ListCurrencies />
              </Form.Control>
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
                value={toCurrency}
                onChange={event => setToCurrency(event.target.value)}
              >
                <ListCurrencies />
              </Form.Control>
            </Col>
            <Col sm="2">
              <Button
                variant="success"
                type="submit"
              >
                <span className={!showSpinner && 'hidden'}>
                  <Spinner 
                    animation="border"
                    size="sm"
                  />
                </span>
                <span className={showSpinner && 'hidden'}>
                  Converter
                </span>
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default CurrencyConverter;
