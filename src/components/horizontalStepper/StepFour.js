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
const StepFour = ({ nextStep }) => {
  const handleGenerateQRCode = () => {
    // Logic for generating QR Code can go here
    nextStep();
  };

  return (
    <>
      <Card>
        <Card.Body>
          <div style={{ textAlign: "center" }}>
            <h3>Your account has been created successfully!</h3>
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
