import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Alert,
  Snackbar,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import axios from "axios";

const regemail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const roles = [
  { value: "teacher", label: "teacher" },
  { value: "student", label: "student" }, // Only teacher and student roles
];

const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {};

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("phonenumber", data.phonenumber);
      formData.append("role", data.role);

      // Append the photo_license only if the role is teacher
      if (data.role === "teacher" && data.photo_license[0]) {
        formData.append("photo_license", data.photo_license[0]); // Take the first file
      }

      const res = await axios.post(
        "http://127.0.0.1:8000/api/admin/adminRegister",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        console.log("User registered successfully:", res.data);
        setOpen(true);
        // Redirect or store token if necessary
        // window.location.pathname = "/";
        // window.localStorage.setItem("email", data.email);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }

    handleClick();
  };

  const selectedRole = watch("role");

  return (
    <Box>
      <Header title="CREATE USER" subTitle="Create a New User Profile" />

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            error={Boolean(errors.username)}
            helperText={
              errors.username
                ? "This field is required & min 3 characters"
                : null
            }
            {...register("username", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={
            errors.email ? "Please provide a valid email address" : null
          }
          {...register("email", { required: true, pattern: regemail })}
          label="email"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.password)}
          helperText={
            errors.password
              ? "Password is required & must be at least 8 characters"
              : null
          }
          {...register("password", { required: true, minLength: 8 })}
          label="Password"
          type="password" // Ensures the text field hides the input
          variant="filled"
        />

        <TextField
          error={Boolean(errors.phonenumber)}
          helperText={
            errors.phonenumber ? "Please provide a valid Phone number" : null
          }
          {...register("phonenumber", { required: true, pattern: phoneRegExp })}
          label="Contact Number"
          variant="filled"
        />

        <TextField
          variant="filled"
          id="outlined-select-role"
          select
          label="Role"
          defaultValue="student"
          {...register("role", { required: true })}
        >
          {roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {selectedRole === "teacher" && (
          <TextField
            label="Photo License"
            variant="filled"
            type="file"
            inputProps={{ accept: "image/jpeg, image/png" }} // Accept only JPEG and PNG
            {...register("photo_license", {
              required: selectedRole === "teacher",
              validate: {
                isImage: (files) =>
                  (files &&
                    files[0] &&
                    ["image/jpeg", "image/png"].includes(files[0]?.type)) ||
                  "Only JPEG or PNG images are allowed",
              },
            })}
            error={Boolean(errors.photo_license)}
            helperText={
              errors.photo_license ? errors.photo_license.message : null
            }
          />
        )}

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Create New User
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
