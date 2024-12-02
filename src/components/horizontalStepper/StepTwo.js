import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import validator from "validator";
import { Input, Button, Flex } from "@chakra-ui/react";

const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (validator.isEmpty(values.age)) {
      setError(true);
    } else {
      setError(false);
      nextStep();
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
                isInvalid={error}
                errorBorderColor="red.500"
                color="white"
                bg="transparent"
              />
              {error && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  This is a required field
                </div>
              )}
            </Form.Group>

            <Flex mt={5} justify="space-between">
              <Button colorScheme="blue" onClick={prevStep} w="15%">
                Previous
              </Button>
              <Button colorScheme="blue" type="submit" w="15%">
                Next
              </Button>
            </Flex>
            <br/>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;
