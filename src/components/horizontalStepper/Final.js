import React from "react";
import { Card } from "react-bootstrap";
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
const Final = ({ values }) => {
  
    //destructuring the object from values
  const { phoneNumber, age, passkey, amount} = values;
  return (
    <>
      <Card style={{ textAlign: "left" }}>
        <Card.Body>
          <p>Your Account created succcessfully.</p>
          <br/>
          <p>
            <strong>Phone Number</strong> {phoneNumber}{" "}
          </p>
          
          {/* <p>
            <strong>OTP :</strong> {age}{" "}
          </p> */}
          <p>
            <strong>passkey :</strong> {passkey}{" "}
          </p>
          <p>
            <strong> Max amount :</strong> {amount}{" "}
          </p>

        </Card.Body>
      </Card>
            <br/>
            <Button colorScheme="blue">Generate QR Code</Button>
    </>
  );
};

export default Final;
