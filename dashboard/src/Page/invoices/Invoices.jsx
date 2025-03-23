import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import Header from "../../components/Header";
import { UserTable } from "./data.jsx";

const Invoices = () => {
  const { columns, rows } = UserTable();

  return (
    <Box sx={{ height: 600, mx: "auto" }}>
      <Header
        title="Delete Student and teacher"
        subTitle="List of Students and teacher"
      />
      <div style={{ height: "80vh" }}>
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          rows={rows}
          getRowId={(row) => row.user_id || row.teacher_id} // التعامل مع النوعين
          columns={columns}
        />
      </div>
    </Box>
  );
};

export default Invoices;
