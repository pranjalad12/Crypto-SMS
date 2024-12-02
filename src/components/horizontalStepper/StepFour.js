import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import { Button } from "@chakra-ui/react";

const StepFour = ({ prevStep, handleFormData, values }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedCryptocurrency, setSelectedCryptocurrency] = useState("");

  const handleSave = () => {
    handleFormData("language", selectedLanguage);
    handleFormData("account", selectedAccount);
    handleFormData("cryptocurrency", selectedCryptocurrency);
    alert("Preferences Saved");
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Language of Transaction</Form.Label>
              <Form.Control
                as="select"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Account</Form.Label>
              <Form.Control
                as="select"
                value={selectedAccount}
                onChange={(e) => setSelectedAccount(e.target.value)}
              >
                <option value="">Select Account</option>
                <option value="Account1">Account 1</option>
                <option value="Account2">Account 2</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Cryptocurrency</Form.Label>
              <Form.Control
                as="select"
                value={selectedCryptocurrency}
                onChange={(e) => setSelectedCryptocurrency(e.target.value)}
              >
                <option value="">Select Cryptocurrency</option>
                <option value="Bitcoin">Bitcoin</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Litecoin">Litecoin</option>
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

export default StepFour;
