import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import validator from "validator";
import { Input, Button } from "@chakra-ui/react";

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
              <Form.Label>Enter the OTP: </Form.Label>
              <br />
              <br />
              <Input
                placeholder="Enter your OTP"
                value={values.age || ""}
                onChange={(e) => handleFormData("age", e.target.value)}
                isInvalid={error} // Chakra UI's invalid styling
                errorBorderColor="red.500"
                color="white" // Text color set to white
                bg="transparent" // Set background color to transparent
              />
              {error && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  This is a required field
                </div>
              )}
            </Form.Group>

            <div style={{ marginTop: "20px" }}>
              <Button colorScheme="blue" onClick={prevStep} mr={3}>
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
