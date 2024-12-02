import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  Card,
  CardBody,
  HStack,
} from "@chakra-ui/react";

const StepOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();
    console.log("Phone Number in Submit:", values.phoneNumber);
    console.log("Country Code in Submit:", values.countryCode);
    if (!values.phoneNumber || !values.countryCode) {
      setError(true);
    } else {
      setError(false);
      nextStep();
    }
  };

  return (
    <div>
      <Card bg="transparent" boxShadow="none">
        <CardBody>
          <form onSubmit={submitFormData}>
            <FormControl isInvalid={error} mb={4}>
              <FormLabel color="white">Phone Number</FormLabel>
              <HStack>
                <Select
                  placeholder="Code"
                  value={values.countryCode}
                  onChange={(e) =>
                    handleFormData("countryCode", e.target.value)
                  }
                  color="white"
                  bg="transparent"
                  border="1px solid white"
                  _placeholder={{ color: "gray.400" }}
                  _hover={{ bg: "transparent" }}
                  _focus={{ bg: "transparent" }}
                  width="20%"
                >
                  {[
                    { code: "+1", label: "United States" },
                    { code: "+91", label: "India" },
                    { code: "+44", label: "United Kingdom" },
                    { code: "+61", label: "Australia" },
                    { code: "+81", label: "Japan" },
                  ].map((country) => (
                    <option
                      key={country.code}
                      value={country.code}
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      {country.code} ({country.label})
                    </option>
                  ))}
                </Select>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={values.phoneNumber}
                  onChange={(e) =>
                    handleFormData("phoneNumber", e.target.value)
                  }
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  bg="transparent"
                  border="1px solid white"
                  _hover={{ bg: "transparent" }}
                  _focus={{ bg: "transparent" }}
                  width="80%"
                />
              </HStack>
              {error && (
                <FormErrorMessage color="white">
                  Both fields are required or invalid
                </FormErrorMessage>
              )}
            </FormControl>
            <Button colorScheme="blue" type="submit" width="100%">
  Continue
</Button>

          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default StepOne;
