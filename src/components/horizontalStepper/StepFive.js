import React from "react";
import { Card } from "react-bootstrap";
import { Button, Select, FormControl, FormLabel } from "@chakra-ui/react";

const StepFive = ({ prevStep, handleFormData, values, nextStep }) => {
  const languages = ["English", "Spanish", "French"];
  const accounts = ["Account1", "Account2"];
  const cryptocurrencies = ["Bitcoin", "Ethereum", "Litecoin"];

  const handleSave = () => {
    nextStep();
  };

  return (
    <>
      <Card>
        <Card.Body>
          <form>
            <FormControl mb="4">
              <FormLabel>Language of Transaction</FormLabel>
              <Select
                placeholder="Select Language"
                value={values.language || ""}
                onChange={(e) => handleFormData("language", e.target.value)}
                bg="black" // Black background for the Select
                color="white" // White text color for better contrast
                borderColor="gray.400"
                _focus={{ bg: "black", borderColor: "blue.500" }} // Black on focus
                _hover={{ bg: "black" }} // Black on hover
                sx={{
                  option: {
                    backgroundColor: "black", // Black background for options
                    color: "white", // White text for options
                  },
                }}
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl mb="4">
              <FormLabel>Select Account</FormLabel>
              <Select
                placeholder="Select Account"
                value={values.account || ""}
                onChange={(e) => handleFormData("account", e.target.value)}
                bg="black"
                color="white"
                borderColor="gray.400"
                _focus={{ bg: "black", borderColor: "blue.500" }}
                _hover={{ bg: "black" }}
                sx={{
                  option: {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                {accounts.map((account) => (
                  <option key={account} value={account}>
                    {account}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl mb="4">
              <FormLabel>Select Cryptocurrency</FormLabel>
              <Select
                placeholder="Select Cryptocurrency"
                value={values.cryptocurrency || ""}
                onChange={(e) => handleFormData("cryptocurrency", e.target.value)}
                bg="black"
                color="white"
                borderColor="gray.400"
                _focus={{ bg: "black", borderColor: "blue.500" }}
                _hover={{ bg: "black" }}
                sx={{
                  option: {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                {cryptocurrencies.map((crypto) => (
                  <option key={crypto} value={crypto}>
                    {crypto}
                  </option>
                ))}
              </Select>
            </FormControl>

            <div>
              <Button colorScheme="blue" onClick={prevStep}>
                Previous
              </Button>
              <Button colorScheme="green" onClick={handleSave} ml="4">
                Generate
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepFive;
