import { Alert, Box, Button, Snackbar, Stack, TextField } from "@mui/material";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const Add = () => {
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("info");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("money", data.money);

      // Append the photo_license only if the role is teacher
      if (data.role === "teacher" && data.photo_license[0]) {
        formData.append("photo_license", data.photo_license[0]); // Take the first file
      }

      const res = await axios.post(
        "http://127.0.0.1:8000/api/admin/addMoney",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        console.log("Money transferred successfully:", res.data);
        setSnackbarMessage("Money transferred successfully");
        setSeverity("success");
        setOpen(true);
      }
    } catch (error) {
      console.error("Error during transfer:", error);
      setSnackbarMessage("Error during transfer");
      setSeverity("error");
      setOpen(true);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Box>
      <Header title={"Transfer money"} subTitle={"Transfer money to user"} />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            error={Boolean(errors.email)}
            helperText={errors.email ? "This email  is incorrect" : null}
            {...register("email", {
              required: true,
            })}
            sx={{ flex: 1 }}
            label="email "
            variant="filled"
          />
          <TextField
            error={Boolean(errors.money)}
            helperText={errors.money ? "The amount should be at least 1" : null}
            {...register("money", { required: true, min: 1 })}
            sx={{ flex: 1 }}
            label="Transfer Amount"
            variant="filled"
            type="number"
          />
        </Stack>
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Transfer Money
          </Button>
        </Box>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Add;
