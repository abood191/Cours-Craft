import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import axios from "axios";
import React from "react";

const BASE_URL = "http://127.0.0.1:8000/storage/";

export const fetchData = async () => {
  const show = await axios.get(
    "http://127.0.0.1:8000/api/admin/getNonTeachersYet"
  );
  const shownoneteacher = show.data[0];
  return shownoneteacher.map((row, index) => ({
    ...row,
    id: index + 1, // Sequential ID starting from 1
  }));
};

export const handleButtonClick = async (row, setRows) => {
  await axios.put(
    `http://127.0.0.1:8000/api/admin/update-teacher-status/${row.user_id}`
  );
  console.log("Teacher accepted:", row);

  // Fetch the updated data
  const updatedData = await fetchData();
  setRows(updatedData);
};

export const handleDeleteClic = async (row, setRows) => {
  await axios.put(
    `http://127.0.0.1:8000/api/admin/deleteTeacher/${row.teacher_id}`
  );
  console.log("Teacher deleted:", row);

  // Fetch the updated data
  const updatedData = await fetchData();
  setRows(updatedData);
};

export const columns = (setRows) => [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    flex: 0.7,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "photo_license",
    headerName: "Photo License",
    align: "center",
    headerAlign: "center",
    flex: 1,
    renderCell: (params) => <PhotoCell url={params.value} />,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "Approval",
    headerName: "Approval",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => handleButtonClick(params.row, setRows)}
      >
        Accept
      </Button>
    ),
  },
  {
    field: "rejection",
    headerName: "Rejection",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Button
        sx={{ backgroundColor: "red", color: "black" }}
        variant="contained"
        size="small"
        onClick={() => handleDeleteClic(params.row, setRows)}
      >
        Reject
      </Button>
    ),
  },
];

function PhotoCell({ url }) {
  const [open, setOpen] = React.useState(false);
  const fullUrl = `${BASE_URL}${url}`;

  const handleClick = () => {
    console.log("Image URL:", fullUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <img
        src={fullUrl}
        alt="photo_license"
        onError={(e) => {
          console.error("Image Load Error:", e);
          alert(`Failed to load image from URL: ${fullUrl}`);
        }}
        style={{ cursor: "pointer", maxWidth: "100px", maxHeight: "100px" }}
        onClick={handleClick}
      />
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Photo License</DialogTitle>
        <DialogContent>
          <img
            src={fullUrl}
            alt="photo_license"
            onError={(e) => {
              console.error("Image Load Error in Dialog:", e);
              alert(`Failed to load image from URL: ${fullUrl}`);
            }}
            style={{ width: "100%" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
