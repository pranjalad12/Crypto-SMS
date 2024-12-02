import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import validator from "validator";

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

const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  // Creating error state for validation
  const [error, setError] = useState(false);

  // After form submit, validate the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    
    // Check if the value of age is empty; show error otherwise proceed to the next step
    if (validator.isEmpty(values.age)) {
      setError(true);
    } else {
      setError(false); // Reset the error state
      nextStep(); // Move to the next step
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Enter the OTP sent to phone number</Form.Label>
              <br />
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="number"
                placeholder="Enter OTP"
                value={values.age || ""}
                onChange={(e) => handleFormData("age", e.target.value)}
              />
              {error && (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              )}
            </Form.Group>

            <div style={{  }}>
              <br/>
              <Button colorScheme="blue" onClick={prevStep}>
                Previous
              </Button>

              <Button colorScheme="blue" type="submit">
                Next
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;
{/* <Button colorScheme="blue" type="Submit" onclick={prevStep}>Previous Step</Button> */}