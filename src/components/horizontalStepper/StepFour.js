import React from "react";
import { Card} from "react-bootstrap";
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
const StepFour = ({ nextStep ,values}) => {
  const handleGenerateQRCode = () => {
    // Logic for generating QR Code can go here
    nextStep();
  };
  const { phoneNumber, age, passkey, amount,language, account, cryptocurrency } = values;
  return (
    <>
      <Card>
      <Card.Body>
          <p>Your Account created successfully.</p>
          <br />
          <p>
            <strong>Phone Number:</strong> {phoneNumber}{" "}
          </p>
          
          <p>
            <strong>Passkey:</strong> {passkey}{" "}
          </p>
          <p>
            <strong>Max Amount:</strong> {amount}{" "}
          </p>
        </Card.Body>
        <Card.Body>
          <div style={{ textAlign: "center" }}>
            {/* <h3>Your account has been created successfully!</h3> */}
            <p>You can now proceed to generate your QR code.</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Button
              colorScheme="blue"
              onClick={handleGenerateQRCode}
            >
              Generate QR Code
            </Button>
          </div>
        </Card.Body>
 
      </Card>
    </>
  );
};

export default StepFour;
