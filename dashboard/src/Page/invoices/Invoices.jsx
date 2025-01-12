import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import react from "react";
import { columns, rows } from "./data.jsx";
import Header from "../../components/Header";
const Invoices = () => {
  return (
    <Box sx={{ height: 600, mx: "auto" }}>
      <Header title="Delete Student and teacher " subTitle="List of Students and teacher" />

      <div style={{ height: '80vh' }}>  {/* 'vh' stands for viewport height */} <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        getRowId={(row) => row.user_id}

        // @ts-ignore
        columns={columns}
      /></div>
    </Box>
  );
};
export default Invoices;
