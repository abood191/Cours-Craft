import { Avatar, Box, Button, Grid, Paper, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  const navigate = useNavigate(); // Initialize the useNavigate hook

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    setAccept(true);

    // Check if the password meets the criteria
    if (password.length < 8) {
      console.log("Password too short.");
      return; // Return early if password is invalid
    }
 
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/user/login", {
        email: email,
        phonenumber: phoneNumber,
        password: password,
      });

      if (res.status === 200) {
        console.log("Login successful!");
        window.localStorage.setItem("email", email);
        navigate("/");
        // Redirect to the main app after successful login
      }
    } catch (err) {
      console.log("Login failed: ", err);
      setEmailErr(err);
    }
  }

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
    backgroundColor: "#d1d2df",
  };

  const avatarStyle = { backgroundColor: "green" };

  return (
    <Grid
      style={{
        padding: "10px",
        marginTop: -10,
        marginRight: -10,
        marginLeft: -10,
        backgroundColor: "#b9bcb954",
        height: "100vh",
      }}
    >
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h1>Login</h1>
        </Grid>

        <div className="register">
          <form onSubmit={handleSubmit}>
            <TextField
              style={{ margin: "10px" }}
              placeholder="Enter your email"
              fullWidth
              required
              variant="standard"
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr === 422 && accept && (
              <p className="error">Email has already been taken</p>
            )}

            <TextField
              style={{ margin: "10px" }}
              placeholder="Enter your phone number"
              fullWidth
              required
              variant="standard"
              type="number"
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <TextField
              style={{ margin: "10px" }}
              fullWidth
              required
              placeholder="Enter your password"
              variant="standard"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 8 && accept && (
              <p className="error">Password must be more than 8 characters</p>
            )}

            <Box>
              <Button
                fullWidth
                variant="contained"
                style={{
                  marginTop: "50px",
                  fontSize: "17px",
                  textAlign: "center",
                }}
                type="submit"
              >
                Login
              </Button>
            </Box>
          </form>
        </div>
      </Paper>
    </Grid>
  );
}
