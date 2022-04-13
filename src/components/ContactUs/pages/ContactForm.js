import React from "react";
import { useState } from "react";
import "./styles.css";
import { TextField, Grid, InputLabel, Container, Button } from "@mui/material";

const ContactUsForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, message } = userData;
    console.log(userData);
    if (firstName && lastName && phone && email && message) {
      const res = await fetch(
        "https://mun-contact-form-default-rtdb.firebaseio.com/userContactRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("Please fill the required details");
      }
    } else {
      alert("Please fill the required details");
    }
  };
  return (
    <>
      <Container>
        <div className="contactUform">
          <Grid container spacing={3} xs={12}>
            <Grid item xs={6}>
              <InputLabel>First Name </InputLabel>
              <TextField
                name="firstName"
                id="outlined-basic"
                size="small"
                label="First Name"
                variant="outlined"
                onChange={postUserData}
                value={userData.firstName}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Last Name </InputLabel>
              <TextField
                name="lastName"
                id="outlined-basic"
                size="small"
                label="Last Name"
                variant="outlined"
                onChange={postUserData}
                value={userData.lastName}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Email ID </InputLabel>
              <TextField
                name="email"
                id="outlined-basic"
                size="small"
                label="Email ID"
                variant="outlined"
                onChange={postUserData}
                value={userData.email}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Contact No </InputLabel>
              <TextField
                name="phone"
                id="outlined-basic"
                size="small"
                label="Contact No"
                variant="outlined"
                onChange={postUserData}
                value={userData.phone}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                onChange={postUserData}
                value={userData.message}
                fullWidth
              />
            </Grid>
            <Grid xs={12} item>
              <Button
                sx={{
                  backgroundColor: "#4CAF50",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                    boxShadow: "none",
                  },
                }}
                disableElevation
                variant="contained"
                fullWidth
                onClick={submitData}
              >
                {" "}
                Submit{" "}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default ContactUsForm;
