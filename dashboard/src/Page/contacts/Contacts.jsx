import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { fetchData, columns } from "./data.jsx";

const Contacts = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const initialData = await fetchData();
      setRows(initialData);
    };

    fetchInitialData();
  }, []);

  return (
    <Box>
      <Header
        title="Teachers requests"
        subTitle="List of requests job from Teachers"
      />
      <Box sx={{ height: 600, mx: "auto" }}>
        <div style={{ height: "80vh" }}>
          {" "}
          {/* 'vh' stands for viewport height */}{" "}
          <DataGrid
            slots={{ toolbar: GridToolbar }}
            rows={rows}
            getRowId={(row) => row.teacher_id}
            // @ts-ignore
            columns={columns(setRows)}
          />{" "}
        </div>
      </Box>
    </Box>
  );
};

export default Contacts;
