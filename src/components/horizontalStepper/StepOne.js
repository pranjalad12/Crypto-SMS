import React, { useState } from "react";
import { Form, Card} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
const StepOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();
    console.log("Phone Number in Submit:", values.phoneNumber);
    console.log(error);
    if (!values.phoneNumber) {
      setError(true);
    } else {
      setError(false);
      nextStep();
    }
  };
  
  return (
    <div>
            <style>
        {`
          .country-list {
            background-color: black !important;
            color: white !important;
          }
          .country-list .country {
            color: white !important;
          }
          .country-list .country:hover {
            background-color: #333 !important; /* Darker gray on hover */
            color: white !important;
          }
          .country-list .country.highlight {
            background-color: #444 !important; /* Dark background for selected option */
            color: white !important;
          }
        `}
      </style>
      <Card>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <PhoneInput
                country={"us"}
                value={values.phoneNumber}
                onChange={(phone) => handleFormData("phoneNumber", phone)}
                inputStyle={{
                  border: error ? "2px solid red" : "",
                }}
              />
              {error && (
                <Form.Text style={{ color: "red" }}>
                  This is a required field or invalid number
                </Form.Text>
              )}
            </Form.Group>
            <br/>
            <Button colorScheme="blue" type="Submit">Continue</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
