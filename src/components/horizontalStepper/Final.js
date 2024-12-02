import React from "react";
import { Card } from "react-bootstrap";
import { Button, Image } from "@chakra-ui/react";

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
    <>
      <Card style={{ textAlign: "left" }}>
        <Card.Body>
          <p>Your Account created successfully.</p>
          <p>
            <strong>Language:</strong> {language}{" "}
          </p>
          <p>
            <strong>Account:</strong> {account}{" "}
          </p>
          <p>
            <strong>Cryptocurrency:</strong> {cryptocurrency}{" "}
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
          <br />
          <a
            href={qrCodeUrl}
            download
            onClick={(e) => download(e)}
          >
            <Button colorScheme="blue" mt="10px">
              Download
            </Button>
          </a>
        </>
      )}
    </>
  );
};

export default Final;
