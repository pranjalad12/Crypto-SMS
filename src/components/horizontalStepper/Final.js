import React from "react";
import { Card } from "react-bootstrap";
import { Button, Image, Box } from "@chakra-ui/react";

const Final = ({ values, qrCodeUrl }) => {
  const { language, account, cryptocurrency } = values;

  // Function to handle the download
  const download = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then((buffer) => {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "qr-code.png"); // Set the file name
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link); // Clean up the DOM
        });
      })
      .catch((err) => {
        console.error("Error while downloading the file:", err);
      });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      // minHeight="100vh"
      textAlign="center"
    >
      <Card style={{ textAlign: "left", width: "50%" }}>
        <Card.Body>
          <p style={{ fontSize: "21px", fontWeight: "bold" }}>Your Account created successfully.</p>
          <br/>
          <p style={{ fontSize: "17px"}}>
            <strong>Language:</strong> {language}{" "}
          </p>
          <p style={{ fontSize: "17px"}}>
            <strong>Account:</strong> {account}{" "}
          </p>
          <p style={{ fontSize: "17px"}}>
            <strong>Cryptocurrency:</strong> {cryptocurrency}{" "}
          </p>
        </Card.Body>
      </Card>
      <br/>
      {qrCodeUrl && (
        <>
          <p>Your QR Code:</p>
          <Image
            src={qrCodeUrl}
            alt="Generated QR Code"
            width="50%" // Adjusts the width to 50% of the screen
            mt="10px"
            height="50%"
          />
          <br />
          <a href={qrCodeUrl} download onClick={(e) => download(e)}>
  <Button colorScheme="blue" mt="10px" style={{ width: "200px" }}>
    Download
  </Button>
</a>

        </>
      )}
    </Box>
  );
};

export default Final;
