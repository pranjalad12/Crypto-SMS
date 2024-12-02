import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";


import {
    Avatar,
    Button,
    Flex,
    Icon,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    useColorMode,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
  } from '@chakra-ui/react';
  
const StepThree = ({ nextStep, prevStep, handleFormData, values }) => {
  const [error, setError] = useState({ passkey: false, amount: false });

  const submitFormData = (e) => {
    e.preventDefault();
    const isPasskeyEmpty = !values.passkey;
    const isAmountEmpty = !values.amount;

    if (isPasskeyEmpty || isAmountEmpty) {
      setError({
        passkey: isPasskeyEmpty,
        amount: isAmountEmpty,
      });
    } else {
      setError({ passkey: false, amount: false });
      nextStep();
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Passkey</Form.Label>
              <br/>
              <Form.Control
                type="text"
                placeholder="Enter your passkey"
                value={values.passkey || ""}
                style={{ border: error.passkey ? "2px solid red" : "" }}
                onChange={(e) => handleFormData("passkey", e.target.value)}
              />
              {error.passkey && (
                <Form.Text style={{ color: "red" }}>
                  Passkey is required.
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <br/>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={values.amount || ""}
                style={{ border: error.amount ? "2px solid red" : "" }}
                onChange={(e) => handleFormData("amount", e.target.value)}
              />
              {error.amount && (
                <Form.Text style={{ color: "red" }}>
                  Amount is required.
                </Form.Text>
              )}
            </Form.Group>
              <br/>
            <div style={{ }}>
              <Button colorScheme="blue" onClick={prevStep}>
                Previous
              </Button>

              <Button colorScheme="blue" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepThree;
