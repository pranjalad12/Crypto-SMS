import React from "react";
import { Form, Card } from "react-bootstrap";
import { Button } from "@chakra-ui/react";

const StepFive = ({ prevStep, handleFormData, values, nextStep }) => {
  // Define the options as arrays
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Language of Transaction</Form.Label>
              <br/>
              <Form.Control
                as="select"
                value={values.language || ""}
                onChange={(e) => handleFormData("language", e)}
              >
                <option value="">Select Language</option>
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          
            <br/>
            <Form.Group className="mb-3">
              <Form.Label>Select Account</Form.Label>
              <br/>
              <Form.Control
                as="select"
                value={values.account || ""}
                onChange={(e) => handleFormData("account", e)}
              >
                <option value="">Select Account</option>
                {accounts.map((account) => (
                  <option key={account} value={account}>
                    {account}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <br/>
           
            <Form.Group className="mb-3">
              <Form.Label>Select Cryptocurrency</Form.Label>
              <br/>
              <Form.Control
                as="select"
                value={values.cryptocurrency || ""}
                onChange={(e) => handleFormData("cryptocurrency", e)}
              >
                <option value="">Select Cryptocurrency</option>
                {cryptocurrencies.map((crypto) => (
                  <option key={crypto} value={crypto}>
                    {crypto}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <br />
            <div>
              <Button colorScheme="blue" onClick={prevStep}>
                Previous
              </Button>
              <Button colorScheme="green" onClick={handleSave} style={{ marginLeft: "10px" }}>
                Save
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepFive;
