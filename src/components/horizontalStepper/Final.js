import React from "react";
import { Card } from "react-bootstrap";
import {
  Button,
  Image,
} from '@chakra-ui/react';

const Final = ({ values, qrCodeUrl }) => {
  // Destructuring the object from values
  const { phoneNumber, age, passkey, amount } = values;

  return (
    <>
      <Card style={{ textAlign: "left" }}>
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
      </Card>
      
      {qrCodeUrl && (
        <>
          <p>Your QR Code:</p>
          <Image 
            src={qrCodeUrl} 
            alt="Generated QR Code" 
            boxSize="150px" 
            mt="10px"
          />
        </>
      )}
    </>
  );
};

export default Final;
