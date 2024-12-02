import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
  Card,
} from "@chakra-ui/react";

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
    <Card bg="transparent">
      <Box as="form" p="4" onSubmit={submitFormData}>
        {/* Passkey Input */}
        <FormControl mb="4" isInvalid={error.passkey}>
          <FormLabel color="white">Passkey</FormLabel>
          <Input
            type="text"
            placeholder="Enter your passkey"
            value={values.passkey || ""}
            onChange={(e) => handleFormData("passkey", e.target.value)}
            errorBorderColor="red.500"
            color="white"
          />
          {error.passkey && (
            <FormHelperText color="red.500">
              Passkey is required.
            </FormHelperText>
          )}
        </FormControl>

        {/* Amount Input */}
        <FormControl mb="4" isInvalid={error.amount}>
          <FormLabel color="white">Amount</FormLabel>
          <Input
            type="number"
            placeholder="Enter amount"
            value={values.amount || ""}
            onChange={(e) => handleFormData("amount", e.target.value)}
            errorBorderColor="red.500"
            color="white"
          />
          {error.amount && (
            <FormHelperText color="red.500">
              Amount is required.
            </FormHelperText>
          )}
        </FormControl>

        {/* Navigation Buttons */}
        <Box display="flex" justifyContent="space-between" mt="4">
          <Button colorScheme="blue" onClick={prevStep}>
            Previous
          </Button>
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default StepThree;
