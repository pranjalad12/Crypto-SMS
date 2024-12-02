import React from "react";
import { Card } from "react-bootstrap";
import { Button, Select, FormControl, FormLabel, Flex } from "@chakra-ui/react";

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

            <Flex justifyContent="space-between" mt="4">
              <Button colorScheme="blue" onClick={prevStep}>
                Previous
              </Button>
              <Button colorScheme="green" onClick={handleSave}>
                Generate
              </Button>
            </Flex>
          </form>
          <br/>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepFive;
